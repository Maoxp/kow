# phpize

phpize 是 PHP 扩展开发工具，用于生成 PHP 扩展的 Makefile。

如果你下载了redis扩展源码，想要编译为php的 `.so扩展文件`，具体步骤如下：

第一步执行（redis目录）:

`/usr/local/php/bin/phpize`

第二步执行：

`./configure --with-php-config=<你的php-config绝对路径> && make && make install`

第三步：

拷贝`.so`文件至`php`扩展目录，并添加`xx.so`至`php.ini`
