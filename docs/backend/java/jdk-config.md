# JDK8

对于Mac端，JDK8安装路径为：`/Library/Java/JavaVirtualMachines/jdk1.8.0_281.jdk/Contents/Home`

配置环境变量

1. 打开终端，输入`vi ~/.bash_profile`
2. 输入

    ```bash
    export JAVA_HOME=/usr/local/jdk1.8.0_231
    export JRE_HOME=${JAVA_HOME}/jre
    export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar:$JAVA_HOME/lib
    # export JAVA_PATH=${JAVA_HOME}/bin:${JRE_HOME}/bin

    export PATH=$PATH:$JAVA_HOME/bin
    ```

3. `source ~/.bash_profile`
4. `java -version`，如果出现版本信息，则表示配置成功
