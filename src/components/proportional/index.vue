<template>
  <div class="lib-proportion-box">
    <div class="lib-proportion-inner" :style="proportionStyle">
      <div class="lib-proportion-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  value: {
    type: Number,
    default: 1,
  },
})

const proportionStyle = computed(() => {
  return { 'padding-bottom': props.value * 100 + '%' }
})
</script>

<script lang="ts">
export default {
  name: 'LProportional',
}
</script>
<style lang="less">
@import '../../style/components/proportional.less';
</style>
