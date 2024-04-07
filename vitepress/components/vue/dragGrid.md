<script setup>
  // import { dragGrid, dragGridItem } from '../../../src/components/dragGrid/index.ts'
  import { defineAsyncComponent, ref, nextTick } from 'vue'
  import { loadScript } from '../../../src'

  const isReady = ref(false)
  
  loadScript('https://gridstackjs.com/node_modules/gridstack/dist/es5/gridstack-all.js', () => {
    isReady.value = true
    nextTick(() => {
      var grid = GridStack.init({
        cellHeight: 80,
      });
    })
  })
</script>
<link href="https://cdn.bootcdn.net/ajax/libs/gridstack.js/9.2.0/gridstack.css" rel="stylesheet">

# 拖拽网格

拖拽网格布局

## 基本使用

<!--
<dragGrid>
  <dragGridItem :id="item" :w="3" :h="2" v-for="item in 10">{{item}}</dragGridItem>
</dragGrid> -->

<div class="grid-stack" v-if="isReady">
  <div class="grid-stack-item" :gs-id="item" :gs-w="3" :gs-h="2" v-for="item in 12">
    <div class="grid-stack-item-content" style="border:solid 1px #ddd;border-radius: 4px;">{{item}}</div>
  </div>
</div>

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

### props
