# JS中-字符串-常用方法

## 查询字符串

1. `str.indexOf(search_str, [position])` 从 `position` 位置开始(从前向后), 返回在父字符串里，子字符串 `search_str` **首次出现** 的位置，查找不到返回 `-1`

    ```js
    // 这两种方法都接受第二个参数作为搜索的开始位置：
    let str = "Please locate where locate occurs!";
    str.indexOf('locate')    // 返回 7
    str.indexOf('locate', 15)    // 返回 20
    ```

2. `str.lastIndexOf(search_str, [position])`  从 `position` 位置开始(从后向前)，返回在父字符串里，子字符串 `search_str` **最后一次出现** 的位置

     ```js
    let str = "Please locate where locate occurs!";
    str.lastIndexOf('locate')    // 返回 20
    str.lastIndexOf('locate', 15)    // 返回 7
    ```

3. `str.search(searcher)`  在父字符串里，搜索（特定值的字符串｜正则表达式） `searcher`，并返回匹配的位置，与 `indexOf()` 用法一致

    ```js
    let text = "The rain in SPAIN stays mainly in the plain";
    text.search('ain')    // 返回  5
    ```

4. `str.match(regexp)`  返回一个数组，数组的第一个元素是匹配的子串，第二个元素是匹配的子串在字符串中的位置，第三个元素是匹配的子串在字符串中的长度。如果匹配失败，则返回 `null`。

    ```js
    let text = "The rain in SPAIN stays mainly in the plain";
    text.match(/ain/g)    // 返回数组 [ain,ain,ain]
    ```

5. `str.includes(searchString, [position])` 如果父字符串包含指定 `searchString` 值，则返回 `true`

    ```js
    // 接受第二个参数作为搜索的开始位置：
    let text = "Hello world, welcome to the universe.";
    text.includes("world", 12)    // 返回 false
    ```

6. `str.startsWith(searchString, [position])` 如果字符串 `searchString` 以指定值开头，则返回 `true`，否则返回 `false`

    ```js
    let text = "The rain in SPAIN stays mainly in the plain";
    text.startsWith('The')
    ```

7. `str.endsWith(searchString, [position])` 如果字符串 `searchString` 以指定值结尾，则返回 `true`，否则返回 `false`

    ```js
    //  这两种方法都接受第二个参数作为搜索的开始位置，且区分大小写
    let text = "The rain in SPAIN stays mainly in the plain";
    text.endsWith('The')
    ```

## 截取字符串

1. `str.slice(start, [stop])` **提取字符串的某个部分**并在新字符串中返回被提取的部分（如果某个参数为负，则从字符串的结尾开始计数）

    ```js
    // 从start开始截取到stop位置，包括start不包括stop，1个参数表示从start截到末尾
    var str = "Apple, Banana, Mango";
    var res = str.slice(7, 13);  // 返回 Banana
    var res = str.slice(-13, -7);  // 返回 Banana
    ```

2. `str.substring(start, [stop])` 类似于 `slice()` 不同之处在于 `substring()` **无法接受负的索引**

    ```js
    // 从start开始截取到stop位置，包括start不包括stop，1个参数表示从start截到末尾
    var str = "Apple, Banana, Mango";
    str.substring(2, 5);  // 返回 ple
    str.substring(2);   // 返回 ple, Banana, Mango
    ```

3. `str.substr(from, length)` 类似于 `slice()`，不同之处在于**第二个参数是规定被提取部分的长度**

    ```js
    // 从from位置开始 截取指定长度的字符串
    var str = "Apple, Banana, Mango";
    var res = str.substr(3, 2); // 返回 le
    ```

## 分割字符串

1. `str.split(separator, [limit])` 返回 依据 `separator` 分割后的字符串数组, `limit` 指定了返回数组的长度

    ```js
    var str = "123,456,789"; 
    str.split();  // 返回 ['123,456,789']
    str.split('');  // 返回 ['1', '2', '3', ',', '4', '5', '6', ',', '7', '8', '9']
    str.split(',', 2); // 返回 ['123', '456']
    ``

## 替换字符串

1. `str.replace(searchValue, replaceValue)` 用`searchValue`值 替换在字符串中指定的 `replaceValue` 值

    ```js
    let str = 'The rain in SPAIN stays mainly in the plain';
    str.replace('SPAIN', 'Italy'); // 返回 The rain in Italy stays mainly in the plain
    ```

## 大小写转换

1. `toLowerCase()`  将字符串都转成小写
2. `toUpperCase()`  将字符串都转成大写

    ```js
    var text1 = "Hello World!";       // 字符串
    var text2 = text1.toUpperCase();  // text2 是被转换为大写的 text1
    // 可以用来验证码检测  str1.toLowerCase() == str2.toUpperCase()
    ```

## 其他

`trim()`  去除首尾空格

`concat(...strings)` 连接两个或多个字符串

`charAt()` 方法返回字符串中指定下标（位置）的字符串

`charCodeAt()` 方法返回字符串中指定索引的字符 unicode 编码

`str[0]`    HTML5，IE8+支持 和charAt()等效

`match()`  排除字符串中符合条件的组成一个新的数组返回

`repeat()` 重复字符串

```js
var str = "HELLO WORLD";
str.charAt(0);            // 返回 H
str.charCodeAt(0);         // 返回 72

// 此方法用于将字符串的第一个字母大写。
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)
capitalize("hello world")  // Hello world

// 该方法用于翻转字符串并返回翻转后的字符串。
const reverse = str => str.split('').reverse().join('');
reverse('hello world');   // 'dlrow olleh'

// 此方法用于生成随机字符串。
const randomString = () => Math.random().toString(36).slice(2);
randomString();

//此方法将字符串截断为指定长度。
const truncateString = (string, length) => string.length < length ? string : `${string.slice(0, length - 3)}...`;
truncateString('Hi, I should be truncated because I am too loooong!', 36)   // 'Hi, I should be truncated because...'

// 此方法用于从字符串中删除 HTML 元素。
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
```
