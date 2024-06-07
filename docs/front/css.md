# css一些常用属性

## 1.鼠标样式  `cursor`

> `cursor` 属性规定要显示的光标的类型（形状）。

```css
cursor: pointer; /* 光标为一只手 */ 
cursor: crosshair; /* 光标为十字架 */ 
cursor: help; /* 帮助 */ 
cursor: wait; /* 沙漏 */
```

其他请参考手册 [cursor](https://www.w3school.com.cn/cssref/pr_class_cursor.asp)

## 2.轮廓线 `outline`

> `outline` 属性是在元素周围绘制的一条线，在边框之外，以凸显元素。
> 这个我们用的多的地方恐怕就是隐藏 `button` 点击时的边框。

```css
outline: none; /* 隐藏button点击时的轮廓线 */
```

其他请参考手册 [outline](https://www.w3school.com.cn/css/css_outline.asp)

## 3.文本固定行数超出隐藏显示省略号

```css
display: -webkit-box; 
overflow: hidden;
-webkit-box-orient: vertical; 
-webkit-line-clamp: 2; /* 行数 */ 
```

## 4.设置文本在几行显示等其他操作

```css
white-space: normal; /* 正常 */ 
white-space: nowrap; /* 一行 */ 
overflow: hidden; /* 溢出隐藏 */ 
text-overflow: ellipsis; /* 超出内容显示省略号 */ 

/* 超出换行 */ 
text-align: justify; 
text-justify: newspaper; 
word-break: break-all;
```

其他请参考手册 [white-space](https://www.w3school.com.cn/cssref/pr_text_white-space.asp)

## 5.字符间距 | 单词间距

```css
letter-spacing: 8px; /* 字符之间间距 */
letter-spacing: normal; /* 默认, 没有额外的空间 */

word-spacing: normal|length|initial|inherit;
```

其他请参考手册 [letter-spacing](https://www.w3school.com.cn/cssref/pr_text_letter-spacing.asp) 与 [word-spacing](https://www.w3school.com.cn/cssref/pr_text_word-spacing.asp)

## 6.阴影  `box-shadow`

> box-shadow 属性向框添加一个或多个阴影。
>提示：请使用 border-image-* 属性来构造漂亮的可伸缩按钮！

```css
box-shadow: 1px 1px 5px #888888;
```

其他请参考手册 [box-shadow](https://www.w3school.com.cn/cssref/pr_box-shadow.asp)

## 7.弹性盒子

```css
display: flex; /* 设置为弹性容器 */ 

/* 定义排列方向，下面遍历出来，用的时候只需要写一个 */ 
flex-direction: row; /* 主轴正方向 */ 
flex-direction: row-reverse; /* 沿主轴反方向排列 */ 
flex-direction: column; /* 纵向排列/沿交叉轴正方向排列 */ 
flex-direction: column-reverse; /* 沿交叉轴反方向排列 */

 /* 定义在主轴对齐方式 */ 
justify-content: space-around; /* 每个项目两边留出相同距离 */ 
justify-content: space-between; /* 两两之间留出距离，首尾没有 */ 
justify-content: center; /* 沿主轴中间对齐 */ 
justify-content: flex-start; /* 沿主轴开始对齐 */
justify-content: flex-end; /* 沿主轴末尾对齐 */ 

/* 定义在交叉轴对齐方式,用的时候括号里的注释自行删掉 */ 
align-items: flex-start | flex-end | center | baseline(基线对齐) | stretch(拉伸占满父级) /* 定义超出容器是否折行 */ 
flex-wrap: nowrap(默认单行) | wrap(多行) | wrap-reverse(反转wrap排列);
```

其他请参考手册 [弹性盒子](https://www.w3cschool.cn/css3/css3-flexbox.html)

## 8.过渡动画 `transition`

> 当元素状态发生改变时，不想直接变化，而是逐渐变化，就使用过渡

```css
width: 100px;
transition: width 2s; /* 鼠标指针放到元素上，其宽度会从 100px 逐渐变为 300px, 2s为过渡时间 */

transition: property duration timing-function delay;
```

不多写，自己看吧 [transition](https://www.w3school.com.cn/cssref/pr_transition.asp)

## 9.渐变属性

```css
background: linear-gradient(to right, #5769f9, #d658fe); /* 线性渐变 */ 
background: radial-gradient(center, shape size, start-color, ..., last-color); /* 径向渐变 */
```

其他请参考手册 [渐变属性](https://www.w3cschool.cn/css_series/css_series-bsi124qn.html)

## 10.overflow

```css
overflow:visible; /* 默认值。内容不会被修剪，会呈现在元素框之外 */ 
overflow:hidden; /* 溢出隐藏 */ 
overflow:scroll; /* 溢出隐藏，但是浏览器会显示滚动条 */ 
overflow:auto; /* 如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容 */ 
overflow:visible; /* 从父元素继承 overflow 属性的值 */
```

其他请参考手册 [overflow](https://www.w3school.com.cn/cssref/pr_pos_overflow.asp)

## 11.让盒子水平垂直居中

```css
/* 方法1：*/ 
position: absolute; 
top: 0; 
bottom: 0; 
left: 0; 
right: 0; 
margin: auto; 

/* 方法2：*/ 
position: absolute; 
top: 50%; 
left: 50%; 
margin-top: -(height/2)px; 
margin-left: -(height/2)px;

/* 方法3：*/ 
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%,-50%);
```

`position` 详细属性请参考手册 [position](https://www.w3school.com.cn/cssref/pr_class_position.asp)

## 12.媒体查询

> 使用 @media 查询，你可以针对不同的媒体类型定义不同的样式。
> 媒体查询的语法格式如下：
> @media media_type and (media_feature:value) {
}

```css
/* 如果浏览器窗口小于 500px, 背景将变为浅蓝色 */
@media only screen and (max-width: 500px) {
    body { background-color: lightblue;}
}
```

详见 [媒体查询](https://www.w3cschool.cn/css/css-rwd-mediaqueries.html)

## 13.伪类选择器

```css
:link     元素初始状态
:hover    鼠标悬停上去的状态
:active    点击之后的状态
:visited    访问之后的状态
```

## 14.overflow 滚动条美化

```css
::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 6px;
    /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
  }
::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #969696;
    border-radius: 9px;
  }
::-webkit-scrollbar-track {
    background-color: #ddd;
  } /* 滚动条的滑轨背景颜色 */
```

## 扩展

### 1.常见浏览器及内核

IE:  trident 内核
Firefox： gecko 内核
Safari:  webkit 内核
Opera:  以前是 presto 内核，Opera 现已改用 Google Chrome 的 Blink 内核
Chrome:  Blink(基于 webkit，Google 与 Opera Software 共同开发)

### 2.H5 新增的标签及属性

#### 新增的布局标签

```html
<header></header>  标记页面或区域头部，与div用法相同，只是语义变了
<footer></footer>  页脚
<nav></nav>        导航
<article></article> 定义独立的内容区，如一篇文章
<section></section> 定义页面内容的分区
<aside></aside>    侧边栏
<hgroup></hgroup>  可以为标题与子标题进行分组，常与h1-h6组合使用
<figure></figure>  定义媒体内容及标题
<mark></mark>      定义带有记号的文本
<time></time>     <time datetime=”2019-02-19″>元宵节</time>
```

#### 新增的多媒体标签

```html
<audio></audio>   音频
<video></video>   视频
<source>   为媒介元素，为上面两个定义媒介资源

新增的Input表单元素
Input类型:url      提交时会验证url域的值
Input类型:email    提交时会验证email域的值
Input类型:search   用于搜索域
Input类型:tel      用于输入电话号码的文本域
Input类型:number   用于包含数值的输入域
Input类型:range    用于包含一定范围内数字的输入域，显示为滑动条
Input类型:color    用于选取颜色
Input类型:date     用于选取日期
Input类型:datetime 允许手动输入日期及时间
Input类型:mouth    允许选择一个月份
Input类型:time     允许选择一个时间
Input类型:week     允许选择周和年
Input类型:mouth    允许选择一个月份
```

#### 新增的Input表单属性

```html
max         规定输入域所允许的最大值
min         规定输入域所允许的最小值
step        规定输入域合法的数字间隔
placeholder 描述输入域所期待的值
autofocus   页面加载时获取焦点
autocomplete 实现自动完成内容输入 on / off
form        规定输入域所属表单
required    规定必须填写
pattern     用于验证输入域的模式，模式是正则表达式
multiple    规定输入域可选择多个值，用于上传域和email输入域
list        实现数据列表下拉效果
required    规定必须填写
```

### 3.css3 新增的属性

#### 边框属性

```css
/* border-radius 圆角 */ 
border-radius:top-left top-right bottom-left bottom-right; 
/* box-shadow 阴影 */ 
box-shadow: h-shaow v-shadow blur spread color inset;
/* 
h-shadow:水平阴影位置 
v-shadow:垂直阴影位置 
blur:迷糊距离 可选 
spread:阴影尺寸 可选 
color:阴影颜色 可选 
inset:将外阴影改为内阴影 outset 可选
 */
```

#### 背景属性

```css
background-image: url(),url();  /* 多背景 */
background-size: length | percentage | cover | contain; /* 背景尺寸 */
/* 
length:设置头像高度和宽度，允许两个或一个值
percentage:以父元素的百分比来设置，允许两个或一个值
cover:背景图像扩展至足够大，完全覆盖背景区域
contain:扩展至最大尺寸，使其宽高适应内容
 */
background-origin:content-box | padding-box | border-box; /* 背景图片定位区域 */
/* 
content-box:背景图像相对于内容框来定位
padding-box:背景图像相对于内边距来定位
border-box:背景图像相对于边框盒来定位
*/
background-clip:border-box | padding-box | content-box; /* 背景的绘制区域 */
/* border-box:背景被裁剪到边框盒
padding-box:背景被裁剪到内边距框
content-box:背景被裁剪到内容框 
*/
```

#### 渐变属性

```css
background: linear-gradient(to right, #5769f9, #d658fe); /* 线性渐变 */
background: radial-gradient(center, shape size, start-color, ..., last-color); /* 径向渐变
```

#### 新增了一些选择器(属性选择器/结构伪类选择器/状态伪类选择器)

##### 属性选择器

```css
input[value]{
   color: #333;
}
input[type=password]{
   color: #000
}

// html
<input type="text" value="请输入用户名">
<input type="text">
```

属性选择器有以下匹配规则（E表示选择器，att表示属性值，val表示匹配的内容）

| 选择符      | 简介                            |
| ----------- | ------------------------------- |
| E[att]      | 具有att属性的E元素              |
| E[att=val]  | 具有att属性且值为val的E元素     |
| E[att^=val] | 具有att属性且值以val开头的E元素 |
| E[att$=val] | 具有att属性且值以val结尾的E元素 |
| E[att*=val] | 具有att属性且值包含val的E元素   |

##### 伪类

> Help 你对元素中的 *奇数项*和*偶数项*的元素操作，分别设置不同的样式。

```css
// html
<ul>
  <li>千与千寻的神隐</li>
  <li>起风了</li>
  <li>龙猫</li>
  <li>天空之城</li>
  <li>魔女宅急便</li>
</ul>

<div>
   <div>----千与千寻的神隐</div>
    <p>----起风了</p>
    <p>---龙猫</span>
    <h6>----天空之城</h6>
    <div>----魔女宅急便</div>
</div>

/* 选择ul的第一个子元素设置字体颜色为棕色 */
ul :first-child {
  color: brown
}
/* 选择ul的最后一个子元素设置下划线 */
ul :last-child {
   text-decoration: underline; 
}
/* 选择ul的偶数子元素 设置字体加粗(下标从1开始) */
ul :nth-child(even){
   font-weight: bold;         
}
/* 表示选择div下 p元素的第一个子元素 */
div p:first-of-type {
   color: brown
}
```

空格的含义：以上每一个**伪类选择器**与前一个**选择器**并没有直接连在一起，都有一个空格, 那空格存在的含义是？？

```css
ul :first-child  表示选择 ul 里的第一个子元素 
ul:first-child   表示选择第一个 ul 元素

ul li:first-child 表示选择 ul里的第一个 li 子元素
```

| 选择符            | 简介                                                         | 备注                                                         |
| ----------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| E :first-child    | 选择 E 元素的第一个子元素                                    | E A:first-child（选择E元素的第一个子元素，且该子元素是A类型元素） |
| E :last-child     | 选择 E 元素的最后第一个子元素                                | E A:last-child（选择E元素的最后第一个子元素，且该子元素是A类型元素 |
| E :nth-child(n)   | 选择E元素的指定规则元素，比如 1、2、3这样的数字 <br />even（偶数）、odd（基数）这样的关键字，n或者2n+1这样的表达式 | E A:nth-child(n)（选择E元素中符合指定规则的子元素，且该子元素是A类型的元素） |
| E :first-of-type  | 选择 E 元素中不同类型的 子元素中的第一个                     | E A:first-of-type（选择E元素中子元素为A，A元素中的第一个）   |
| E :last-of-type   | 选择 E 元素中不同类型的子元素中的最后一个                    | E A:last-of-type（选择E元素中子元素为A，A元素中的最后一个）  |
| E :nth-of-type(n) | 选择 E 元素的不同类型的指定规则                              | E A:nth-of-type（选择E元素中子元素为A，A元素的指定规则）     |

##### 伪元素

> 设置伪元素，必须的属性是 `content`，其它的属性可以根据自己的需要设置。

```css
div {
   position: relative;
}
div::after {
   content: '';
   position: absolute;
   top: 7px;
   left: 70px;
   display: block;
   width: 7px;
   height: 7px;
   border-right: 1px solid #333;
   border-top: 1px solid #333;
   transform: rotate(45deg)
}

<div>查看更多</div>
```

| 选择符    | 简介                   |
| --------- | ---------------------- |
| E::before | 触发 E 元素 之前的效果 |
| E::after  | 触发 E 元素 之后的效果 |

### 4.对BFC规范的理解

> **Formatting Context**：指页面中的一个渲染区域，并且拥有一套渲染规则，他决定了其 子元素如何定位，以及与其他元素的相互关系和作用。
>
> **BFC(Block Formatting Context)**：块级格式化上下文，指在浏览器中页面上创建了一个独立的渲染区域，该区域内所有元素的布局不会影响到区域外
> 元素的布局，这个渲染区域只对块级元素起作用。
>新的 BFC 的盒子是独立布局的，盒子内元素的布局不会影响盒子外面的元素。在同一个 BFC 中的两个相邻的盒子在垂直方向发生margin 重叠的问题。
