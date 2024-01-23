<template>
  <td
    class="lib-table-column"
    :class="{
      sticky: props.column.fixed,
      'sticky-left': props.column.leftShadow,
      'sticky-right': props.column.rightShadow,
    }"
    :style="styles"
  >
    <div class="lib-table-column-box" :class="[props.column.className]">
      <slot name="left"></slot>

      <div
        class="lib-table-column-content ellipsis"
        :class="{
          'align-center': props.column.align === 'center',
          'align-right': props.column.align === 'right',
        }"
        @click="sortChange"
      >
        <slot>
          {{ props.column.label }}
        </slot>

        <sort v-if="props.column.sortOrder" :name="props.column.prop" :sort-order="props.column.sortOrder">
        </sort>
      </div>

      <slot name="right"> </slot>
    </div>
  </td>
</template>

<script lang="ts" setup>
import sort from './sort.vue'
import { computed } from 'vue'

const emits = defineEmits(['sortChange'])

const props = defineProps({
  column: {
    type: Object,
    default: () => {
      return {}
    },
  },

  index: {
    type: Number,
    default: 2,
  },

  stroke: {
    type: Boolean,
  },
})

const styles = computed(() => {
  let obj: any = {}
  if (props.column.fixed) {
    if (props.column.left !== undefined) {
      obj['left'] = props.column.left + 'px'
    }
    if (props.column.right !== undefined) {
      obj['right'] = props.column.right + 'px'
    }
  }
  return obj
})

const sortChange = () => {
  if (props.column.sortOrder) {
    emits('sortChange', props.column.prop)
  }
}
</script>
