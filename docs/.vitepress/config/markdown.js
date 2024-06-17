export const markdown = {
  // theme: {
  // 	dark: 'material-palenight',
  // 	light: 'material-lighter'
  // },
  headers: {
    level: [1, 2, 3],
  },
  config: (md) => {
    md.renderer.rules.heading_close = (tokens, idx, options, env, self) => {
      let htmlResult = self.renderToken(tokens, idx, options);

      if (tokens[idx].tag === "h1") {
        htmlResult += `<ClientOnly><articleMeta v-model="$frontmatter"/></ClientOnly>`;
      }

      return htmlResult;
    };
  },
};
