import { defineConfig } from 'vitepress'
import sidebar from "./config/sidebar";
import search from "./config/search";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-Hans",
  title: "学而笔记知",
  description: "学习过程的点点滴滴，都应记录，养成良好的笔记习惯，即是为了查阅方便，也是为了留存记忆！",
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  // ignoreDeadLinks: true, // 不会因死链接而使构建失败
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'https://avatars.githubusercontent.com/u/48587992?v=4'
      }
    ]
  ],

  themeConfig: {
    siteTitle: "学而笔记知",
    outlineTitle: '⚡️文档大纲',
    outline: 'deep', // 大纲显示层级：(number 只显示 | [number, number] 指定层级范围显示 | 'deep' 全部显示 | false 不显示)

    nav: nav(),
    sidebar,
    search,

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: `版权所有 © 2019-${new Date().getFullYear()} 毛星培`
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    // 右边文档大纲下面的-卡片广告
    carbonAds: {
      code: 'CEBDT27Y', //卡片广告 code
      placement: 'vuejsorg' // 卡片广告布置
    },

  }
})

function nav() {
  return [
    {
      text: '导航',
      link: '/guide/index',
      activeMatch: '/guide'
    },
    {
      text: '文章',
      link: '/posts/cover',
      activeMatch: '/posts'
    },
    {
      text: 'DevOps',
      link: '/tutorial/git-usage',
      activeMatch: '/tutorial'
    },
    {
      text: '关于',
      link: '/about/me',
      activeMatch: '/about'
    },
    {
      text: '开发',
      items: [
        {
          text: '后端',
          link: '/backend/cover',
          activeMatch: '/backend'
        },
        {
          text: '前端',
          link: '/front/cover'
        }
      ]
    }
  ]
}
