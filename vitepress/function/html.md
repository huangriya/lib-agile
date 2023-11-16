# html 相关

## 遍历 dom 树

指定 dom 元素，从它开始往上依次遍历，直到根节点

```javascript
import { elementForEach } from 'lib-agile'

elementForEach(document.getElementById('app'), (el) => {
  console.log(el)
})
```

## html 解析器

把 html 字符串解析成 document 对象

```javascript
import { htmlParser } from 'lib-agile'

htmlParser('<div>123</div>') // => #document
```

## html 标签转换成安全字符

```javascript
import { escapeHtml } from 'lib-agile'

escapeHtml('<div>123</div>') // => #&lt;div&gt;123&lt;/div&gt;
```
