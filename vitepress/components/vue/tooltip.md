# 文本工具提示

跟随鼠标移动的工具提示

## 按需引入

```js
import tooltip from 'lib-agile/es/components/tooltip/index'
import 'lib-agile/es/components/tooltip/index.css'

tooltip()
```

<script setup>
  if (!import.meta.env.SSR) {
    import('../../../src/components/tooltip/index').then(res => {
      res.default()
    })
  }
</script>

## 基本使用

<div lib-tooltip lib-tooltip-content="提示内容提示内容提示内容提示内容提示内容提示内容">鼠标放上来就会有提示</div>

<details>
  <summary>查看代码</summary>

```vue{4}
<template>
  <div lib-tooltip lib-tooltip-content="提示内容提示内容提示内容提示内容提示内容提示内容">鼠标放上来就会有提示</div>
</template>
```

</details>

## 省略号文本自动提示

<div class="lib-ellipsis" lib-ellipsis-tooltip style="width:100px">故人西辞黄鹤楼，烟花三月下扬州。孤帆远影碧空尽，唯见长江天际流。</div>

<details>
  <summary>查看代码</summary>

```vue{4}
<template>
  <div class="lib-ellipsis" lib-ellipsis-tooltip style="width:100px">故人西辞黄鹤楼，烟花三月下扬州。孤帆远影碧空尽，唯见长江天际流。</div>
</template>
```

</details>

## 省略号文本指定提示内容

<div class="lib-ellipsis" lib-ellipsis-tooltip lib-tooltip-content="提示内容提示内容提示内容提示内容提示内容提示内容" style="width:100px">故人西辞黄鹤楼，烟花三月下扬州。孤帆远影碧空尽，唯见长江天际流。</div>

<details>
  <summary>查看代码</summary>

```vue{4}
<template>
  <div class="lib-ellipsis" lib-ellipsis-tooltip lib-tooltip-content="提示内容提示内容提示内容提示内容提示内容提示内容" style="width:100px">故人西辞黄鹤楼，烟花三月下扬州。孤帆远影碧空尽，唯见长江天际流。</div>
</template>
```

</details>

## 参数

| 参数            | 说明                         | 类型   | 默认值 |
| --------------- | ---------------------------- | ------ | ------ |
| mouseEnterDelay | 鼠标移入元素后多久显示(毫秒) | number | 100    |
| bubblingLevel   | 鼠标移入元素后向上查找层级   | number | 3      |
