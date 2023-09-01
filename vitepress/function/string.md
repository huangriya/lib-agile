# 字符串篇

## 随机字符串

随机生成指定长度的字符串，随机包含大写字母、小写字母、数字

```javascript
import { randomStr } from 'lib-agile'

randomStr(5) // => D2d4t
```

## 随机颜色

随机生成颜色值，支持 rgb, rgba, hsl, hsla, hex

```javascript
import { randomColor } from 'lib-agile'

randomColor()
```

## 随机 ip

随机生成 ip 地址，支持 ipv4 ipv6

```javascript
import { randomIp } from 'lib-agile'

randomIp() //ipv4

randomIp(1) //ipv6
```
