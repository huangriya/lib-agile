# 数据结构

## 队列

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
