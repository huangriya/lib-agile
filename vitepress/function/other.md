# 其他

## 阻塞程序运行

可以阻塞指定时间的程序运行

```javascript
import { blocked } from 'lib-agile'

blocked(1000) // 阻塞程序1秒
console.log('我会在1秒后输出')

blocked(5000) // 阻塞程序5秒
console.log('我会在5秒后输出')
```
