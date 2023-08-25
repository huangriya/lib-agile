# 数组篇

## 右遍历

数组从右边开始遍历

```javascript
import { forEachRight } from 'lib-agile'

// 示例数据
const arr = [
  {
    name: 'a',
  },
  {
    name: 'b',
  },
  {
    name: 'c',
  },
  {
    name: 'd',
  },
]

forEachRight(arr, (item, index) => {
  console.log(item.name)
})

// 控制台输出 =>
// d c b a
```

## 负数索引

根据负数索引获取对应数组项，负数从-1 开始，-1 代表数组最后一项

```javascript
import { arrEq } from 'lib-agile'

// 示例数据
const arr = [
  {
    name: 'a',
  },
  {
    name: 'b',
  },
  {
    name: 'c',
  },
  {
    name: 'd',
  },
]

arrEq(arr, -1) // => {name: 'd'}

arrEq(arr, 0) // => {name: 'a'}
```

## 删除数组指定项

删除数组指定项

```javascript
import { delArrItem } from 'lib-agile'

// 示例数据
const arr = [
  {
    id: 1,
    name: 'a',
  },
  {
    id: 1,
    name: 'b',
  },
  {
    id: 1,
    name: 'c',
  },
  {
    id: 2,
    name: 'd',
  },
]

delArrItem(arr, { id: 1 }) // => [{id: 2, name: 'd'}]

delArrItem(arr, { id: 1, name: 'a' }) // => [{id: 1, name: 'b'},{id: 1, name: 'c'},{id: 2, name: 'd'}]

delArrItem([1, 2, 2, 4, 5], 2) // => [1, 4, 5]
```
