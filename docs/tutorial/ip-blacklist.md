# ip blacklist

根据 Nginx 的访问日志，检测访问量是否超过固定阀值，超过则将 IP 加入到 IP 黑名单，并利用 iptables 封锁对应的 IP 地，同时，在日志中记录相关 IP 的信息。

```bash
#!/bin/bash

max=500                           # 最大访问量
logdir="/usr/local/nginx12/logs"  # Nginx访问日志文件夹路径
confdir="/data/test.conf"         # IP黑名单文件路径
port=80                           # 监听端口
drop_ip=""                        # 初始化封锁IP地址变量
threshold=100                     # 访问量阈值
release_hour=23                   # 解封时间（小时）
$log="/data/test.log"             # 写入日志文件路径

# 获取当天日期
today=$(date +"%d/%b/%Y")

# 遍历日志文件夹中的所有日志文件，统计访问量超过阈值的IP地址
for logfile in $(ls $logdir/access.log.*); do
    # 提取IP地址，并统计出现次数
    awk -v threshold=$threshold '$4 == "'$today'" {print $1}' $logfile | sort | uniq -c | while read count ip; do
        if [ $count -gt $max ]; then
            # 判断IP是否已经在黑名单中
            if ! grep -q "$ip" $confdir; then
                # 将IP添加到黑名单并记录日志
                echo $ip >> $confdir
                iptables -I INPUT -p tcp --dport $port -s $ip -j DROP
                echo "$(date '+%Y-%m-%d %H%M%S') - 频繁Request-IP -> $ip" >> $log
            fi
        fi
    done
done

# 解封策略：在特定时间解封IP
release_time=$(date "+%H")
if [[ $release_time -eq $release_hour ]]; then
    iptables -F INPUT  # 清空iptables中的规则
fi
```

