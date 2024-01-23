<template>
  <div class="lib-color-picker" :class="[props.theme]">
    <div class="color-set-area">
      <div ref="saturationRef" class="saturation">
        <canvas width="152" height="152"></canvas>
        <div class="slide"></div>
      </div>
      <div ref="hueRef" class="hue">
        <canvas width="16" height="152"></canvas>
        <div class="slide"></div>
      </div>
      <div ref="alphaRef" class="color-alpha">
        <canvas width="16" height="152"></canvas>
        <div class="slide"></div>
      </div>
    </div>
    <column class="color-display">
      <div class="show-box transparent-bg">
        <div :style="{ 'background-color': rgba }"></div>
      </div>
      <template v-if="state.isPickColor" #end>
        <div class="sucker" @click="pickColor">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-12 -12 48 48">
            <path
              d="M13.1,8.2l5.6,5.6c0.4,0.4,0.5,1.1,0.1,1.5s-1.1,0.5-1.5,0.1c0,0-0.1,0-0.1-0.1l-1.4-1.4l-7.7,7.7C7.9,21.9,7.6,22,7.3,22H3.1C2.5,22,2,21.5,2,20.9l0,0v-4.2c0-0.3,0.1-0.6,0.3-0.8l5.8-5.8C8.5,9.7,9.2,9.6,9.7,10s0.5,1.1,0.1,1.5c0,0,0,0.1-0.1,0.1l-5.5,5.5v2.7h2.7l7.4-7.4L8.7,6.8c-0.5-0.4-0.5-1-0.1-1.5s1.1-0.5,1.5-0.1c0,0,0.1,0,0.1,0.1l1.4,1.4l3.5-3.5c1.6-1.6,4.1-1.6,5.8-0.1c1.6,1.6,1.6,4.1,0.1,5.8L20.9,9l-3.6,3.6c-0.4,0.4-1.1,0.5-1.5,0.1"></path>
          </svg>
        </div>
      </template>
    </column>
    <column class="color-value">
      <template #start>
        <div class="name">HEX</div>
      </template>
      <input :value="hex" />
    </column>
    <column class="color-value">
      <template #start>
        <div class="name">rgba</div>
      </template>
      <input :value="rgba" />
    </column>
    <avGrid class="color-quick-selection" :num="8" :gutter="10">
      <div v-for="item in props.quickColorsDefault" class="quick-item transparent-bg" @click="setQuickColor(item)">
        <div :style="{ 'background-color': item }"></div>
      </div>
    </avGrid>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive, computed, onBeforeUnmount, watch } from 'vue'
import avGrid from '../avGrid/index.vue'
import column from '../column/index.vue'
import propsData from './_module/props'
import SaturationArea from './_module/saturationArea'
import Hue from './_module/hue'
import Alpha from './_module/alpha'
import { rgb2hex, getColorValue } from './_module/utils'
import { isNumber } from '../../index'

const props = defineProps(propsData)
const emits = defineEmits(['change', 'selectQuickColor'])

const state = reactive({
  isPickColor: !!window.EyeDropper,
  colorMeta: {
    r: 0,
    g: 0,
    b: 0,
    a: 1,
    h: 0,
    s: 0,
    v: 0,
  },
})

const hsv = computed(() => {
  return {
    h: state.colorMeta.h,
    s: state.colorMeta.s,
    v: state.colorMeta.v,
  }
})

const rgb = computed(() => {
  return `rgb(${state.colorMeta.r}, ${state.colorMeta.g}, ${state.colorMeta.b})`
})

const rgbaShort = computed(() => {
  return `${state.colorMeta.r}, ${state.colorMeta.g}, ${state.colorMeta.b}, ${state.colorMeta.a}`
})

const rgba = computed(() => {
  return `rgba(${rgbaShort.value})`
})

const hex = computed(() => {
  return rgb2hex(
    {
      r: state.colorMeta.r,
      g: state.colorMeta.g,
      b: state.colorMeta.b,
    },
    true,
  )
})

const saturationRef = ref<any>(null)
const hueRef = ref<any>(null)
const alphaRef = ref<any>(null)
let saturation: any = null
let hue: any = null
let alpha: any = null

const setColor = (color: any, isSaturation?: boolean) => {
  if (isNumber(color)) {
    state.colorMeta.a = color
  } else {
    const l = getColorValue(color)
    Object.assign(state.colorMeta, l)
  }

  if (saturation && !isSaturation) {
    saturation.load(rgb.value, hsv.value)
  }

  if (hue && !isSaturation) {
    hue.load(hsv.value)
  }

  if (alpha && !isSaturation) {
    alpha.load(rgb.value, state.colorMeta.a)
  }
}

setColor(props.color)

const pickColor = () => {
  const dropper = new EyeDropper()
  dropper
    .open()
    .then((result: any) => {
      setColor(result.sRGBHex)
    })
    .catch((e) => {
      console.log(e)
    })
}

watch(
  () => props.color,
  (val, oldVal) => {
    if (valueBac.hex !== val && valueBac.rgba !== val) {
      setColor(props.color)
    }
  },
)

let valueBac: any = {}
const change = () => {
  valueBac = {
    rgba: rgba.value,
    hsv: hsv.value,
    hex: hex.value,
  }
  emits('change', valueBac)
}

const setQuickColor = (color: string) => {
  setColor(color)
  change()
  emits('selectQuickColor', color)
}

onMounted(() => {
  saturation = new SaturationArea(saturationRef.value)
  saturation.load(rgb.value, hsv.value)
  saturation.onChange = (color: any) => {
    setColor(color, true)
    change()
  }

  hue = new Hue(hueRef.value)
  hue.load(hsv.value)
  hue.onChange = (color: any) => {
    setColor(color)
    change()
  }

  alpha = new Alpha(alphaRef.value)
  alpha.load(rgb.value, state.colorMeta.a)
  alpha.onChange = (a: any) => {
    setColor(a, true)
    change()
  }
})

onBeforeUnmount(() => {
  if (saturation) {
    saturation.unload()
    saturation = null
  }
  if (hue) {
    hue.unload()
    hue = null
  }
  if (alpha) {
    alpha.unload()
    alpha = null
  }
})
</script>

<script lang="ts">
export default {
  name: 'LColorPicker',
}
</script>

<style lang="less">
@import '../../style/components/column.less';
@import '../../style/components/avGrid.less';
@import '../../style/components/colorPicker.less';
</style>
