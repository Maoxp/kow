# Xdebug

Xdebug 需要在`php.ini`与您的 PHP 安装相对应的文件中进行设置。

- **在 Windows**上，它位于您的`php.exe`.
- 在**Linux/Mac**上，通常有一个单独的`xdebug.ini`文件（通常类似于`/etc/php/8.0/cli/xdebug.ini`）。

编辑`.ini`文件，确保有以下指令（注意，Xdebug 版本`2`和的指令不同`3`）：

```ini
; Xdebug 3
zend_extension = "<path to the xdebug library>" ; "...\xdebug.dll" or ".../xdebug.so"
xdebug.mode = debug
xdebug.client_host = 127.0.0.1
xdebug.client_port = 9003
xdebug.start_with_request = trigger

```

```ini
; Xdebug 2
zend_extension = "<path to the xdebug library>" ; "...\xdebug.dll" or ".../xdebug.so"
xdebug.remote_enable = 1
xdebug.remote_handler = dbgp
xdebug.remote_host = 127.0.0.1
xdebug.remote_port = 9000
xdebug.remote_mode = req
```
