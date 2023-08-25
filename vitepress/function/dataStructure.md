# 数据结构

## 队列

队列是遵循先进先出（FIFO）原则的一组有序的项，从尾部添加新元素，并从顶部移除元素。

```javascript
import { Queue } from 'lib-agile'

const queue = new Queue()

// 往队列末尾添加值
queue.add(1)

// 移除队列第一项值
queue.remove() // => item

// 返回队列长度
queue.size() // => 1

// 队列是否为空
queue.isEmpty() // => true

// 清空队列
queue.clear()
```

## 双端队列

双端队列是一种允许我们同时从前端和后端添加和移除元素的特殊队列。

```javascript
import { Deque } from 'lib-agile'

const deque = new Deque()

// 往队列开始添加值
deque.addFront(1)

// 往队列结尾添加值
deque.addBack(1)

// 移除队列第一项值，返回当前移除的项
deque.removeFront() // => item

// 移除队列最后一项值，返回当前移除的项
deque.removeBack() // => item

// 返回队列长度
deque.size()

// 队列是否为空
deque.isEmpty()

// 清空队列
deque.clear()
```

## 栈

栈是一种遵从后进先出原则的有序集合。新添加或待删除的元素都保存在栈的同一端，称作栈顶，另一端就叫栈底。在栈里，新元素都靠近栈顶，旧元素都接近栈底。

```javascript
import { Stack } from 'lib-agile'

const stack = new Queue()

// 往栈里添加值
stack.add(1)

// 往栈里移除值
stack.remove() // => item

// 返回栈长度
stack.size() // => 1

// 栈是否为空
stack.isEmpty() // => true

// 清空栈
stack.clear()
```

## 链表

存储有序的元素集合，链表中的元素在内存中并不是连续放置的。每个元素由一个存储元素本身的节点和一个指向下一个元素的引用（也称指针或链接）组成

## 一维数组转 树 结构

```javascript
import { arrToTree } from 'lib-agile'

// 示例数据
const arr = [
  {
    id: 1,
    name: '1',
  },
  {
    id: 11,
    name: '1-1',
    parentId: 1,
  },
  {
    id: 12,
    name: '1-2',
    parentId: 1,
  },
]

arrToTree(arr)

// 输出 =>
// [
//   {
//     id: 1,
//     name: '1',
//     children: [
//       {
//         id: 11,
//         name: '1-1',
//         parentId: 1,
//       },
//       {
//         id: 12,
//         name: '1-2',
//         parentId: 1,
//       },
//     ],
//   }
// ]

// 示例数据
const arr = [
  {
    uuid: 1,
    name: '1',
  },
  {
    uuid: 11,
    name: '1-1',
    pid: 1,
  },
  {
    uuid: 12,
    name: '1-2',
    pid: 1,
  },
]

arrToTree(arr, {
  id: 'uuid',
  parentId: 'pid',
  children: 'child',
})

// 输出 =>
// [
//   {
//     uuid: 1,
//     name: '1',
//     child: [
//       {
//         uuid: 11,
//         name: '1-1',
//         pid: 1,
//       },
//       {
//         uuid: 12,
//         name: '1-2',
//         pid: 1,
//       },
//     ],
//   }
// ]
```

## 数组转 map 结构

```javascript
import { arrToMap } from 'lib-agile'

// 示例数据
const arr = [
  {
    id: 1,
    name: 'a',
  },
  {
    id: 2,
    name: 'b',
  },
]

arrToMap(arr, 'id') // => {1: {id: 1, name: a}, 2: {id: 2}}
```
