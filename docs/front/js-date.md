# JS 中-常用时间对象

## Date

```js
//当前时间的时间对象
var date = new Date();
console.log(date); // Mon Sep 19 2022 10:12:46 GMT+0800 (中国标准时间)

//指定时间的时间对象
var time2 = new Date("2022-1-9 19:53:34");
var time3 = new Date("2022 1 9 19:53:34");
var time3 = new Date("2022/1/9 19:53:34");
var time4 = new Date("2022,1,9 19:53:34");
var time5 = new Date(2022, 0, 9, 19, 53, 34); // 月份设定的数字是 0 - 11 对应 1 - 12 月
```

### 获取年份

```js
date.getFullYear(); // 2024
```

### 获取月份

```js
// 获取月份是从（0—11），获取的月份比实际月份要小1
date.getMonth() + 1; // 9
```

### 获取日期

```js
//获取的结果是 0 ~ 6 的数字，对应的是 星期日 ~ 星期六
date.getDay(); // 1
```

### 获取小时

```js
date.getHours();
```

### 获取分钟

```js
date.getMinutes();
```

### 获取秒

```js
date.getSeconds();
```

### 获取毫秒时间戳

```js
date.getTime(); // 1718068875631  毫秒
console.log(new Date().valueOf()); // 1718068875631  毫秒
```

### 获取当前时间戳

```js
//时间戳为距离 1970年1月1日 0点0分0秒 的 时间差
//JavaScript中 时间戳的单位是 毫秒
//1秒 = 1000毫秒

//  第一种方法：
var timestamp = Date.parse(new Date());
//  结果：1280977330000

//  第二种方法：
var timestamp = (new Date()).valueOf();
//  结果：1280977330748

//  第三种方法：
var timestamp=new Date().getTime()；
//  结果：1280977330748
//  第一种：获取的时间戳是把毫秒改成000显示，
//  第二种和第三种是获取了当前毫秒的时间戳。
```

### 指定日期转时间戳

```js
var t = "2017-12-08 20:5:30"; // 月、日、时、分、秒如果不满两位数可不带0.
var T = new Date(t); // 将指定日期转换为标准日期格式。// Fri Dec 08 2017 20:05:30 GMT+0800 (中国标准时间)
console.log(T.getTime()) // 将转换后的标准日期转换为时间戳。

// 方法2
datetime_to_unix(datetime) {
    var tmp_datetime = datetime.replace(/:/g, '-');
    tmp_datetime = tmp_datetime.replace(/ /g, '-');
    var arr = tmp_datetime.split('-');
    var now = new Date(Date.UTC(arr[0], arr[1] - 1, arr[2], arr[3] - 8, arr[4], arr[5]));
    return parseInt(now.getTime());
},
```

### 时间戳转日期

```js
unix_to_datetime(datetime) {
  var date = new Date(datetime); // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y = date.getFullYear() + '-';
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
  var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
  var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
  var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  return Y + M + D + h + m + s;
};
```

### 计算两个日期之间的间隔

```js
const dayDif = (date1, date2) =>
  Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);

dayDif(new Date("2022-08-27"), new Date("2022-12-25")); // 120
// 距离圣诞节还有 120 天。
```

### 判断日期是否正确

```js
// 此方法用于检查给定日期是否有效。
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
isDateValid("December 27, 2022 13:14:00"); // true
```

### 确定日期所在的一年中的哪一天

```js
const dayOfYear = (date) =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
dayOfYear(new Date()); // 239
// 2022年已经过去了239天
```

### 格式化时间

```js
// 此方法可用于将时间转换为 hh:mm:ss 格式。
const timeFromDate = (date) => date.toTimeString().slice(0, 8);
timeFromDate(new Date(2021, 11, 2, 12, 30, 0)); // 12:30:00
timeFromDate(new Date()); // now time 09:00:00
```
