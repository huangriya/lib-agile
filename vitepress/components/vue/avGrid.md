<!-- <script setup>
  import avGrid from '../../../src/components/avGrid/index.vue'
</script> -->

# 均分网格

把容器平均分成 n 份，凡是需要平均排列的布局都可以用它来实现。

## 基本使用

<!-- <avGrid :num="10">
  <div class="item" v-for="item in 20">1</div>
</avGrid> -->

## api

### props

| 参数   | 说明                                 | 类型          | 默认值 |
| ------ | ------------------------------------ | ------------- | ------ |
| num    | 等分成多少份                         | Number        | 1      |
| align  | 对齐方式。可选值为：start center end | string        | start  |
| gutter | 边距                                 | Number, Array | -      |
