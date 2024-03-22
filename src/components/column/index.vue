<template>
  <div
    class="lib-column"
    :class="[alignClass, { 'lib-column-row': props.vertical }]"
    :style="{ '--lib-column-gap': `${gap}px` }">
    <slot name="start" />

    <div class="lib-column-middle">
      <slot />
    </div>

    <slot name="end" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  // 排列方式
  align: {
    type: String,
    default: null,
  },

  // 垂直排列
  vertical: {
    type: Boolean,
  },

  gap: {
    type: Number,
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
</script>

<script lang="ts">
export default {
  name: 'LColumn',
}
</script>

<style lang="less">
@import '../../style/components/column.less';
</style>
