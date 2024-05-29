# MySQL 5.7

这篇文章将帮助您在 CentOS7 系统上安装 MySQL Server 5.7

## 启用存储库

首先，您需要在您的系统上启用 MySQL 5.7 社区发行版 yum 存储库。yum 存储库配置的 rpm 包可在 MySQL 的官方网站上找到。

    First，将最新的 MySQL GPG 密钥导入您的系统。
`sudo rpm --import https://repo.mysql.com/RPM-GPG-KEY-mysql-2022`

    现在，使用以下命令之一根据您的操作系统版本配置 Yum 存储库。
`sudo yum localinstall https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm`

## 安装

已在系统成功启用 MySQL yum 存储库后。Now，根据您的 Centos 操作系统版本，使用以下命令安装 MySQL 5.7 社区服务器。

`sudo yum install mysql-community-server`

命令将在您的系统上安装 MySQL 社区服务器和其他依赖项。在软件包的安装过程中，会创建一个临时密码并将其记录到 MySQL 日志文件中。使用`followign`命令查找您的临时 MySQL 密码。

## 启动

启动 MySQL 服务 `systemctl start mysqld`

第一次启动期间，MySQL 将 root 帐户密码存储在日志文件中，可以使用 `followign` 命令找到。

`grep 'A temporary password' /var/log/mysqld.log | tail -l`

## 初始配置

执行`mysql_secure_installation`脚本并按照向导进行操作。它将提示输入 `root` 密码(上述步骤中获得的临时密码), 然后提示您设置新的 `root` 密码。 其他选项根据需要提供输入。我们建议对所有按 y 以提高安全性。

`/usr/bin/mysql_secure_installation`

## 验证登录

至此操作完成，验证MySQL 登录。使用 `mysql -u root -p`, 输入 `root` 密码。
