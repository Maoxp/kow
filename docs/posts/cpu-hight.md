# CPU飙高处理步骤

1. `top` 命令观察 cpu 使用高的进程

2. `jps -l` 找出相对应的 java进程号

3. `top -Hp 进程号` 查找出占用 cpu 高的线程

4. `jstack 线程号 > jstack.log` 输出详细信息到文件

通过 第3步 找出的**线程号**转换成**16进制数**，在 第4步 文件中搜索对应的信息。
