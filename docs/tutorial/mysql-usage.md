# MySQL

登录 MySQL 服务器后，我们常常需要对用户帐户进行授权，以便能够访问数据库。

## 操作

。。

### 创建用户

```sql
CREATE USER 'user'@'%' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' [with grant option]; /* with grant option 能给其它用户授权 */
FLUSH PRIVILEGES;
```

### 设置与更改用户密码

```sql
/* 通用 */
SET PASSWORD FOR 'user'@'%' = PASSWORD('newpassword');
/* 当前登陆用户用 */
SET PASSWORD = PASSWORD('newpassword');
```

### 撤销用户权限

```sql
REVOKE ALL PRIVILEGES on *.* FROM 'user'@'%';
/* 刷新权限 */
FLUSH PRIVILEGES;
```

### 删除用户

```sql
drop user 'user'@'localhost';
```

### 查看用户权限

```sql
show grants for 'user'@'%';
```
