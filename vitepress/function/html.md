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

## 添加 dom 元素

```javascript
import { addElement } from 'lib-agile'

// 往body里添加元素
addElement('<div id="demo">123</div>')

// 往#demo里添加元素
addElement('<span>11</span>', document.getElementById('demo'))
```

## 设置元素样式

```javascript
import { elementStyle } from 'lib-agile'

// 设置#demo样式
addElement(document.getElementById('demo'), {
  width: '100px',
})
```

## 获取元素属性

```javascript
import { getElementAttr } from 'lib-agile'

// 设置#demo样式
addElement(document.getElementById('demo'), 'data-name') // => name
```

## html 标签转换成安全字符

```javascript
import { escapeHtml } from 'lib-agile'

escapeHtml('<div>123</div>') // => #&lt;div&gt;123&lt;/div&gt;
```
