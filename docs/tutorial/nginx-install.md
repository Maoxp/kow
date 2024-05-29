# Nginx

Nginx is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.

```shell
echo "+---------------+"
echo "+ install Nginx for centos OS +"
echo "+---------------+"

yum -y install gcc gcc-c++ autoconf automake make pcre pcre-devel zlib zlib-devel openssl  openssl-devel

echo "+---------------+"
echo "+ wget NGinx +"
echo "+---------------+"
cd /opt
wget http://nginx.org/download/nginx-1.19.1.tar.gz
tar xvf nginx-1.19.1.tar.gz
cd nginx-1.19.1

echo "+---------------+"
echo "+ configure +"
echo "+---------------+"
groupadd mxp
useradd mxp -g mxp -s /sbin/nologin
./configure  --prefix=/usr/local/nginx  --user=www-data --group=www-data --with-http_ssl_module --with-http_stub_status_module --with-http_gzip_static_module --with-http_sub_module --with-http_realip_module --with-pcre --with-debug
# --add-module=


#./configure --prefix=/usr/local/nginx 
#--with-http_stub_status_module 
#--with-http_sub_module 
#--with-http_ssl_module 
#--with-stream 
#--with-http_realip_module 
#--with-http_addition_module 
#--with-http_dav_module 
#--with-http_flv_module 
#--with-http_mp4_module 
#--with-http_gunzip_module 
#--with-http_gzip_static_module 
#--with-http_random_index_module 
#--with-http_secure_link_module 
#--with-http_auth_request_module 
#--with-mail 
#--with-mail_ssl_module 
#--with-file-aio 
#--with-pcre 
#--with-http_gzip_static_module 
#--with-pcre-jit 
#--with-openssl=****

make && make install

echo "+---------------+"
echo "+ nginx.service +"
echo "+-------/usr/lib/systemd/system--------+"
echo "+---------------+"
cd  /usr/lib/systemd/system  &&  touch nginx.service
echo '[Unit]
Description=nginx1.14.2.
After=network.target remote-fs.target nss-lookup.target

[Service]
Type=forking
PIDFile=/usr/local/nginx/logs/nginx.pid
ExecStartPre=/usr/local/nginx/sbin/nginx -t
ExecStart=/usr/local/nginx/sbin/nginx
ExecReload= /usr/local/nginx/sbin/nginx -s reload
ExecStop= /usr/local/nginx/sbin/nginx -s stop
PrivateTmp=true

[Install]
WantedBy=multi-user.target' > nginx.service

systemctl daemon-reload
systemctl enable nginx.service
systemctl start nginx.service

echo "NGinx installed and start success"
echo "################################################"
```

注意：如果你是在已经安装好的`nginx`环境上添加**第三方模块**，依然需要编译，只是不用`make install`只要`make`，然后直接拷贝可执行文件`nginx`
