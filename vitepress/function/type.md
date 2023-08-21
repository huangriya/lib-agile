# 类型判断

## 是否是数字

```javascript
import { isNumber } from 'lib-agile'

isNumber(5) // => true

isNumber('5') // => false
```

## 是否是布尔

```javascript
import { isBoolean } from 'lib-agile'

isBoolean(5) // => false

isBoolean(true) // => true
```

## isPromise

判断一个对象或者函数是不是 Promise；只要满足 Promise A+规范的都是 Promise

```javascript
import { isPromise } from 'lib-agile'

isPromise(5) // => false

isPromise(new Promise(() => {})) // => true
```
