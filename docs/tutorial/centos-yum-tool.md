# command

yum（全称：Yellowdog Updater Modified）是 CentOS 常用的用于从已安装的仓库源中下载或者更新软件的命令

仓库源文件（`xxxx.repo`）是放在 `/etc/yum.repo.d/` 目录下的，仓库源文件是 yum 配置文件，用来配置 yum 源，配置文件格式为 ini 。

## yum命令

常用的命令如下所示:

### 安装软件包

`yum install <package>`

#### 卸载软件包

`yum remove <package>`

#### 列出已安装的软件包

`yum list installed`

### 列出所有软件包

`yum list all`

### 搜索软件包

`yum search <package>`

### 利用yum添加源

`yum-config-manager --add-repo <repository_url>`

### 启用|禁用仓库源

`yum-config-manager --enable|--disable <repository>`

### 清除下载缓存包

`yum clean all`

### 更新仓库源的元数据信息

`yum makecache`

### 更新源

`yum -y update`

## rpm命令

rpm（Redhat Package Manager）是红帽公司为RHEL开发的专用包管理器，通常用 rpm 来离线安装本地的rpm安装包。

### 查询指定的包是否安装 `rpm -q <package>`

### 安装指定的包 `rpm -i <package>`

### 卸载指定的包 `rpm -e <package>`

### 安装本地rpm包 `rpm -ivh <xxxxxx.rpm>`

### 覆盖安装

`rpm -ivh --replacepkgs <package>`

### 升级软件包 `rpm -Uvh gcc-4.8.5.rpm`
