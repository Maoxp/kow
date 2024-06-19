export const nav = [
  { text: "导航", link: "/guide/index", activeMatch: "/guide" },
  { text: "文章", link: "/posts/cover", activeMatch: "/posts" },
  { text: "DevOps", link: "/tutorial/git-usage", activeMatch: "/tutorial" },
  { text: "关于", link: "/about/me", activeMatch: "/about" },
  {
    text: "开发",
    items: [
      {
        text: "后端",
        link: "/backend/cover",
        activeMatch: "/backend",
      },
      {
        text: "前端",
        link: "/front/cover",
      },
    ],
  },
  { text: '趣链', link: '/quchain/cover', activeMatch: '/quchain' }
];
