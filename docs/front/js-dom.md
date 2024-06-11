# DOM操作

## 获取节点

**父节点.children**  获取子节点，返回子元素集合

**父节点.childNodes**   获取子节点

**子节点.parentNode**  获取直接父节点

**子节点.offsetParent**   获取定位父节点

父元素.firstChild   获取父元素中的首尾节点 ie可用

父元素.firstElementChild   获取父元素首尾节点  标准浏览器专用

元素.nextSibling  获取下一个兄弟节点

元素.nextElementSibling  获取下一个兄弟节点 获取前一个兄弟节点

元素.previousSibling  获取前一个兄弟节点

元素.previousElementSibling  获取前一个兄弟节点 (获取前一个兄弟节点)

节点.nodeName   获取标签节点的标签名

节点.nodevalue    获取文本节点内容

节点.nodeTtpe    获取节点类型

## 创建节点

document.createElement(标签)     创建标签

document.createTextNode(文本)   创建文本

## 添加节点

**父元素.appendChild(标签)**   在父元素末尾添加

## 插入节点

父元素.insertBefore(节点)   在某个元素之前插入

## 删除节点

**元素.remove()**     移除元素

父元素.removeChild(子节点)   移除元素

## 替换节点

父元素.replaceChild(新节点,被替换的节点)

## 复制节点

节点.cloneNode(true)     默认false,只复制标签不复制内容，true复制标签和内容

## 获取和设置属性值

标签.getAttribute(属性名)    获取属性   oLi.getAttribute(‘id’)

标签.setAttribute(属性名,属性值)   设置属性

## 操作标签内容

标签.innerHTML = “” ;   设置标签内容

input.value = “” ;    设置表单内容

标签.style.color = “red” ;  设置样式

标签.className = “” ;   设置class