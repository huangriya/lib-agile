<script setup>
  import htmlCodePreview from '../../../src/components/htmlCodePreview/index.vue'

  const html = `<div class='box'>我是一段html代码</div>`
  const css = `
    .box {
      width:150px;
      height:150px;
      background:#ff0000;
    }
  `
  const js = `console.log('运行js代码')`
</script>

# html代码预览

设置自定义html、css、js代码预览器效果

## 基本用法

运行html、css、js代码
<htmlCodePreview :html="html" :css="css" :js="js"></htmlCodePreview>

<details>
  <summary>查看代码</summary>

```vue{4}
<template>
  <htmlCodePreview :html="html" :js="js" :css="css"></htmlCodePreview>
</template>
<script setup>
  const html = `<div class='box'>我是一段html代码</div>`
  const css = `
    .box {
      width:150px;
      height:150px;
      background:#ff0000;
    }
  `
  const js = `console.log('运行js代码')`
</script>
```

</details>

## api

### props

| 参数 | 说明           | 类型   | 默认值 |
| ---- | -------------- | ------ | ------ |
| html | 自定义html代码 | string | -      |
| css  | 自定义css代码  | string | -      |
| js   | 自定义js代码   | string | -      |
