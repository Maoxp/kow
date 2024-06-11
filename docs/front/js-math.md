# JS 中-常用数学对象

## 圆周率

```js
Math.PI;
console.log(Math.PI); // 3.141592653589793
```

## 四舍五入

```js
取整并四舍五入;
Math.round(x);
console.log(Math.round(2.22)); //2
```

## 向上取整

```js
Math.ceil(x)
例：console.log(Math.ceil(3.2))  // 4
```

## 向下取整

```js
Math.floor(x);
console.log(Math.floor(3.6)); // 3
```

## 随机数

```js
Math.random(); // 大于0小于1
Math.random() * x; // 0-x之间
Math.random() * (y - x) + x; // x-y之间
```

## 查找最大数

```js
Math.max(x,y,z,…,n)
console.log(Math.max(1,2,7,3,5))  // 7
```

## 查找最小数

```js
Math.min(x,y,z,…,n)
console.log(Math.min(7,2,1,3,5))   // 1
```

## 求幂

```js
Math.pow(x, y);
console.log(Math.pow(8, 2)); // 64 // 8的2次方

//ES6求幂方法：x**y
console.log(5 ** 3); // 125   5的三次方
```

## 平方根

```js
Math.sqrt(x);
// x必须为正数，否则返回NAN
```

## 绝对值

```js
Math.abs(x);
console.log(Math.abs(-4.7));
```

## 判断数的符号

```js
Math.sign(x)

//如果x是 正数（不包括+0），那么结果就是+1；
//如果x是 负数（不包括-0），那么结果就是-1；
//如果参数x 不是数字（即它的类型不是Number），那么它会先被转换为 Number类型
Math.sign(3);     //  1  正数返回1
Math.sign(-3);    // -1  负数返回-1
Math.sign("-3");  // -1

//如果x是 +0，那么结果是+0；
//如果x是 -0，那么结果是-0；
Math.sign(0);     //  0
Math.sign(-0);    // -0

//如果x是NaN，那么结果也是NaN；
Math.sign(NaN);   // NaN
Math.sign("foo"); // NaN  无法转换为Number类型
Math.sign();      // NaN
```

以上为整理的常用对象，更多对象请：[参考手册](https://www.w3school.com.cn/jsref/jsref_obj_math.asp)
