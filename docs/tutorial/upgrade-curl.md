---
group: linux
toc: content
---

# Upgrade Curl

> 查看 [curl 官方页面](http://curl.haxx.se/download.html#LinuxRedhat)，
> 找到对应[页面](https://mirror.city-fan.org/ftp/contrib/sysutils/Mirroring) ，这个页面的介绍非常详细。

## rpm方式安装yum源

安装新版libcurl的yum源 from `city-fan.org`

`rpm -Uvh http://www.city-fan.org/ftp/contrib/yum-repo/rhel7/x86_64/city-fan.org-release-3-3.rhel7.noarch.rpm`

以上命令会生成（/etc/yum.repos.d/`.repo`文件），与直接动手写源配置文件效果一致。

## 手写yum源配置文件

新建yum源配置文件

`vim /etc/yum.repos.d/city-fan.repo`

写入如下内容

```bash
[city-fan.org]
name=city-fan.org repository for Red Hat Enterprise Linux (and clones) $releasever ($basearch)
#baseurl=http://mirror.city-fan.org/ftp/contrib/yum-repo/rhel$releasever/$basearch
mirrorlist=http://mirror.city-fan.org/ftp/contrib/yum-repo/mirrorlist-rhel$releasever
enabled=1
gpgcheck=0
#gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-city-fan.org

[city-fan.org-debuginfo]
name=city-fan.org debuginfo repository for Red Hat Enterprise Linux (and clones) $releasever ($basearch)
#baseurl=http://www.city-fan.org/ftp/contrib-debug/rhel$releasever/$basearch
mirrorlist=http://www.city-fan.org/ftp/contrib-debug/mirrorlist-rhel$releasever
enabled=0
gpgcheck=0
#gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-city-fan.org

[city-fan.org-source]
name=city-fan.org source repository for Red Hat Enterprise Linux (and clones) $releasever
#baseurl=http://mirror.city-fan.org/ftp/contrib/yum-repo/rhel$releasever/source
mirrorlist=http://mirror.city-fan.org/ftp/contrib/yum-repo/source-mirrorlist-rhel$releasever
enabled=0
gpgcheck=0
#gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-city-fan.org
```

查看该 repo 包含的 curl 版本

```bash
[root@iZbp1i18irje041p8xeyi5Z yum.repos.d]# yum --showduplicates list curl
已加载插件：fastestmirror
Loading mirror speeds from cached hostfile
 * city-fan.org: www.city-fan.org
已安装的软件包
curl.x86_64                          7.85.0-1.0.cf.rhel7                                                              @city-fan.org
可安装的软件包
curl.x86_64                          7.29.0-59.el7                                                                    base         
curl.x86_64                          7.29.0-59.el7_9.1                                                                updates      
curl.x86_64                          7.85.0-1.0.cf.rhel7                                                              city-fan.org
```

更新curl版本

`yum update curl`
