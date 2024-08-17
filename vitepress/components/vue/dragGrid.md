<script setup>
  // import { dragGrid, dragGridItem } from '../../../src/components/dragGrid/index.ts'
  import { defineAsyncComponent, ref, nextTick } from 'vue'
  import { loadScript } from '../../../src'

  const isReady = ref(false)


    


  const dragGrid = defineAsyncComponent(() => {
    return import('../../../src/components/dragGrid/grid/index.vue')
  }) 

  const dragGridItem = defineAsyncComponent(() => {
    return import('../../../src/components/dragGrid/gridItem/index.vue')
  })


  
  // loadScript('https://gridstackjs.com/node_modules/gridstack/dist/es5/gridstack-all.js', () => {
  //   isReady.value = true
  //   nextTick(() => {
  //     var grid = GridStack.init({
  //       cellHeight: 80,
  //     });
  //   })
  // })
</script>
<link href="https://cdn.bootcdn.net/ajax/libs/gridstack.js/9.2.0/gridstack.css" rel="stylesheet">

# 拖拽网格

拖拽网格布局

## 基本使用

<dragGrid>
  <dragGridItem :id="item" :w="3" :h="2" v-for="item in 10">{{item}}</dragGridItem>
</dragGrid>

<!-- <div class="grid-stack" v-if="isReady">
  <div class="grid-stack-item" :gs-id="item" :gs-w="3" :gs-h="2" v-for="item in 12">
    <div class="grid-stack-item-content" style="border:solid 1px #ddd;border-radius: 4px;">{{item}}</div>
  </div>
</div> -->

<details>
  <summary>查看代码</summary>

```vue{4}
<template>
  <dragGrid>
    <dragGridItem :id="item" :w="3" :h="2" v-for="item in 10">{{item}}</dragGridItem>
  </dragGrid>
</template>
```

</details>

## api

### dragGrid props

| 参数          | 说明               | 类型    | 默认值 |
| ------------- | ------------------ | ------- | ------ |
| cellHeight    | 一栏单元格高度     | Number  | 50     |
| float         |                    | boolean | false  |
| handleClass   | 设置拖拽抓手       | string  |        |
| disableDrag   | 禁止拖拽           | boolean | false  |
| disableResize | 禁止改变单元格大小 | boolean | false  |

### dragGridItem props

| 参数     | 说明               | 类型    | 默认值 |
| -------- | ------------------ | ------- | ------ |
| x        | 位置               | Number  | -      |
| y        | 位置               | Number  | -      |
| w        | 宽度 1 - 12之间    | Number  | 2      |
| h        | 高度               | boolean | 2      |
| minW     | 最小宽度           | boolean | -      |
| minH     | 最小高度           | boolean | -      |
| maxW     | 最大宽度           | boolean | -      |
| maxH     | 最大高度           | boolean | -      |
| noResize | 禁止改变单元格大小 | boolean | false  |
| noMove   | 禁止拖动           | boolean | false  |
| locked   | 锁住单元格         | boolean | false  |
