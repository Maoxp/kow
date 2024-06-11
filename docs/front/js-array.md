# JS 中-数组对象-常用方法

## 创建数组

字面量方式创建：`var a = [1,2,3,4]`

构造函数创建：`var arr = new Array(1,2,3,4)`

ES6 新增创建数组方法：`Array.of` ； `Array.from` ；

## 数组方法

`push()` 在数组末尾添加元素，返回当前数组长度

`pop()` 删除数组末尾一个元素，返回被删元素

`unshift()` 在数组开头添加元素

`shift()` 在数组开头删除元素

`splice()` 实现删除、插入和替换

```js
arr.splice(1)   从1开始删到末尾
arr.splice(1,2)  从1开始删除2个
arr.splice(1,2,c)  从1开始删2个，用c替换
```

`slice()` 返回从原数组中指定开始下标到结束下标之间的项组成的新数组

`join()` 将数组按特定的分隔符组合成字符串

```js
var arr = [1, 2, 3];
console.log(arr.join()); // 1,2,3
console.log(arr.join("-")); // 1-2-3
console.log(arr); // [1, 2, 3]（原数组不变）
```

`reverse()` 数组排序，倒叙

```js
var arr = ["a", "d", "c", "b"];
console.log(arr.sort()); // ["a", "b", "c", "d"]

var arr = [13, 24, 51, 3];
console.log(arr.reverse()); //[3, 51, 24, 13]
console.log(arr); //[3, 51, 24, 13](原数组改变)
```

`sort()` 数组排序，默认升序

`concat()` 合并数组 arr1.concat(arr2,arr3)

`indexOf()` 查找是否存在某个元素，存在返回对应下标，不存在返回-1

`lastIndexOf` 从数组的末尾开始向前查找

## 数组迭代遍历

`map()` 方法按照原始数组元素顺序依次处理元素，该方法不会改变原数组

```js
arr.map(function(item,index){
        return ….
 })
```

`filter()` 过滤，返回满足条件的新数组

```js
arr.filter(function(item.index){
      return item>3
})
```

`foreach()` 简单循环，没有返回值

`every()` 结果都为 true，返回 true

`some()` 结果有一个为 true，返回 true

## 其他不常用方法

`includes()` **ES7 新增** 方法用来判断一个数组是否包含一个指定的值，如果是返回 true，否则 false

```js
const array1 = [22, 3, 31, 12];
const includes = array1.includes(31);
console.log(includes); // true

const includes1 = array1.includes(31, 3); // 从索引3开始查找31是否存在
console.log(includes1); // false
```

`toLocaleString()` 和 `toString()` 将数组转换为字符串

```js
const array1 = [22, 3, 31, 12];
const str = array1.toLocaleString(); // 22,3,31,12
const str1 = array1.toString(); // 22,3,31,12
```

`fill()` **ES6 新增**

```js
fill(); //方法能使用特定值填充数组中的一个或多个元素。当只是用一个参数时，该方法会用该参数的值填充整个数组。
let arr = [1, 2, 3, cc, 5];
arr.fill(1);
console.log(arr); //[1,1,1,1,1];

//如果不想改变数组中的所有元素，而只是想改变其中一部分，那么可以使用可选的起始位置参数与结束位置参数（不包括结束位置的那个元素）
//3 个参数： 填充数值，起始位置参数，结束位置参数（不包括结束位置的那个元素）
let arr = [1, 2, 3, arr, 5];
arr.fill(1, 2);
console.log(arr); //[1,2,1,1,1]

arr.fill(0, 1, 3);
console.log(arr); //[1,0,0,1,1];
```

## find() 和 findIndex()

```js
find() 、 findIndex()
//方法均接受两个参数：一个回调函数，一个可选值用于指定回调函数内部的 this。
//该回调函数可接受三个参数：数组的某个元素，该元素对应的索引位置，以及该数组本身。
//该回调函数应当在给定的元素满足你定义的条件时返回 true，而 find()和 findIndex()方法均会在回调函数第一次返回 true 时停止查找。

//二者的区别是：find()方法返回匹配的值，而 findIndex()返回匹配位置的索引。
let arr = [1, 2, 3,  arr , 5, 1, 9];
console.log(arr.find((value, keys, arr) => {
    return value > 2;
})); // 3 返回匹配的值

console.log(
    arr.findIndex((value, keys, arr) => {
        return value > 2;
    })
); // 2 返回匹配位置的索引
```

## reduce() 和 reduceRight()

```js
//这两个方法都会实现迭代数组的所有项(即累加器)，然后构建一个最终返回的值。

reduce(); //方法从数组的第一项开始，逐个遍历到最后。
reduceRight(); //则从数组的最后一项开始，向前遍历到第一项。

//4 个参数：前一个值、当前值、项的索引和数组对象
var values = [1, 2, 3, 4, 5];
var sum = values.reduceRight(function (prev, cur, index, array) {
  return prev + cur;
}, 10); //数组一开始加了一个初始值10,可以不设默认0

console.log(sum); //25
```
