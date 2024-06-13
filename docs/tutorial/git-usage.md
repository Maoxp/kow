# Git 案列分享

 初始化一个branch的默认名称
 
`git config --global init.defaultBranch <name>`

## create a new repository on the command line

### push an new repository

```bash
echo "# xxxx.github.io" >> README.md
git init
git add -A
git commit -m "first commit"
git branch -M master
git remote add origin git@github.com:<UserName>/<RepositoryName>.git
git push -u origin master
```

### push an existing repository

```bash
git remote add origin git@github.com:<UserName>/<RepositoryName>.git
git branch -M master
git push -u origin master
```

## rebase 主要是 3 个场景

1、如果有直接在 `dev` 上开发，在 **pull 远程的 dev** 时，用 `git pull --rebase origin dev`

2、如果在功能**分支上（比如分支：`dev-f1`）开发，每完成一个功能点**或者有几个 commits 时，先切换到 `dev` ，用 `git pull --rebase origin dev`，让 `dev` 保持最新的 HEAD，再切回 `dev-f1`，用 `git rebase dev` ，让 `dev-f1` 的 base 是 `dev` 的 HEAD

```bash
git checkout dev
git pull --rebase origin dev

git checkout dev-f1
git rebase dev
```

3、和 2 的情况基本一样，就是当你**功能完成时，要把 dev-f1 合并到 dev** 之前，执行 2 的所有操作后，再切换回 `dev` ，使用 `git merge dev-f1`，操作完后忙把 `dev` 的内容 push 到远程 dev 分支

```bash
git checkout dev
git pull --rebase origin dev

git checkout dev-f1
git rebase dev

git checkout dev
git merge dev-f1
```

## 提交（Commit）

### reset 撤销

使用了`git add *`, `git commit -m '...'`之后，没有push，想要撤销，找不到渠道，如何操作？

执行命令👇，就可以成功**撤销commit**，保留add命令的操作结果，当前改动记录任然保存在暂存区(staged)。

```bash
git reset --soft HEAD^
```

- `HEAD^` : 表示上一个版本.  `HEAD^` 等同于 `HEAD~1`

- `--soft`: 不删除工作空间的改动代码，只撤销commit，不撤销 `git add file`

那如果我**撤销所有，包括被修改的内容**，不想留任何痕迹了，如何操作？

```bash
git reset --hard HEAD^
```

`--hard`: 删除工作空间的改动代码，撤销commit且撤销add

### 重新修改commit注释

```bash
# first step
git commit -amend

# second step
# 这时候会进入vim编辑器，修改完成你要的注释后保存即可
```

### rebase 合并多个commit为一个完整commit

 **rebase命令**：可以对某一段线性提交历史进行编辑、删除、复制、粘贴；因此，合理使用 `rebase` 命令可以使我们的提交历史干净、简洁！

当我在本地仓库中提交了多次，在我们把本地提交push到公共仓库中之前，为了让提交记录更简洁明了，我们希望把多个提交记录合并为一个完整的提交，然后再push到公共仓库。

这里我们使用命令:

`git rebase -i [startpoint] [endpoint]`

其中`-i`的意思是`--interactive`，即弹出交互式的界面让用户编辑完成合并操作，`[startpoint]` `[endpoint]`则指定了一个编辑区间，如果不指定`[endpoint]`，则该区间的终点默认是当前分支HEAD所指向的commit

注：该区间指定的是一个**前开后闭的区间**

在查看到了log日志后，我们运行以下命令：

`git rebase -i 36224d` 或 `git rebase -i HEAD~3`

然后我们会看到如下界面: 修改其中commit记录即可

