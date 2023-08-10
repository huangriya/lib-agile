# html 相关

## 从下往上遍历元素

```javascript
import { elementForEach } from 'lib-agile'

elementForEach(document.getElementById('app'), (el) => {
  console.log(el)
})
```
