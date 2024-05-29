# PHP配置项

根据编译参数设定，php 的文件路径通常是 `/usr/local/php/etc` ,该目录下会有两个配置文件： `php-fpm.conf`和 `php.ini` ，以及一个文件夹 `php-fpm.d` 包含 `www.conf` 文件。

因此，这篇文章主要对这三个PHP配置文件的进行简单说明。

## 配置 php.ini

```ini
;避免PHP信息暴露在http头中
expose_php = Off

;避免暴露php调用mysql的错误信息
display_errors = Off
 
;在关闭display_errors后开启PHP错误日志（路径在php-fpm.conf中配置）
log_errors = On
 
;设置PHP的扩展库路径
extension_dir = "/usr/local/php7/lib/php/extensions/no-debug-non-zts-20141001/"
 
;设置PHP的opcache和mysql动态库
zend_extension=opcache.so
extension=mysqli.so
extension=pdo_mysql.so
 
;设置PHP的时区
date.timezone = PRC
 
;开启opcache
[opcache]
; Determines if Zend OPCache is enabled
opcache.enable=1
 
;设置PHP脚本允许访问的目录（需要根据实际情况配置）
;open_basedir = /usr/share/nginx/html;
```

## 配置 PHP-FPM

[PHP-FPM](https://www.php.net/manual/zh/install.fpm.php) 是一个 FastCGI 服务器，用于 PHP 的运行。

### php-fpm 系统服务

```ini
# It's not recommended to modify this file in-place, because it
# will be overwritten during upgrades.  If you want to customize,
# the best way is to use the "systemctl edit" command.

cd /usr/lib/systemd/system

; php-fpm.service
[Unit]
Description=The PHP FastCGI Process Manager
After=network.target

[Service]
Type=notify
PIDFile=/usr/local/php/var/run/php-fpm.pid
ExecStart=/usr/local/php/sbin/php-fpm --nodaemonize --fpm-config /usr/local/php/etc/php-fpm.conf
ExecReload=/bin/kill -USR2 $MAINPID
PrivateTmp=true

[Install]
WantedBy=multi-user.target
```

### php-fpm 配置文件

php-fpm.conf 是 php-fpm 进程服务的配置文件

```ini
# vim php-fpm.d/php-fpm.conf

pid=/usr/local/var/run/php-fpm.pid
error_log = /usr/local/var/log/php-fpm.log

include=/private/etc/php-fpm.d/*.conf
```

### www 配置项

www.conf 是 php-fpm 进程服务的扩展配置文件

```ini
[www]
user = mxp
group = staff 

listen = 127.0.0.1:9000
;listen = /var/run/php-fpm/php-fpm.sock

slowlog = /var/log/php-fpm/$pool-slow.log$
request_slowlog_timeout = 10s

; 设置php的session目录（所属用户和用户组都是nginx
php_value[session.save_handler] = files
php_value[session.save_path] = /var/lib/php/session

pm = dynamic
pm.max_children = 5
; Default Value: min_spare_servers + (max_spare_servers - min_spare_servers) / 2
pm.start_servers = 2
pm.min_spare_servers = 1
pm.max_spare_servers = 3
```