![git rebase使用](http://img.geek-docs.com/git/cmd/rebase/git-rebase-02.png)

里面未被注释的部分列出的是我们本次rebase操作包含的所有提交，下面注释部分是git为我们提供的命令说明。每一个commit id 前面的`pick`表示指令类型，git 为我们提供了以下几个命令:

> pick：保留该commit（缩写:p）
>
> reword：保留该commit，但我需要修改该commit的注释（缩写:r）
>
> edit：保留该commit, 但我要停下来修改该提交(不仅仅修改注释)（缩写:e）
>
> squash：将该commit和前一个commit合并（缩写:s）
>
> fixup：将该commit和前一个commit合并，但我不要保留该提交的注释信息（缩写:f）
>
> exec：执行shell命令（缩写:x）
>
> drop：我要丢弃该commit（缩写:d）

然后，我们**可以调整commit的顺序，再将pick 修改为 squash 将不连续commit的合并**，wq保存，进入注释修改界面：重新修改合并后的注释信息，wq保存即可！

如果有冲突，冲突解决后，记得先 git add，再 `git rebase --continue`

**操作完rebase以后，后悔了不想continue了该如何操作？**

```bash
git rebase --abort
```

### rebase 将某一段commit粘贴到另一个分支上

当项目中存在多个分支，有时候我们需要将某一个分支中的一段提交同时应用到其他分支中, 就像下图：

[点击此处去👀](https://upload-images.jianshu.io/upload_images/2147642-0de010746cb78401.png)

希望将develop分支中的C~E部分复制到master分支，通过rebase命令来实现（如果只是复制某一两个提交到其他分支，建议使用更简单的命令:`git cherry-pick`）。

我们使用命令的形式为:

```bash
 git rebase   [startpoint]   [endpoint]  --onto  [branchName]
```

运行如下：

```bash
git checkout develop
# 复制commit，C(90bc0045b)和E(5de0da9f2)的提交id
git rebase 90bc0045b^ 5de0da9f2 --onto master
# 注:因为[startpoint] [endpoint]指定的是一个前开后闭的区间，为了让这个区间包含C提交，我们将区间起始点向后退了一步

# HEAD处于游离状态
git status
# 解决HEAD的游离问题
git checkout master
git reset --hard  0c72e64
```

运行完成之后， `git log` 可以看出C~E部分已成功复制到master分支，**但是，此时develop分支的HEAD处于游离状态, 我们需要做的就是将master所指向的提交id设置为当前HEAD所指向的提交id就可以了**

```bash
git checkout master
git reset --hard  0c72e64
```

### reset 回滚到指定版本

当本次提交的代码，在生产pull 后，出现问题，及时回滚到上一个版本, 防止造成生产事故，特别是弱类型语言需要学会此操作。

1. 运行`git log --pretty=oneline`命令查看你当前HEAD指针所在位置的全部log记录
2. 根据commit信息找到要回滚的版本号（如:8b9b0ccf）
3. `git reset --hard 8b9b0ccf` 即可回滚到该次commit版本
4. 如果还需要修改，可以使用`git reset --soft HEAD^`，撤销本次commit

----

## 分支(branch)

### 查看不同分支的差异

```bash
# 当前分支 dev, 比对master 分支，有啥不同之处，可以使用此命令
git diff master
```

### A 分支拉取 master 分支最新代码

第一种：git pull + merge: 获取最新代码到本地，然后手动合并分支

```bash
# 切换到 master 分支
git checkout master
git pull origin master

# 切换到 A 分支
git checkout A
git pull origin A

# 合并master -> A
git merge master
# 如遇到冲突解决冲突, 在提交
git push origin A

```

第二种：git pull 获取最新代码到本地，并自动合并到当前分支。

这种方式自动合并最新代码，无法提前处理冲突代码。

```bash
# 在 A 分支 直接拉取合并 master最新代码
git pull origin master
```

### 新建分支并提交代码流程

首先，在你新建分支之前，你应该在master分支,并且要保证你当前的是最新代码，要不然就是找死.

新建分支，提交至远程仓库

```bash
git pull origin master  # 在master分支下，保证当前代码与线上同步，是最新的
git branch <分支名>     # 正儿八经的新建分支。
git checkout <分支名>   # 切换 到新建的分支上，再进行下一步。
git push -u origin <分支名> # 把本地分支推到远端，并建立关联。（--set-upstream = -u）
```

提交某分支到代码

```bash
git status #查看自己写了哪些东西。
git add .
git commit -m ''
git pull --rebase origin <远程分支名> # 当跟别人共用一个分支，他提交了一段代码到远端，所以导致你的本地落后于远端,把他更新成最新的
git push origin <分支名>  # push是从本地向远端推代码
```

### 从远程分支拉取代码到本地的一个新分支

如果远程新建了一个分支，本地没有该分支, 你要做的就是把远端的分支拉到自己本地: `git fetch origin <远程分支名>:<分支名>`

```bash
# 拉取远程分支到本地分支
git fetch origin <远程分支名>:<分支名>
# 设置本地与远程分支关联
git branch -u origin/remoteBranch branchName
```

----

```bash
# 新建本地分支名，且与远程分支名相关联
git checkout -b branch_name origin/<远程分支名>
```

----

```bash
# 这时本地会新建一个分支名叫 branch_name ，会自动跟踪远程的同名分支 branch_name。
git checkout --track origin/branch_name
```

### 命令查看本地分支、远程分支以及关系

```bash
$ git branch -vv
* 1.x    de291ec [origin/1.x] merge #4025456 into master from wms
  master de291ec [origin/master] merge #4025456 into master from wms
  nacos  9e6babe feat: nacos 配置center
  
$ git branch -v
  1.x            250a831 feat: 新增用户注销功能
  2.1.0-sql      2fd5454 [落后 17] feat: xml映射表结构字段修改  
```

**查看远程分支:** `git branch -r`

**查看本地分支:** `git branch`

**查看全部分支(远程分支会用红色标注):** `git branch -a`

### 删除分支

1. 删除本地分支 ( 切换到master分支之后再删除 )
`git branch -d <分支名>`

2. 删除远端分支

```bash
git branch -r -d  <分支名>
git push origin :<分支名>

# or
git push origin --delete <分支名>
```

----

## 配置多个远程仓库并推拉代码

```bash
# 查看已有多远程地址
git remote -v
# 添加新的远程地址, 并设置它的名字为mxp-origin
git remote add mxp-origin git@codeup.aliyun.com:62f3076b/bms/mattress.git
# 将本地分支和远程某分支建立对应
git push -u mxp-origin master

# 与平时一样正常推拉代码
git push mxp-origin 本地分支名:远程分支名
git pull mxp-origin 远程分支名:本地分支名
```

### 取消本地目录下关联的远程库

`git remote remove mxp-origin`

## 打标签(tag)

给仓库历史中的某一个提交打上标签，以示重要。

1. 列出tag、查找指定`tag`标记号

    `git tag [-l "v1.2.*"]`

2. 显示`tag`信息和提交信息

    `git show v0.1`

3. 创建新`tag`

    - **lightweight**: 轻量标签很像一个不会改变的分支——它只是某个特定提交的引用。本质上是将提交校验和存储到一个文件中——没有保存任何其他信息。不需要使用 `-a`、`-s` 或 `-m` 选项，只需要提供标签名字：
    `git tag v.0.1`

    - **annotated**: 附注标签是存储在 Git 数据库中的一个完整对象,它们是可以被校验的，其中包含打标签者的名字、电子邮件地址、日期时间， 此外还有一个标签信息.
    `git tag -a v.0.1 -m 'init tag v0.1'`

4. 后期打标签

    也可以对过去的提交补打标签。

    先找到提交历史是这样的：`git log --pretty=oneline`

    给某个commit打标签:  `git tag -a v1.2 9fceb02`

    最后push tag:   `git push origin v1.2`

5. push tag到远程仓库

    默认情况下，`git push` 命令并不会传送标签到远程仓库服务器上。

    在创建完标签后你必须显式地推送标签，才能到共享服务器上。 就像共享远程分支一样 --- `git push origin <tagname>`。

    如果想要一次性推送很多标签，也可以使用带有 `--tags` 选项的 `git push` 命令。

    `git push origin v0.1`

    `git push origin --tags`

6. 删除标签

    要删除掉你本地仓库上的标签: `git tag -d <tagname>` (注意上述命令并不会从任何远程仓库中移除这个标签)

    从远程仓库删除标签

    第一种变体:
    `git push <remote> :refs/tags/<tagname>`

    上面这种操作的含义是, 将冒号前面的空值推送到远程标签名，从而高效地删除它

    第二种更直观：
    `git push origin --delete <tagname>`
