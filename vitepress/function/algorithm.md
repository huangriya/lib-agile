# 算法篇

## 深度遍历

深度遍历树形结构每一项数据

```javascript
import { depthForEach } from 'lib-agile'

// 示例数据
const arr = [
  {
    id: 1,
    name: 'a',
    children: [
      {
        id: 21,
        name: 'aa',
      },
    ],
  },
  {
    id: 101,
    name: 'b',
    children: [
      {
        id: 102,
        name: 'ba',
      },
    ],
  },
]

depthForEach(arr, (item, parentItem, level) => {
  console.log(item.name)
})
// =>
// a
// aa
// b
// ba
```

## 深度遍历并返回符合条件的第一项数据

深度遍历树形结构数据，直至满足条件为止并返回

```javascript
import { depthFind } from 'lib-agile'

// 示例数据
const arr = [
  {
    id: 1,
    name: 'a',
    children: [
      {
        id: 21,
        name: 'aa',
      },
    ],
  },
  {
    id: 101,
    name: 'b',
    children: [
      {
        id: 102,
        name: 'ba',
      },
    ],
  },
]

const find = depthFind(arr, () => item.id === 21)
// =>
// {
//   id: 21,
//   name: 'aa',
//  }
```

## 广度遍历

广度遍历树形结构每一项数据

```javascript
import { breadthForEach } from 'lib-agile'

// 示例数据
const arr = [
  {
    id: 1
    name: 'a',
    children: [
      {
        id: 21
        name: 'aa',
      },
    ],
  },{
    id: 101
    name: 'b',
    children: [
      {
        id: 102
        name: 'ba',
      },
    ],
  },
]

breadthForEach(arr, (item, parentItem) => {
  console.log(item.name)
})
// =>
// a
// b
// aa
// ba

```

## 首尾指针遍历

首尾同时遍历，循环次数减半

```javascript
import { doubleForEach } from 'lib-agile'

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

doubleForEach(arr, (item, index, type) => {
  console.log(item.name)
})
// =>
// a d
// b c
```

## 首尾指针获取指定条件第一项数据

通过双指针的实现方式返回数组中满足提供条件的第一项数据

```javascript
import { find } from 'lib-agile'

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

find(arr, (item) => item.name === 'd') // 只需循环一次就找到了
// =>
// { name: 'd' }
```

## 随机算法

又称为洗牌算法，把数组中的项随机排列，该算法由 Fisher 和 Yates 创造；时间复杂度为 O(n)

```javascript
import { shuffle } from 'lib-agile'

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

shuffle(arr) // 随机排列该数组
console.log(arr)
```
