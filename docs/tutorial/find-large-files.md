# find-large-files

查找指定目录下的文件，按照文件的大小排名，并规定显示的文件数目。

Example: `./find-large-files.sh -d /path/to/directory -n 3 -s "-hr"`

```shell
#!/bin/bash

# 定义保存结果的文件名前缀
output_prefix="output/larget_file_$(date +%Y%m%d%H%M%S)"
# 定义保存结果的文件扩展名
output_extension=".txt"

# 构建完整的文件名，定义保存结果的文件路径
output_file="${output_prefix}${output_extension}"

# 定义要查找的目录，默认为当前目录
default_search_dir="."
search_dir=$default_search_dir
# 定义要显示的文件数目，默认为3
default_num_files=3
num_files=$default_num_files
# 定义 sort 命令的选项参数，默认为 "-hr"
default_sort_options="-hr"
sort_options=$default_sort_options

# 处理命令行选项参数，以”-“开头作为参数控制脚本行为的参数
while getopts ":d:n:s:" opt; do
  case $opt in
    d)
      search_dir=$OPTARG # 用于指定要查找的目录
      ;;
    n)
      num_files=$OPTARG # 用于指定要显示的文件数目
      ;;
    s)
      sort_options=$OPTARG # 用于指定sort命令的选项参数，
      ;;
    \?)
      echo "无效的选项参数: -$OPTARG" >&2
      exit 1
      ;;
  esac
done

# 检查参数是否为空或未提供
if [ -z "$search_dir" ] || [ -z "$num_files" ] || [ -z "$sort_options" ]; then
    echo "请提供 '-d /opt/to/dir'、'-n 3'、'-s hr' 的参数值。"
    exit 1
fi


# 检查输出文件所在目录是否存在，如果不存在则创建
output_dir=$(dirname "$output_file")
if [ ! -d "$output_dir" ]; then
    mkdir -p "$output_dir"
fi

# 检查输出文件是否存在，如果不存在则创建
if [ ! -f "$output_file" ]; then
  touch "$output_file"
fi

# 获取当前日期时间
current_datetime=$(date +"%Y-%m-%d %H:%M:%S")

# 检查文件是否存在，如果存在则追加日期时间记录
if [ -f "$output_file" ]; then
   echo "----- $current_datetime -------" >> "$output_file"
fi

# 执行 du 命令，查找search_dir根分区下的大文件，并将结果排序并取前三条
du -sh "$search_dir"/* 2>/dev/null | sort "$sort_options" | head -n "$num_files" >> "$output_file"



# 打印提示信息
echo "----- $current_datetime -------"
echo "查找"$search_dir"分区下的大文件完成，并已保存到"$output_file"文件中。"


```