<template>
  <columnLayout vertical class="lib-table">
    <template #start>
      <div
        class="lib-table-hd"
        :class="{
          sticky: props.sticky,
        }">
        <scrollBar ref="hdScrollRef" type="hide" @scroll="xScroll($event, 'hd')">
          <table>
            <colgroup>
              <col v-for="item in columns" :width="item.width || column.width" />
            </colgroup>
            <tr v-for="item in headColumns">
              <Td v-for="v in item" :rowspan="v.rowSpan" :colspan="v.colSpan" :column="v.column">
                {{ v.column.label }}
              </Td>
            </tr>
          </table>
        </scrollBar>
      </div>
    </template>

    <div class="lib-table-bd">
      <scrollBar ref="bdScrollRef" type="show" @scroll="xScroll($event, 'bd')">
        <div class="left-boundary" ref="leftBoundary"></div>
        <table>
          <colgroup>
            <col v-for="item in columns" :width="item.width || column.width" />
          </colgroup>
          <tr v-for="row in rows">
            <Td v-for="col in columns" :column="col">{{ row[col.prop] }}</Td>
          </tr>
        </table>
        <div class="right-boundary" ref="rightBoundary"></div>
      </scrollBar>
    </div>

    <template #end>
      <div class="lib-table-ft">ft</div>
    </template>
  </columnLayout>
</template>
<script setup lang="ts">
import { ref, onMounted, triggerRef } from 'vue'
import scrollBar from '../scrollBar/index.vue'
import columnLayout from '../column/index.vue'
import propsObj, { column } from './_module/props'
import useTableData from './_module/useTableData'
import Td from './_module/header/th.vue'
import { boundaryObserve } from './_module/utils'

const props = defineProps(propsObj)

const { columns, headColumns, rows } = useTableData(props)

const hdScrollRef = ref<any>(null)
const bdScrollRef = ref<any>(null)

const xScroll = (v: any, type: string) => {
  type === 'hd' ? bdScrollRef.value.setScrollLeft(v.scrollLeft) : hdScrollRef.value.setScrollLeft(v.scrollLeft)

  if (type === 'bd') {
    // console.log(v)
  }
}

const leftBoundary = ref()
const rightBoundary = ref()

const bo = null

onMounted(() => {
  boundaryObserve([leftBoundary.value, rightBoundary.value], () => {})
})
</script>

<style lang="less">
@import '../../style/components/table.less';
</style>
