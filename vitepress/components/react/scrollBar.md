# 滚动容器

自定义滚动条样式的滚动容器，基于浏览器原生滚动实现，既保留了原生滚动的性能，又具备自定义样式能力，使用起来更是比写 div 还方便。

## 基本使用

当内容超过容器宽高时会自动出现对应滚动条

<script setup>
  // 这个 demo1 重复了多次，复制修改的时候容易漏掉
  import scrollBar from '../../../src/components/scrollBar/index.vue'
</script>

<scrollBar style="border:solid #eee 1px;height:300px">
  <div style="width: 1500px;height: 400px;padding:10px">占位内容</div>
</scrollBar>

<details>
  <summary>查看代码</summary>

```vue{4}
<template>
  <scrollBar style="border:solid #eee 1px;height:300px">
    <div style="width: 1500px;height: 400px;padding:10px">占位内容</div>
  </scrollBar>
</template>

<script setup>
  import scrollBar from '../../src/components/scrollBar/index.vue'
</script>
```

</details>

## 滚动条交互形式

让滚动条一直显示
<scrollBar type="show" style="border:solid #eee 1px;height:200px">

  <div style="width: 1500px;padding:10px">占位内容</div>
</scrollBar>

<details>
  <summary>查看代码</summary>

```vue{4}
<template>
  <scrollBar type="show" style="border:solid #eee 1px;height:200px">
    <div style="width: 1500px;padding:10px">占位内容</div>
  </scrollBar>
</template>

<script setup>
  import scrollBar from '../../src/components/scrollBar/index.vue'
</script>
```

</details>

## 设置滚动偏移量

<scrollBar type="show" :offsetLeft="50" :offsetRight="50" :offsetTop="50" :offsetBottom="50" style="border:solid #eee 1px;height:300px">

  <div style="width: 1500px;height: 400px;padding:10px">
    占位内容
    <div style="text-align: right;">占位内容</div>
  </div>
</scrollBar>
<details>
  <summary>查看代码</summary>

```vue{4}
<template>
  <scrollBar type="show" :offsetLeft="50" :offsetRight="50" :offsetTop="50" :offsetBottom="50" style="border:solid #eee 1px;height:300px">
    <div style="width: 1500px;height: 400px;padding:10px">
      占位内容
      <div style="text-align: right;">占位内容</div>
    </div>
  </scrollBar>
</template>

<script setup>
  import scrollBar from '../../src/components/scrollBar/index.vue'
</script>
```

</details>

## api

### props

| 参数         | 说明                                                                   | 类型   | 默认值 |
| ------------ | ---------------------------------------------------------------------- | ------ | ------ |
| type         | 滚动类型。可选值为：show hover hide                                    | string | hover  |
| minBarSize   | 滚动条最小尺寸，x 轴滚动时宽度不小于这个值，y 轴滚动时高度不小于这个值 | number | 50     |
| offsetLeft   | x 轴滚动条左边偏移量                                                   | number | 0      |
| offsetRight  | x 轴滚动条右边偏移量                                                   | number | 10     |
| offsetTop    | y 轴滚动条上边偏移量                                                   | number | 0      |
| offsetBottom | y 轴滚动条下边偏移量                                                   | number | 10     |

### 事件

| 事件名称 | 说明       | 回调参数                |
| -------- | ---------- | ----------------------- |
| scroll   | 滚动后触发 | function(scrollData, e) |

### 方法

| 方法名称      | 说明                                                    | 参数                       |
| ------------- | ------------------------------------------------------- | -------------------------- |
| updated       | 手动更改 dom 后，容器内容变更后可以手动触发滚动组件更新 | updated()                  |
| setScrollLeft | 手动设置 x 轴滚动位置                                   | setScrollLeft(num: number) |
| setScrollTop  | 手动设置 y 轴滚动位置                                   | setScrollTop(num: number)  |
