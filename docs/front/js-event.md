# js 事件

## 事件绑定

```js
function fun (){
…..
}
```

添加事件监听：`元素.addEventListener(“click”, fun, false)` 是否捕获 `true/false`

取消事件监听：`元素.removeEventListener(“click”, fun)`

::: warning
IE 浏览器：`元素.attachEvent(“onclick”, fun)`
IE 浏览器取消：`元素.detachEvent(“onclick”, fun)`
:::

## 阻止事件冒泡

标准浏览器：`ev.stopPropagation()`

IE 浏览器：`ev.cancelBubble = true`

```js
var ev = window.event || ev;
ev.stopPropagation ? ev.stopPropagation() : (ev.cancelBubble = true);
```

## 阻止事件默认行为

默认行为：浏览器赋予的默认的操作

阻止默认行为： - 标签.事件 `return false` - 标准浏览器：`ev.preventDefault()`; - ie 浏览器：`ev.returnValue = false`

## 表单事件

提交事件 `form.onsubmit` 提交事件时触发

```js
oForm.onsubmit = function () {
  //如果值为空，不允许提交
  if (oForm.user.value == "") {
    return false;
  }
};
```

重置事件 `form.onreset`

```js
oForm.onreset = function () {
  this.user.value = "";
};
```

获取焦点 `form.onfocus`

```js
//获取焦点事件
oForm.user.onfocus = function () {
  this.style.background = "pink";
};
```

失去焦点 `form.onblur`

```js
oForm.user.onblur = function () {
  this.style.background = "";
};
```

```js
input.focus(); //打开界面input直接获取焦点
input.blur();
input.select(""); //默认选中
oForm.submit(); //提交
oForm.reset(); //重置
```

## 键盘事件

`onkeyup` `onkeydown` `onkeypress`

```js
document.onkeydown = function (ev) {
  var ev = window.event || ev;

  console.log(ev.key); //获取键盘按钮，在ie中获取不到  undefined
  /* 
    console.log(ev.keyCode); //编码不区分大小写，都是按大写的算
    console.log(ev.ctrlKey); //有没有按住ctrl  按--true  没有false
    console.log(ev.shiftKey); //有没有按住ctrl  按--true  没有false
    console.log(ev.altKey); //有没有按住ctrl  按--true  没有false 
  */

  if (ev.ctrlKey && ev.keyCode == 67) {
    console.log("复制");
  }
};
```

## 滚轮事件

1. 添加滚轮事件
   标准、ie： `元素.onmousewheel`
   firefox：必须使用事件绑定 `标签.addEventListener(“DOMMouseScroll”, fun)`

2. 获取滚动方向
   标准、ie : `ev.wheelDelta` 上(120) 下(-120)
   firefox : `ev.detail` 上(-3) 下(3)

   ```js
   var oDiv = document.getElementsByTagName("div")[0];
   //1.添加滚动事件
   oDiv.onmousewheel = mouseScroll;
   oDiv.addEventListener
     ? oDiv.addEventListener("DOMMouseScroll", mouseScroll)
     : null;

   //2.事件触发时调用的事件处理函数
   function mouseScroll(ev) {
     var ev = window.event || ev;
     //3.获取滚动方向
     var flag = true; //true---上   false---下
     if (ev.wheelDelta) {
       flag = ev.wheelDelta > 0 ? true : false;
     } else {
       flag = ev.detail > 0 ? false : true;
     }

     if (flag) {
       //上
     } else {
       //下
     }
   }
   ```

## 事件代理

```js
//1.事件委托：子元素委托父元素
//将事件添加给父元素,当事件发生的时候，通过冒泡传递给父元素，父元素接收到事件，找到具体的子元素去处理
var oUl = document.getElementsByTagName("ul")[0];

//1.将事件委托父元素
oUl.onclick = function(ev){
    var ev = window.event || ev;

    //2.通过target找到具体的子元素去处理事件
    var target = ev.target || ev.srcElement;

    target.style.background = "red";
}

//3.后面添加的标签也可以实现功能，可以发生在未来
oUl.innerHTML += "
```
