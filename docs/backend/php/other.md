# 其他

## 过滤Emoji😊

正则过滤（Emoji是占用4个字节）

```php {3} | pure
//过滤emoji表情的函数
function cccitu_emoji($str) {
    $str = preg_replace_callback('/./u',
        function (array $match) {
            return strlen($match[0]) >= 4 ? '' : $match[0];
        },
        $str);
    return $str;
}
 
//测试过滤效果
$emoji='📱玩机，大学。🤖CCCiTU';
echo cccitu_emoji($emoji);//玩机，大学。CCCiTU
```

- 字符集过滤（将内容编码转换两次UTF-8/GBK）

```php
//mb_convert_encoding函数emoji会变成?号
$cccitu_str = '📱玩机，大学。🤖CCCiTU';
$cccitu_str = mb_convert_encoding($cccitu_str, 'GBK', 'UTF-8');
$cccitu_str = mb_convert_encoding($cccitu_str, 'UTF-8', 'GBK');
echo $cccitu_str;//?玩机，大学。?CCCiTU
 
//iconv函数可以得到比较好的效果
$cccitu_str = '📱玩机，大学。🤖CCCiTU';
$cccitu_str = iconv('UTF-8', 'GBK//IGNORE', $cccitu_str);
$cccitu_str = iconv('GBK', 'UTF-8//IGNORE', $cccitu_str);
echo $cccitu_str; //玩机，大学。CCCiTU
```
