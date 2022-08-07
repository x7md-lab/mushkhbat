import { defineConfig } from 'astro/config';
import "rehype-figure-for-img";
import "remark-unwrap-images";
import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [["remark-gfm", {}], ['remark-unwrap-images', {}]],
    rehypePlugins: [['rehype-figure-for-img', {}], ['rehype-wrap-all', {
      selector: 'table',
      wrapper: 'figure'
    }]]
  },
  integrations: [react(), mdx()]
});