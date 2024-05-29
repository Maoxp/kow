# monitor service

日常工作中，我们会在服务器上运行某个程序，但是有时候我们忘了程序是否还在运行，这时候我们可以使用这个命令来检查.

`./monitor_service.sh -p <端口号> [-l <日志文件路径> -r <重启命令> -d <重启等待时间>]`

```bash
#!/bin/bash

# 默认日志文件路径
default_log_file="/root/monitor-service.log"
# 默认重启命令
default_restart_command="php start.php"
# 默认重启等待时间
default_restart_delay=10

# 初始化变量
log_file="${default_log_file}"
restart_command="${default_restart_command}"
restart_delay="${default_restart_delay}"
now=$(date "+%Y-%m-%d %H:%M:%S")

# 函数：输出日志
log() {
    local timestamp=$(date "+%Y-%m-%d %H:%M:%S")
    echo "${timestamp} $1" >> "${log_file}"
}

# 函数：检查端口是否存在
check_port() {
    local port=$1
    netstat -tlpn | grep ":${port} " &>/dev/null
    return $?
}

# 处理命令行选项参数，以”-“开头作为参数控制脚本行为的参数
while getopts ":p:l:r:d:" opt; do
  case $opt in
    p)
      port=$OPTARG
      ;;
    l)
      log_file=$OPTARG
      ;;
    r)
      restart_command=$OPTARG
      ;;
    d)
      restart_delay=$OPTARG
      ;;
    \?)
      echo "无效的选项参数: -$OPTARG" >&2
      exit 1
      ;;
  esac
done

# 参数验证
if [[ -z "${port}" ]]; then
    echo "请提供端口号参数 (-p)" >&2
    exit 1
fi

if ! [[ "${port}" =~ ^[0-9]+$ ]]; then
    echo "端口号必须是一个有效的数字" >&2
    exit 1
fi

if [[ ! -f "${log_file}" ]]; then
    touch "${log_file}" || { echo "无法创建日志文件: ${log_file}" >&2; exit 1; }
fi

# 输出当前时间到日志文件
log "开始检测端口 ${port}"

# 检测端口是否存在并记录到日志文件
if check_port "${port}"; then
    sleep 3s
    log "${port} 端口存在，服务正常！ʔ•̫͡•ʕ ʕ•͡•ʔ"
    echo "" >> "$log_file"
else
    sleep 3s
    log "${port} 端口不存在，服务挂了...//(ㄒoㄒ)//"
    log "开始执行服务启动操作"
    log "服务重启中..."
    
    # 重启服务
    nohup "${restart_command}" >/dev/null 2>&1 &
    sleep "${restart_delay}s"

    log "服务启动完毕！٩(͡๏̯͡๏)۶"
fi
```

## ChangeLog

- 2023-05-09 

    优化：脚本增加了对参数的验证，改进了日志输出，同时提供了更灵活的重启命令和重启等待时间设置。这样的脚本在生产环境中更加可靠。
