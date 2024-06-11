# JavaScript 常用

基础

```js
var: //全局作用域
let: //块级作用域
const: //用来定义常量 必须初始化 const a =2

BOM: //浏览器对象模型，核心是window
DOM: //文档对象模型
window.onload: //当文档和资源都加载完后调用(只能写一个)
window.write(): //操作标签body内容，会覆盖已有内容

$(document).ready(): //当网页中所有的DOM结构绘制完毕就执行,jquery中用法，可简写为$(function(){})
charCodeAt() //返回指定位置的字符编码
charAt() //返回指定位置的字符字符串
parseInt() //转换为number类型，整数
parseFloat() //转换为number类型，可以保留小数
null //访问一个不存在对象返回的值，空对象
undefined //访问一个声明完没有赋值的变量返回的值，空变量
arguments //表示当前函数的所有实参集合 console.log(arguments)
this //当前触发事件
evel() //计算一个字符串并执行里面的JS代码

/* 定时器 */
setInterval(函数, 间隔时间); //重复执行，隔某个时间就执行一次
setTimeout(函数, 间隔时间); //执行一次，延迟某个时间后执行
clearInterval(定时器ID) | clearTimeout(定时器ID); //清除定时器

// 改变this指向
call()  改变函数中的this指向
函数名.call(this指向,参数....)
fun.call(document.body)
fun.call(document.body,10,20) //函数有参时
apply() 用法与call()一致
fun.apply(document.body,[10,20]) //函数有参时
```

## 1.js 时间对象

此模块已分离至：[JS 中-常用时间对象](./js-date.md)

## 2.js 字符串方法

此模块已分离至：[JS 中-字符串-常用方法](./js-str.md)

## 3.数组对象

此模块已分离至：[JS 中-数组对象-常用方法](./js-array.md)

## 4.数学对象

此模块已分离至：[JS 中-常用数学对象](./js-math.md)

## 5.DOM 对象操作

此模块已分离至：[JS 中-DOM 对象操作](./js-dom.md)

## 6.事件函数

此模块已分离至：[JS 中-常用事件函数](./js-event.md)

## 7.BOM-window 对象

```js
window.alert(""); //警告框
window.confirm("是否开始"); //带确认的框，返回true或false
window.prompt("请输入"); //带输入的对话框，确认返回输入的值，取消null
window.open(url); //打开新页面 window.open("http://osuu.net", "_blank", true)
window.close(); //关闭窗口

window.location.herf; //返回当前加载页面的完整url
window.location.search; //返回url中查询字符串，以?开头
window.location.reload(); //重新加载页面

history.go(0); //刷新页面 -1上一页   1后一页
navigator; //获取浏览器信息 详情看文档这里就不多写了
```

## 8.位置属性

```plaintext
元素.clientWidth  / .clientHeight     可视宽高 width+padding

元素.offsetWidth / .offsetHeight     占位宽高 width+padding+border

元素.offsetTop   当前元素的顶部到定位父元素的距离，没有则到body的距离

……

元素.scrollTop  / .scrollLeft   元素被卷去的宽高

元素.scrollWidth / .scrollHeight  获取元素的实际内容宽高

onscroll 滚动事件     window.onscroll = function(){}

onresize 屏幕发生变化时调用
```

## 9.面向对象

**new 操作符都做了什么？**

1.创建了一个空对象

2.让 this 指向这个空对象

3.让空对象的*proto*指向构造函数的 prototype

4.隐式的返回创建的对象

**面向对象的创建方式：**

1.字面量创建 ： （适合创建单个对象，多个会代码冗余）

2.工厂模式创建

3.构造函数创建 ： （解决类型识别问题，但会造成浪费内存）

4.原型创建

5.实例创建

6.混合创建

**面向对象的继承方式：**

1.原型链继承(不能传参)

2.对象冒充继承

3.混合继承

**闭包：**

能够读取其他函数内部变量的函数，函数里面套函数，内部函数访问外部函数变量，在本质上，闭包是将函数内部与函数外部连接起来的桥梁

特点：变量会一直存储在内存中，类似全局变量，避免全局污染

缺点：浪费内存

## 其他

浅拷贝：_拷贝地址_

```js
var arr1 = [1, 4, 2, 3];
var arr2 = arr1;
```

深拷贝：_拷贝值_

```js
for (var i = 0; i > arr1.length; i++) {
  arr3.push(arr1[i]);
}
```

Ajax：原生 ajax 不常用，[查看详情](https://www.w3school.com.cn/js/js_ajax_intro.asp)
