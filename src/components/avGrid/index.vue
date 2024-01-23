<template>
  <div class="lib-av-grid" :style="style" :class="[alignClass]">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { isNumber } from '../../index'

const props = defineProps({
  // 多少等分
  num: {
    type: Number,
  },

  // 边距
  gutter: {
    type: [Number, Array],
  },

  // 排列方式
  align: {
    type: String,
  },
})

const alignClass = computed(() => {
  if (props.align) {
    const map: any = {
      start: 'align-start',
      center: 'align-center',
      end: 'align-end',
    }
    return map[props.align] || ''
  }
  return ''
})

const style = computed(() => {
  const obj: any = {}
  if (props.num) {
    obj['grid-template-columns'] = `repeat(${props.num}, 1fr)`
  }
  if (props.gutter) {
    if (isNumber(props.gutter)) {
      obj['grid-gap'] = props.gutter + 'px'
    }
  }
  return obj
})
</script>

<script lang="ts">
export default {
  name: 'LAvGrid',
}
</script>

<style lang="less">
@import '../../style/components/avGrid.less';
</style>
