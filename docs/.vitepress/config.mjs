import { defineConfig } from "vitepress";
import { constants } from "./config/constants";
import { head } from "./config/head";
import { markdown } from "./config/markdown";
import { themeConfig } from "./config/themeConfig";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-Hans",
  // ignoreDeadLinks: true, // 不会因死链接而使构建失败
  ...constants,
  head,
  markdown,
  themeConfig,
});
