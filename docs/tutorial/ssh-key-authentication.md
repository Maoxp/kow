---
nav: Tutorial
group: linux
toc: content
mobile: false
---

# SSH Operation

ssh 是 Unix 和 Linux 系统下的一个网络远程登录工具，它使用公钥加密来保证传输数据的安全性。

## password ogin

密码登录是 SSH 登录的一种方式，它要求用户输入密码来验证身份。
`ssh -p 22 user@hostname`
after，enter password, login sucess.

## keys login

然而，密码登录存在一些问题，如密码泄露、安全风险等。为了解决这些问题，SSH 提供了密码登录的替代方案，即密钥登录。
密钥登录通过使用公钥和私钥对来验证身份，从而 eliminates the need for passwords.

密钥登录的步骤如下：

1. 生成密钥对：使用 `ssh-keygen -t ras` 命令生成密钥对。
2. 将公钥添加到远程主机的 authorized_keys 文件中：使用 `ssh` 命令将公钥添加到远程主机的 `authorized_keys` 文件中, [see authorized_keys](#authorized_keys)。
3. 使用私钥登录远程主机：使用 `ssh` 命令使用私钥登录远程主机。

## authorized_keys

这个命令是将你的本地公钥`（~/.ssh/id_rsa.pub）`添加到远程主机的 `authorized_keys` 文件中，允许你通过 SSH 密钥认证方式登录远程主机。

```bash
ssh -p 22 user@hostname 'cat >> .ssh/authorized_keys' < ~/.ssh/id_rsa.pub
#or
ssh-copy-id -i ~/.ssh/id_rsa.pub -p 22 user@hostname
```

让我解释一下这个命令的各个部分：

- **ssh user@hostname**: 这个部分是用 SSH 连接到远程主机的命令。`user` 是你在远程主机上的用户名，`hostname` 是远程主机的主机名或 IP 地址。

- **'cat >> .ssh/authorized_keys'**: 这是在远程主机上执行的命令。它将使用 `cat` 命令将输入追加到 `.ssh/authorized_keys` 文件中。

- **<** 符号: 表示从(标准输入)指定文件中读取内容并将其作为命令的输入。

- **< ~/.ssh/id_rsa.pub**: 这是将本地的公钥内容作为输入传递给 SSH 命令的一种方式。

---

- **ssh-copy-id**: 这个命令是一个工具，可以简化密钥登录的过程, 会将公钥写到远程主机的 `~/.ssh/authorized_key` 文件中。

综合起来，这个命令的作用是将本地计算机上的 SSH 公钥添加到远程主机的 authorized_keys 文件中，以便你可以使用私钥对远程主机进行身份验证。

### disable password login

1. 在远程主机上，打开 `/etc/ssh/sshd_config` 文件。
2. 在文件中找到 `PasswordAuthentication` 配置项，并将其设置为 `no`。
3. 保存并退出文件。
4. 重启 SSH 服务：
    - 在 Ubuntu/Debian 上，使用 `sudo service ssh restart` 命令。
    - 在 CentOS/Red Hat 上，使用 `sudo systemctl restart sshd` 命令。
    - 在其他系统上，请根据系统文档进行操作。

---
如果我们只是希望控制 root 使用登录权限，你可以在 `/etc/ssh/sshd_config` 文件中将 `PermitRootLogin` 设置为 `no|prohibit-password|yes`。

- `no`: 禁止 root 使用远程登录。
- `prohibit-password`: 不允许 root 使用密码登录，但可以使用其他方式登录（公钥）。
- `yes`: 允许 root 使用登录。

### scp - Secure File Copy

scp 是一个用于在远程服务器之间传输文件的命令行工具。它使用 SSH protocol 进行加密传输，因此可以确保传输的安全性。

Basic Usage:

This copies the file to remote server: `scp file host:path`

To copy a file from remote server: `scp host:file path`. Often, path is just ., meaning the current working directory.

[more detail see here](https://www.ssh.com/academy/ssh/command#ssh-command-in-linux)