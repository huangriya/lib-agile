# html 相关

## 遍历 dom 树

自定 dom 元素，从它开始往上依次遍历，直到根节点

```javascript
import { elementForEach } from 'lib-agile'

elementForEach(document.getElementById('app'), (el) => {
  console.log(el)
})
```
