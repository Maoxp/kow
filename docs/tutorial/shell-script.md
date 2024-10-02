---
group: command
toc: content
order: -1
---

# Shell Script

日常工作中经常用到，大部分是自己手写的部分脚本，这里记录下来备用-。-

- 查找指定目录下的文件，按照文件的大小排名，并规定显示的文件数目:
[find_large_files.sh](./find-large-files)

- 生产服务监控脚本：
[monitor-service.sh](./monitor-service)

- IP黑名单:
[ip-blacklist.sh](./ip-blacklist)

Linux中，可以使用以下命令来寻找占用磁盘空间的大文件：

1.使用 `find` 命令：

```bash
find /path/to/search -type f -size +100M
```

这个命令会查找 `/path/to/search` 目录下所有大于 100MB 的文件。你可以根据需要调整大小。

2.使用 `du` 和 `sort` 命令：

```bash
du -ah /path/to/search | sort -rh | head -n 20
```

这个命令会列出 `/path/to/search` 目录下最大的 20 个文件和目录。

3.使用 `ncdu` 工具：
如果你安装了 `ncdu`，可以使用它来交互式地查看磁盘使用情况：

```bash
ncdu /path/to/search
```

这将提供一个友好的界面来浏览和查找大文件。

4.使用 `ls` 命令：

```bash
ls -lhS /path/to/search | head -n 20
```

这个命令会列出指定目录下按大小排序的前 20 个文件。

选择适合你的命令，根据你的需求调整路径和大小参数。
