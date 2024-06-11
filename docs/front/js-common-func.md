# JS/TS 中常用方法技巧

## 滚动

### 滚动到页面顶部

我们可以使用 window.scrollTo() 平滑滚动到页面顶部。

```js
const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};
```

### 滚动到页面底部

当然，如果知道页面的高度，也可以平滑滚动到页面底部。

```js
const scrollToBottom = () => {
  window.scrollTo({
    top: document.documentElement.offsetHeight,
    left: 0,
    behavior: "smooth",
  });
};
```

### 滚动元素到可见区域

有时我们需要将元素滚动到可见区域，我们应该怎么做？使用 scrollIntoView 就足够了。

```js
const smoothScroll = (element) => {
  element.scrollIntoView({
    behavior: "smooth",
  });
};
```

## 全屏|全屏退出

### 全屏显示元素

```js
const goToFullScreen = (element) => {
  element = element || document.body;
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullScreen();
  }
};
```

### 退出全屏状态

```js
const goExitFullscreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
};
```

## 获取数据类型获取数据类型

```js
const getType = (value) => {
  const match = Object.prototype.toString.call(value).match(/ (\w+)]/)
  return match[1].toLocaleLowerCase()
}
getType() // undefined
getType({}}) // object
getType([]) // array
getType(1) // number
getType('fatfish') // string
getType(true) // boolean
getType(/fatfish/) // regexp
```

## 停止冒泡事件

一种适用于所有平台的防止事件冒泡的方法

```js
const stopPropagation = (event) => {
  event = event || window.event;
  if (event.stopPropagation) {
    event.stopPropagation();
  } else {
    event.cancelBubble = true;
  }
};
```

## 深拷贝一个对象

如何复制深度嵌套的对象？

```js
const deepCopy = (obj, hash = new WeakMap()) => {
  if (obj instanceof Date) {
    return new Date(obj);
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }
  if (hash.has(obj)) {
    return hash.get(obj);
  }
  let allDesc = Object.getOwnPropertyDescriptors(obj);
  let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc);
  hash.set(obj, cloneObj);
  for (let key of Reflect.ownKeys(obj)) {
    if (obj[key] && typeof obj[key] === "object") {
      cloneObj[key] = deepCopy(obj[key], hash);
    } else {
      cloneObj[key] = obj[key];
    }
  }
  return cloneObj;
};
```

## 确定设备类型

我们经常必须这样做才能在手机上显示 A 逻辑，在 PC 上显示 B 逻辑。基本上，设备类型是通过识别浏览器的 userAgent 来确定的。

```js
const isMobile = () => {
  return !!navigator.userAgent.match(
    /(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i
  );
};
```

## 判断设备是安卓还是IOS

除了区分是移动端还是PC端，很多时候我们还需要区分当前设备是Android还是IOS。

```js
const isAndroid = () => {
  return /android/i.test(navigator.userAgent.toLowerCase());
};

const isIOS = () => {
  let reg = /iPhone|iPad|iPod|iOS|Macintosh/i;
  return reg.test(navigator.userAgent.toLowerCase());
};
```

## 获取浏览器类型及其版本

作为前端开发人员，您可能会遇到各种兼容性问题，这时候可能需要获取浏览器的类型和版本。

```js
const getExplorerInfo = () => {
  let t = navigator.userAgent.toLowerCase();
  return 0 <= t.indexOf("msie")
    ? {
        //ie < 11
        type: "IE",
        version: Number(t.match(/msie ([\d]+)/)[1]),
      }
    : !!t.match(/trident\/.+?rv:(([\d.]+))/)
    ? {
        // ie 11
        type: "IE",
        version: 11,
      }
    : 0 <= t.indexOf("edge")
    ? {
        type: "Edge",
        version: Number(t.match(/edge\/([\d]+)/)[1]),
      }
    : 0 <= t.indexOf("firefox")
    ? {
        type: "Firefox",
        version: Number(t.match(/firefox\/([\d]+)/)[1]),
      }
    : 0 <= t.indexOf("chrome")
    ? {
        type: "Chrome",
        version: Number(t.match(/chrome\/([\d]+)/)[1]),
      }
    : 0 <= t.indexOf("opera")
    ? {
        type: "Opera",
        version: Number(t.match(/opera.([\d]+)/)[1]),
      }
    : 0 <= t.indexOf("Safari")
    ? {
        type: "Safari",
        version: Number(t.match(/version\/([\d]+)/)[1]),
      }
    : {
        type: t,
        version: -1,
      };
};
```

## 设置cookies

cookie 可能是我见过的最糟糕的 API，它很难使用，以至于我们不得不重新封装它以最大限度地提高开发效率。

```js
const setCookie = (key, value, expire) => {
  const d = new Date();
  d.setDate(d.getDate() + expire);
  document.cookie = `${key}=${value};expires=${d.toUTCString()}`;
};
```

## 删除cookies

删除 cookie 的想法是什么？其实，只要把它的过期时间设置为这一刻，它就会立即过期。

```js
const delCookie = (key) => {
  document.cookie = `${encodeURIComponent(key)}=;expires=${new Date()}`;
};
```

## 生成指定范围内的随机数

```js
const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

randomNum(1, 10) // 6
randomNum(10, 20) // 11
```

## 格式化货币

第一种：

```js
const formatMoney = (money) => {
  return money.replace(new RegExp(`(?!^)(?=(\\d{3})+${money.includes('.') ? '\\.' : '$'})`, 'g'), ',')  
}

formatMoney('123456789') // '123,456,789'
formatMoney('123456789.123') // '123,456,789.123'
formatMoney('123') // '123'
```

第二种：

```js
const formatMoney = (money) => {
  return money.toLocaleString()
}

formatMoney(123456789) // '123,456,789'
formatMoney(123456789.123) // '123,456,789.123'
formatMoney(123) // '123'
```

## 封装的一个时间戳转日期函数

### 1.时间戳转日期函数

```js
function(time) {
    var date = new Date(time * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + "-";
    var M =(date.getMonth() + 1 < 10? "0" + (date.getMonth() + 1): date.getMonth() + 1) + "-";
    var D = date.getDate() + " ";
    var h = date.getHours() + ":";
    var m = date.getMinutes() + ":";
    var s = date.getSeconds();
    return Y + M + D + h + m + s;
}
```

### 2.如果用在vue过滤器中

```js
export default {
  data() {
    return {
       andtime:'1112439999'//测试数据
    };
  },
  filters: {
    //时间戳转日期
    date: function(time) {
      var date = new Date(time * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + "-";
      var M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      var D = date.getDate() + " ";
      var h = date.getHours() + ":";
      var m = date.getMinutes() + ":";
      var s = date.getSeconds();
      return Y + M + D + h + m + s;
    },
  },
  mounted() {},
  methods: {}
};
```

渲染使用方法{{ endtime | date }}

### 3.拓展:生成订单号

```js
//生成订单号
    order(timestamp) {
      //时间
      var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear();
      var M =
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1;
      var D = date.getDate();
      var h = date.getHours();
      var m = date.getMinutes();
      var s = date.getSeconds();
      //后四位随机数
      let str = "0123456789";
      let num = "";
      for (let i = 0; i < 4; i++) {
        num += str[parseInt(Math.random() * str.length)];
      }
      return Y + M + D + h + m + s + num;
    },
```
