// 左边侧栏导航
export default {
  "/guide": { base: "/guide/", items: sidebar_guide() },

  "/posts": { base: "/posts/", items: sidebar_posts() },

  "/tutorial": { base: "/tutorial/", items: sidebar_tutorial() },

  "/backend": { base: "/backend/", items: sidebar_backend() },

  "/front": { base: "/front/", items: sidebar_front() },

  '/about': { base: "/about/", items: sidebar_about() }
};

function sidebar_about() {
  return [
    { text: "关于作者", link: "me" },
    {
      text: '年度规划',
      collapsed: false,
      items: [
        { text: "2024", link: "2024" },
      ],
    },
  ];
}

function sidebar_guide() {
  return [
    {
      text: "🧭导航仪",
      collapsed: false,
      items: [
        { text: "概览", link: "index" },
        { text: "markdown 图标", link: "markdown-icon" },
      ],
    },
    { text: "markdown-examples", link: "markdown-examples" },
    { text: "api-examples", link: "api-examples" },
  ];
}

function sidebar_posts() {
  return [
    { text: "👀 全文总览", link: "cover" },
    {
      text: "清单",
      collapsed: false,
      items: [
        { text: "MacOS EACCES 问题", link: "macOS-permission-denied" },
        { text: "Prismjs 支持高亮列表", link: "prismjs-hight-light" },
        { text: "Explain分析", link: "explain-analysis" },
        { text: "58的MySQL指南", link: "58-mysql军规" },
        { text: "CPU飙高处理步骤", link: "cpu-hight" },
        { text: "Windows多帐户转换", link: "windows-user" },
      ],
    },
  ];
}

function sidebar_tutorial() {
  return [
    { text: "YUM RPM", link: "centos-yum-tool" },
    { text: "找大文件命令", link: "find-large-files" },
    { text: "Git用法", link: "git-usage" },
    { text: "IP黑名单", link: "ip-blacklist" },
    { text: "brew命令", link: "mac-brew" },
    { text: "进程监控", link: "monitor-service" },
    { text: "mysql-install", link: "mysql-install" },
    { text: "mysql-usage", link: "mysql-usage" },
    { text: "nginx-install", link: "nginx-install" },
    { text: "shell-script", link: "shell-script" },
    { text: "ssh-key-authentication", link: "ssh-key-authentication" },
    { text: "upgrade-curl", link: "upgrade-curl" },
    { text: "vim-operation", link: "vim-operation" },
    { text: "Nginx配置", link: "nginx-config" },
    { text: "Certbot 自动申请域名证书", link: "nginx-certbot" },
  ];
}

function sidebar_backend() {
  return [
    { text: "概览", link: "cover" },
    {
      text: "PHP",
      base: "/backend/php/",
      items: [
        { text: "👀 全文总览", link: "cover" },

        { text: "phpConfig", link: "php-config" },
        { text: "其他", link: "other" },
        { text: "TP验证器", link: "tp-validate" },
        {
          text: "zephir",
          collapsed: false,
          base: "/backend/php/zephir-",
          items: [
            { text: "安装", link: "install" },
            { text: "项目构建", link: "init" },
          ],
        },
        {
          text: "编译",
          collapsed: false,
          base: "/backend/php/make/",
          items: [
            { text: "7.3", link: "73" },
            { text: "7.4", link: "74" },
            { text: "phpize", link: "phpize" },
            { text: "xdebug", link: "xdebug" },
          ],
        },
      ],
    },
    {
      text: "Java",
      base: "/backend/java/",
      items: [
        { text: "👀 全文总览", link: "cover" },
        { text: "jdk配置", link: "jdk-config" },
      ],
    },
  ];
}

function sidebar_front() {
  return [
    { text: "👀 全文总览", link: "cover" },
    {
      text: "JQuery",
      items: [{ text: "选择器", link: "selector" }],
    },
    {
      text: "JavaScript",
      base: "/front/js-",
      items: [
        { text: "知识体系", link: "knowledge-system" },
        { text: "常用方法", link: "common-func" },
        { text: "[字符串]常用函数", link: "str" },
        { text: "[数组]常用函数", link: "str" },
        { text: "[时间对象]常用函数", link: "date" },
        { text: "[数学]常用函数", link: "math" },
        { text: "[事件]常用函数", link: "event" },
        { text: "DOM对象", link: "dom" },
        { text: "Node笔记", link: "node" },
      ],
    },
  ];
}
