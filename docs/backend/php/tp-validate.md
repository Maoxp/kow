# Thinkphp 验证器

> 日常开发中，需要对入参数据 进行验证，会制定一些验证规则，已完成功能需求。
>
> composer 上有很多验证器使用，日常中我经常使用 Thinkphp的验证器，现对其日常用法（验证规则）进行整理，留待查询。
>
> 👉 [ThinkPHP验证器](https://www.kancloud.cn/manual/thinkphp6_0/1037624)，查看更多！



::: warning

验证规则严格区分大小写

:::

## 格式验证类

如果在使用静态方法调用的时候，需要加上 `is`  (已 `number` 验证为例，需使用 `isNumber()` )。

### require

- 含义：验证某个字段必须存在。 
- 用法：`'params' => 'require'`
- ⚠️：如果验证规则没有添加 `require` 就表示没有值的话不进行验证。采用静态方法调用时候，由于 `require` 属于PHP保留字，使用方法验证必须采用 `isRequire()` 或者 `must()` 调用。 

### number

- 含义：验证某个字段的值是否为 **纯数字**（采用 `ctype_digit`  验证，不含 负数、小数点）
- 用法：`'params' => 'number'`

### integer

- 含义：验证某个字段的值是否为 **整数**（采用 `filter_var` 验证 ）
- 用法： `'params' => 'integer'` 

### bool 或者 boolean

- 含义：验证某个字段的值是否为 **布尔值**（采用`filter_var`验证）
- 用法：`'params' => 'bool'`

### eamil

- 含义：验证某个字段的值是否为 **email地址**（采用`filter_var`验证）
- 用法：`'params' => 'eamil'`

### array

- 含义：验证某个字段的值是否为 **数组**
- 用法：`'params' => 'array'`

### accepted

- 含义：验证某个字段的值是否为 **yes、on、1**。这个在确认 “服务条款” 是否同意时候很有用。
- 用法：`'params' => 'accepted'`

### date

- 含义：验证某个字段值是否为 **有效的日期**。它会对日期值进行`strtotime`后进行判断。
- 用法：`'params' => 'date'`

### dateFormat:format

- 含义：验证某个字段的值是否为 **指定格式的日期**
- 用法：`'create_time'=>'dateFormat:y-m-d'`

### alpha

- 含义：验证某个字段的值是否为 **纯字母**
- 用法：`'name' => 'alpha'`

### alphaNum

- 含义：验证某个字段的值是否为 **字母、数字**
- 用法：`'name'=>'alphaNum'`

### alphaDash

- 含义：验证某个字段的值是否为 **字母、数字，下划线_、破折号-**
- 用法：`'name'=>'alphaDash'`

### chs

- 含义：验证某个字段的值只能是 **汉字**
- 用法：`'name'=>'chs'`

### chsAlpha

- 含义：验证某个字段的值只能是 **汉字、字母**
- 用法：`'name'=>'chsAlpha'`

### chsAlphaNum

- 含义：验证某个字段的值只能是 **汉字、字母、数字**
- 用法：`'name'=>'chsAlphaNum'`

### chsDash

- 含义：验证某个字段的值只能是 **汉字、字母、数字、下划线_、破折号-**
- 用法：`'name'=>'chsDash'`

### cntrl

- 含义：验证某个字段的值只能是 **控制字符（换行、缩进、空格）**
- 用法：`'name'=>'cntrl'`

### graph

- 含义：验证某个字段的值只能是 **可打印字符（空格除外）**
- 用法：`'name'=>'graph'`

### print

- 含义：验证某个字段的值只能是 **可打印字符（包括空格）**
- 用法：`'name'=>'print'`

### lower

- 含义：验证某个字段的值只能是 **小写字符**
- 用法：`'name'=>'lower'`

### upper

- 含义：验证某个字段的值只能是 **大写字符**
- 用法：`'name'=>'upper'`

### space

- 含义：验证某个字段的值只能是 **空白字符（包括缩进，垂直制表符，换行符，回车和换页字符）**
- 用法：`'name'=>'space'`

### xdigit

- 含义：验证某个字段的值只能是 **十六进制字符串**
- 用法：`'name'=>'xdigit'`

### activeUrl

- 含义：验证某个字段的值是否为 **有效的域名、IP**
- 用法：`'host'=>'activeUrl'`

### url

- 含义：验证某个字段的值是否为 **有效的URL地址**,（采用`filter_var`验证）
- 用法：`'parmas'=>'url'`

### ip

- 含义：验证某个字段的值是否为 **有效的IP地址**,（采用`filter_var`验证，支持验证ipv4和ipv6格式的IP地址）
- 用法：`'parmas'=>'ip'`

### mobile

- 含义：验证某个字段的值是否为 **有效的手机号**
- 用法：`'parmas'=>'mobile'`

### idCard

- 含义：验证某个字段的值是否为 **有效的身份证格式**
- 用法：`'parmas'=>'idCard'`

### macAddr

- 含义：验证某个字段的值是否为 **有效的MAC地址**
- 用法：`'parmas'=>'macAddr'`

### zip

- 含义：验证某个字段的值是否为 **有效的邮政编码**
- 用法：`'parmas'=>'zip'`

## 长度和区间验证类

### in

- 含义：验证某个字段的值是否 **在某个范围**
- 用法：`'num'=>'in:1,2,3'`

### notIn

- 含义：验证某个字段的值 **不在某个范围**
- 用法：`'num'=>'notIn:1,2,3'`

### between

- 含义：验证某个字段的值是否 **在某个区间**
- 用法：`'num'=>'between:1,13'`

### notBetween

- 含义：验证某个字段的值 **不在某个区间**
- 用法：`'num'=>'notBetween:1,13'`

### length:num1,num2

- 含义：验证某个字段的值的**长度是否在某个范围**
- 用法：`'num'=>'length:4,25'`  或者指定长度 `'name'=>'length:4'`
- ⚠️：如果验证的数据是数组，则判断数组的长度。如果验证的数据是File对象，则判断文件的大小。

### max:number

- 含义：验证某个字段的值的 **最大长度**
- 用法：`'num'=>'max:25'`
- ⚠️：如果验证的数据是数组，则判断数组的长度。如果验证的数据是File对象，则判断文件的大小。

### min:number

- 含义：验证某个字段的值的 **最小长度**
- 用法：`'num'=>'min:4'`
- ⚠️：如果验证的数据是数组，则判断数组的长度。如果验证的数据是File对象，则判断文件的大小。

### after:日期

- 含义：验证某个字段的值是否在 **某个日期之后**
- 用法：`'begin_time'=>'after:2016-3-18'`

### before:日期

- 含义：验证某个字段的值是否在 **某个日期之前**
- 用法：`'end_time'=>'before:2016-3-30'`

### expire:开始时间,结束时间

- 含义：验证**当前操作**（注意**不是某个值**）是否在 **某个有效日期之内**
- 用法：`'expire_time'=>'expire:2016-2-1,2016-10-01'`

### allowIp:allow1,allow2,..

- 含义：验证当前**请求的IP**是否 **在某个范围**
- 用法：`'ip'=>'allowIp:114.45.4.55'`
- ⚠️：该规则可以用于某个后台的访问权限，多个IP用逗号分隔

### denyIp:allow1,allow2,..

- 含义：验证当前请求的IP是否禁止访问
- 用法：`'ip'=>'denyIp:114.45.4.55'`

## 字段比较类

### confirm:字段

- 含义：验证某个字段是否和另外一个字段的 **值一致**
- 用法：`'repassword'=>'require|confirm:password'`
-  ⚠️：支持字段自动匹配验证规则，如`password`和`password_confirm`是自动相互验证的，只需要使用 `'password'=>'require|confirm'`,会自动验证和`password_confirm`进行字段比较是否一致，反之亦然。

### different:字段

- 含义：验证某个字段是否和另外一个字段的 **值不一致**
- 用法：`'repasswordp'=>'require|different:password'`

### eq 或者 = 或者 same

- 含义：验证是否 **等于某个值**

- 用法：```'score'=>'eq:100' ```

  ​     ```'num'=>'=:100' ```

  ​     ```'num'=>'same:100' ```

### egt 或者 >=

- 含义：验证是否 **大于等于某个值**
- 用法：`'score' => 'egt:100'` or `'score' => '>=:100'`

### gt 或者 >

- 含义：验证是否 **大于某个值**
- 用法：`'score' => 'gt:100'` or `'score' => '>:100'`

### elt 或者 <=

- 含义：验证是否 **小于等于某个值**
- 用法：`'score' => 'elt:0'` or `'score' => '<=:0'`

### lt 或者 <

- 含义：验证是否 **小于某个值**
- 用法：`'score' => 'lt:0'` or `'score' => '<:0'`

### 字段间的数值大小比较

- 含义：验证对比其他字段大小（数值大小对比）
- 用法：`'price' => 'lt:market_price'` or `'price' => '<:market_price'`

## 正则验证

支持直接使用正则验证，例如

```php
'zip' => '\d{6}',
// 或者
'zip' => 'regex:\d{6}',
```

如果你的正则表达式中包含有`|`符号的话，必须使用数组方式定义。

`'accepted' => ['regex'=>'/^(yes|on|1)$/i'],`

也可以实现预定义正则表达式后直接调用，例如在验证器类中定义regex属性

```php
namespace app\index\validate;

use think\Validate;

class User extends Validate
{
    protected $regex = [ 'zip' => '\d{6}'];
    
    protected $rule = [
        'name'  =>  'require|max:25',
        'email' =>  'email',
    ];

}
```

然后就可以使用 `'zip' =>	'regex:zip',`

## 上传验证

### file

- 含义：验证是否是一个上传文件
- 用法：`'f' => 'file'`

### image:width,height,type

- 含义：验证是否是一个图像文件，width height和type都是可选，但是width和height必须同时定义。
- 用法：`'f' => 'image:100,100'`

### fileExt:允许的文件后缀

- 含义：验证上传文件后缀
- 用法：`'f' => 'fileExt:txt'`

### fileMime:允许的文件类型

- 含义：验证上传文件类型
- 用法：`'f' => ' fileMime:text/plain'`
- 常见的文件类型及其对应的 MIME 类型
  1. 文本文件：
     - MIME 类型：text/plain
     - 示例文件类型：.txt, .log, .csv
  2. HTML 文件：
     - MIME 类型：text/html
     - 示例文件类型：.html, .htm
  3. CSS 文件：
     - MIME 类型：text/css
     - 示例文件类型：.css
  4. JavaScript 文件：
     - MIME 类型：application/javascript
     - 示例文件类型：.js
  5. 图像文件：
     - MIME 类型：image/jpeg, image/png, image/gif, image/svg+xml
     - 示例文件类型：.jpg, .jpeg, .png, .gif, .svg
  6. 视频文件：
     - MIME 类型：video/mp4, video/mpeg, video/quicktime
     - 示例文件类型：.mp4, .mpeg, .mov
  7. 音频文件：
     - MIME 类型：audio/mpeg, audio/wav, audio/ogg
     - 示例文件类型：.mp3, .wav, .ogg
  8. PDF 文件：
     - MIME 类型：application/pdf
     - 示例文件类型：.pdf
  9. Word 文档：
     - MIME 类型：application/msword
     - 示例文件类型：.doc, .docx
  10. Excel 表格：
      - MIME 类型：application/vnd.ms-excel
      - 示例文件类型：.xls, .xlsx

### fileSize:允许的文件字节大小

- 含义：验证上传文件大小
- 用法：`'f' => ' fileSize:10900'`

## 其他验证

### urequireIf:field,value

- 含义：验证 **field字段的值等于 value** 的时候, 则参数字段为必须

- 用法：`'password'=>'requireIf:account,1'`, 当account的值等于1的时候 password为必须。

### requireWith:field

- 含义：验证 **field字段有值**的时候, 则参数字段必须存在
- 用法：`'password'=>'requireWith:account'` , 当account有值的时候password字段为必须。

### requireWithout:field

- 含义：验证 **field字段没有值**的时候, 则参数字段为必须

- 用法：
```php
  // mobile和phone必须输入一个
  'mobile' => 'requireWithout:phone',
  'phone'  => 'requireWithout:mobile'
```

### requireCallback:callable

- 含义：证当某个 **callable为真**的时候字段为必须

- 用法：`'age'=>'requireCallback:check_require|number'`

用于检查是否需要验证的方法支持两个参数，第一个参数是当前字段的值，第二个参数则是所有的数据。

```php
function check_require($value, $data){
    if(empty($data['birthday'])){
    	return true;
    }
}
```

只有check_require函数返回true的时候age字段是必须的，并且会进行后续的其它验证。
