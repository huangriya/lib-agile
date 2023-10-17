# 数字篇

## 随机数

获取区间内随机数，

```javascript
import { random } from 'lib-agile'

// 生成0到10之间的随机数
random(0, 10) // => 3

// 生成0到10之间的随机数
random(100) // => 76

// 生成0到10之间的随机数，并保留两位小数
random(0, 10, 2) // => 3.23
```

## 数字千分位

数字转换成货币格式

```javascript
/**
 * @param num 要处理的数字
 * @param digits 保留几位小数
 * @param isIntegerSet 整数是否处理小数逻辑
 */

import { toCurrency } from 'lib-agile'

toCurrency(10000) // => 100,00

toCurrency(10000, 1, true) // => 100,00.0

toCurrency(10000.89) // => 100,00.89

toCurrency(10000.893, 2) // => 100,00.89
```

## 数字差值

计算两个数的差值

```javascript
import { diffCount } from 'lib-agile'

diffCount(1000, 900) // => 100

diffCount(900, 1000) // => 100
```

## 判断一个数是不是奇数

```javascript
import { isOdd } from 'lib-agile'

isOdd(1) // => true

isOdd(2) // => false
```
