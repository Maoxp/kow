// 左边侧栏导航
export default {
  '/guide': { base: '/guide/', items: sidebar_guide() },

  '/posts': { base: '/posts/', items: sidebar_posts() },

  '/tutorial': { base: '/tutorial/', items: sidebar_tutorial() },

  '/backend': { base: '/backend/', items: sidebar_backend() },

  '/front': { base: '/front/', items: sidebar_front() }
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
    { text: "api-examples", link: "api-examples" }
  ];
}

function sidebar_posts() {
  return [
    { text: "👀 全文总览", link: "cover" },
    {
      text: '清单',
      collapsed: false,
      items: [
        { text: "MacOS EACCES 权限问题", link: "macOS-permission-denied" },
        { text: "Explain分析", link: "explain-analysis" },
        { text: "58的MySQL指南", link: "58-mysql军规" },
      ]
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
    { text: 'mysql-usage', link: "mysql-usage" },
    { text: 'nginx-install', link: "nginx-install" },
    { text: "shell-script", link: "shell-script" },
    { text: "ssh-key-authentication", link: "ssh-key-authentication" },
    { text: "upgrade-curl", link: "upgrade-curl" },
    { text: "vim-operation", link: "vim-operation" },
    { text: "Nginx配置", link: "nginx-config" },
  ];
}

function sidebar_backend() {
  return [
    { text: '概览', link: 'cover' },
    {
      text: "PHP",
      base: '/backend/php/',
      items: [
        { text: "👀 全文总览", link: "cover" },
        { text: "zephir", link: "zephir" },
        { text: "phpConfig", link: "php-config" },
        { text: "其他", link: "other" },
        { text: "TP验证器", link: "tp-validate" },
        {
          text: "编译",
          collapsed: false,
          base: '/backend/php/make/',
          items: [
            { text: "7.3", link: "73" },
            { text: "7.4", link: "74" },
            { text: "phpize", link: "phpize" },
            { text: "xdebug", link: "xdebug" }
          ]
        },
      ]
    },
    {
      text: "Java",
      base: '/backend/java/',
      items: [
        { text: "👀 全文总览", link: "cover" },
        { text: "jdk配置", link: "jdk-config" },
      ]
    },

  ];
}

function sidebar_front() {
  return [
    { text: "👀 全文总览", link: "cover" },
    {
      text: 'JQuery',
      items: [
        { text: '选择器', link: 'selector' }
      ]

    }
  ];
}