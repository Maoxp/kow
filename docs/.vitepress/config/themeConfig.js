import { nav } from "./nav";
import sidebar from "./sidebar";
import search from "./search";

export const themeConfig = {
    siteTitle: "学而笔记知",
    outlineTitle: "目录",
    outline: "deep", // 大纲显示层级：(number 只显示 | [number, number] 指定层级范围显示 | 'deep' 全部显示 | false 不显示)
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },
    socialLinks: [{ icon: "github", link: "https://github.com/maoxp" }],


    nav,
    sidebar,
    search,


    footer: {
      message: "Released under the MIT License.",
      copyright: `版权所有 © 2022-${new Date().getFullYear()} 毛星培`,
    },
    editLink: {
      pattern: 'https://github.com/maoxp/kow/edit/main/docs/:path',
      text: '编辑'
    },

    // 右边文档大纲下面的-卡片广告
    carbonAds: {
      code: "CEBDT27Y", //卡片广告 code
      placement: "vuejsorg", // 卡片广告布置
    },

}