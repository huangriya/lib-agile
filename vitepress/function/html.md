# html 相关

## 遍历 dom 树

```javascript
import { elementForEach } from 'lib-agile'

elementForEach(document.getElementById('app'), (el) => {
  console.log(el)
})
```
