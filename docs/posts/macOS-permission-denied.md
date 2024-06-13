# EACCES: permission denied

今天我试图在我的 macbook pro 上运行我的 nodejs 应用程序，但出现此错误：EACCES：**EACCES: permission denied** 权限被拒绝错误，那么本教程适合您。

![error for nodejs](https://kwebby.com/blog/wp-content/uploads/2022/06/CleanShot-2022-06-17-at-15.44.42@2x.png.webp)

👀 看到这，你知道你遇到了什么错了吧！！

right，when you program tries to access a file or folder, it needs to have the permission to do so. if you don't have the permission, you will get this error.

对，当您的程序尝试访问文件或文件夹时，它需要具有这样做的权限。如果您没有权限，则会收到此错误

我们有几种方法可以修复此错误：EACCES：权限被拒绝。

## List of Contents

- [更改文件夹或文件的权限](#change-permission-of-the-folder-or-file)
- [使用命令行更改权限](#change-permission-using-command-line)

### Change Permission Using Command Line

很好，您可以使用命令行更改文件夹或文件的权限。只需键入以下命令：

before `sudo npm install`

now `sudo npm install -g --unsafe-perm=true --allow-root` .

之后，您将被要求输入密码。输入密码后，您将有权访问该文件夹或文件。

### Change Permission of the Folder or File

**第一种方法**：我们可以通过改变 folder 的权限来解决这个问题。
`sudo chmod -R 777 /path/to/folder`

✅**第二种方法**：赋予 /usr/local 目录 $USER 权限

提示没有写入权限
> npm WARN checkPermissions Missing write access to /usr/local/lib/node_modules

- [x] 通过修改 /usr/local 下目录的权限：`sudo chown -R $USER /usr/local`   然后输入密码就可以解决问题.

接下来就可以直接进行 npm 全局包安装：例如 `npm install webpack -g`
