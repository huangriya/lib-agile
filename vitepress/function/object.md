# 对象篇

## 合并对象交集属性

合并源对象与目标对象的交集属性，并返回源对象

```javascript
import { mergeIntersect } from 'lib-agile'

const source = {
  a: 1,
}

const target = {
  a: 2,
  b: 3,
}

mergeIntersect(source, target) // => {a: 2}
```
