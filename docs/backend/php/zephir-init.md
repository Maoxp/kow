# 扩展框架

> 我们在 `zephir` 安装完成后，做的第一件事情是生成一个扩展骨架，这将为我们的扩展项目提供开始工作的项目初始基础结构。

以下 我们将创建一个 名为 `rocket` 的扩展项目:

```shell
zephir init rocket
```

当前所创建的 `rocket` 目录结构如下：

```bash
.
├── config.json
├── ext
│   └── kernel
└── rocket
```

`ext` 目录中包含编译器用来生成扩展所使用的代码。 `config.json` 是配置文件，使用它来改变Zephir和/或扩展本身的行为，`rocket` 是我们写 zephir 代码的工作目录。

## Coding

> zephir是面向对象的扩展开发工具，所以我们要开始开发功能，需要添加类文件到项目中，文件名是已 `.zep` 后缀结尾。

这个类的代码必须放在 `./rocket/greeting.zep` 中

```php

namespace Rocket;

class Greeting
{
    public static function say()
    {
        echo "hello world!";
    }
}
```

编译并生成扩展(在编辑过程中，可能需要提供root密码才能完成扩展编译)

```bash
zephir build
```

最后，必须将扩展添加到 `php.ini` 才能由PHP加载。这是通过添加初始化指令：`extension=rocket.so` 来实现的。

## Test

现在扩展已经安装到当前 `php` 版本下，你可以执行命令检查扩展是否正确加载:

```bash
$ php -m | grep rocket

utils

$ php --ri rocket

**rocket**


rocket => enabled
Author => Phalcon Team
Version => 0.0.1
Build Date => Jun  4 2024 16:27:01
Powered by Zephir => Version 0.17.0-9f99da6
```

 新建 `demo.php` 文件

```php
<?php
  
declare(strict_types=1);

echo Rocket\Greeting::say(), "\n";
```

执行

```bash
$ php demo.php

hello world!
```

恭喜！你的第一个扩展运行在PHP中。
