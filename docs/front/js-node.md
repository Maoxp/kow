# Node 知识点笔记

Node 安装：下载对应系统的版本安装

<https://nodejs.org/en/download>

Node 详细教程：点此查看

Node 中文文档：<http://nodejs.cn/api/>

Npm 文档：<https://www.npmjs.com/>

Mongoo 文档：<https://mongoosejs.com/>

Express 文档：<http://www.expressjs.com.cn/>

## 1.node 的特点

1）它是一个 Javascript 运行环境
2）依赖于 Chrome V8 引擎进行代码解释
3）事件驱动
4）非阻塞 I/O
5）轻量、可伸缩，适于实时数据交互应用
6）单进程，单线程

## 2.Exports 和 Module.exports 区别

`module.exports` 是真实存在的东西。exports 只是 `module.exports` 的引用,
你的模块最终返回 `module.exports` 给调用者，而不是 `exports`

```js
let exports = module.exports;
function fn() {
    console.log(‘123’);
}

console.log(arguments.callee.toString());
return module.exports;
```

## 3.express 的优缺点

Express 的优点是线性逻辑：路由和中间件完美融合，通过中间件形式把业务逻辑细分，简化，一个请求进来经过一系列中间件处理后再响应给用户，再复杂的业务也是线性了，清晰明了。
Express 是基于 callback 来组合业务逻辑。Callback 有两大硬伤，一是不可组合，二是异常不可捕获。

## 4.什么是中间键，常见的中间键

Express 是一个自身功能极简，完全是路由和中间件构成一个 web 开发框架：从本质上来说，一个 Express 应用就是在调用各种中间件。封装了一些或许复杂但肯定是通用的功能, 非内置的中间件需要通过安装后，require 到文件就可以运行。
第三方中间件:
`cookie-parser`：解析 cookie
`ejs`：ejs 模板
`express-session`：解析 session
`http-errors`：错误中间件处理
`Moment`：日期时间处理
`Morgan`：日志打印
`Multer`：文件上传
`Nodemon`：热更新
`config-lite`: 读取配置文件

## 5.什么是同步与异步

同步：浏览器访问服务器请求，用户看得到页面刷新，重新发请求,等请求完，页面刷新，新内容出现，用户看到新内容,进行下一步操作。

异步：浏览器访问服务器请求，用户正常操作，浏览器后端进行请求。等请求完，页面不刷新，新内容也会出现，用户看到新内容。

## 6.分页功能前后端是如何交互的

分页功能, 前后端都可以做, 如果是前端做分页的话, 根据翻的页码数, 截取后台返回的全部数据, 进行分段展示
如果是前后端配合做, 则需要传递当前页码数给后台, 后台会返回对应页码的数据

## 7.将 npm 服务器切到国内淘宝服务器(镜像服务器)

```bash
npm config set registry https://registry.npm.taobao.org –global
npm config set disturl https://npm.taobao.org/dist –global
```

## 8.常用的 npm 命令

```bash
npm -v #查看npm的版本
npm version #查看所有模块的版本
npm init <初始化项目> #（创建package.json）
#创建package.json文件作用：记录我们当前node项目中依赖哪些第三方的包，当我们把node项目发给别人或发布时，就可以删除node项目中已安装的第三包文件。
npm i/install <包名> #安装指定的包 @版本号，不加版本默认为最新
npm i/install <包名> –save #安装指定的包并添加依赖
#–save的功能：之前旧的npm命令如果不带–save参数，则在.json文件中不产生依赖项(dependencies)
npm i/install <包名> -g #全局安装（一般都是一些工具）
npm i/install #安装当前项目所依赖的包
npm s/search <包名> #搜索包
npm r/remove <包名> #删除一个包
npm uninstall <包名> #删除当前项目所依赖的包
```

9.封装的一个 mongoo 数据库增删查改类

```js
//引入 mongoose
let mongoose = require("mongoose");

//\*\*\*注意：通过 mongoose 操作 mongodb 数据库时，mongoose 会自动对
// 表名加 s 或 es
//定义通过 mongoose 操作 mongodb 数据库的类
class Mongooses {
  constructor(host, dbname, port) {
    this.tableModel = {}; //存放创建的表Model模型
    this.model = {}; //当前表的Model模型
    mongoose.connect(`mongodb://${host}:${port}/${dbname}`, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    //获取所有表定义及数据约束
    this.table = require("./tables.json");
  }

  //类中放属性及方法

  //定义Schema及创建Model模型
  getModels(tname) {
    this.model = this.tableModel[tname];
    if (!this.model) {
      // 当前表的Model不存在
      //创建Schema
      let schema = new mongoose.Schema(this.table[tname]);

      // console.log('testing...');
      //根据Schema创建Model模型
      this.model = mongoose.model(tname, schema);
      //将已创建的Model存放this.tableModel
      this.tableModel[tname] = this.model;
    }
  }

  //添加数据
  /**
   *
   * @param String tables  表名
   * @param Object fields  要添加的数据
   * @param Function callback  回调函数
   */
  add(tables, fields, callback) {
    this.getModels(tables);
    this.model.create(fields, (err) => {
      callback(err);
    });
  }

  //查询数据
  /**
   *
   * @param String tname  表名
   * @param Object cond   查询条件
   * @param Object fields   要显示的属性
   * @param Object sortlimit   选项：可以使用limit、skip、sort
   * @param Function callback  回调函数
   */
  search(tname, cond, fields, sortlimit, callback) {
    this.getModels(tname); //创建当前表的Model模型

    this.model.find(cond, fields, sortlimit, (err, data) => {
      callback(err, data);
    });
  }

  //根据条件查询数量
  searchCount(tname, cond, callback) {
    this.getModels(tname); //创建当前表的Model模型
    this.model.countDocuments(cond, (err, num) => {
      callback(err, num);
    });
  }

  //修改数据
  /**
   *
   * @param String tname 表名
   * @param Object cond  条件
   * @param Object fields  修改后的对象
   * @param Function callback 回调函数
   */
  modify(tname, cond, fields, callback) {
    this.getModels(tname);
    this.model.update(cond, fields, { multi: true }, (err, data) => {
      callback(err, data);
    });
  }

  //删除数据
  del(tname, cond, callback) {
    this.getModels(tname);
    this.model.remove(cond, (err) => {
      callback(err);
    });
  }
}
// 暴露模块给其他地方使用
module.exports = new Mongooses("localhost", "baofeng", 27017);
```
