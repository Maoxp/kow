# Nginx配置

1. 配置文件路径：/etc/nginx/nginx.conf
2. 配置文件内容：

```nginx
user  nginx;
worker_processes  1;
error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;
events {
    worker_connections  1024;
    use epoll;
    multi_accept on;
    accept_mutex on;
    accept_mutex_delay 100ms;

    # 监听端口
    worker_cpu_affinity auto;
    worker_priority -10;
    worker_rlimit_nofile 1024;
    worker_rlimit_core 1024;
    worker_shutdown_timeout 10s;
    worker_connections 1024;
}
http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                     '$status $body_bytes_sent "$http_referer" '    
                     '$http_user_agent "$http_x_forwarded_for"';
    
    access_log  /var/log/nginx/access.log  main;
    sendfile        on;
    keepalive_timeout  65;
    server {
        listen       80;
        server_name  localhost;
        location / {
            root   /usr/share/nginx/html;
            index  index.html index.htm;
            proxy_pass http://127.0.0.1:8080;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_set_header X-Forwarded-Host $host;
            proxy_set_header X-Forwarded-Port $server_port;
            proxy_set_header X-Forwarded-Server $host;
        }
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   /usr/share/nginx/html;
            index  index.html index.htm;
        }
        include /etc/nginx/conf.d/*.conf;
    }
}
```

## php-fpm配置

```nginx
location ~ \.php {
    root           /nginx;                  #php-fpm服务器上*.php页面文件存放路径
    fastcgi_pass   x.x.x.x:9000;          #这里指向处理php的服务器IP
    fastcgi_index  index.php;
    fastcgi_split_path_info ^(.+\.php)(.*)$;     
    fastcgi_param PATH_INFO $fastcgi_path_info;    
    include /usr/local/etc/nginx/fastcgi.conf;
        
}
```
