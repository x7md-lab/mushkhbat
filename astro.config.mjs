import { defineConfig } from 'astro/config';
import rehypeImg from "rehype-figure-for-img";
import remarkUnwrap from "remark-unwrap-images";
import rehypeWrap from "rehype-wrap-all"
import remarkGfm from 'remark-gfm';
import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx(
    {
      remarkPlugins: [remarkUnwrap, remarkGfm],
      rehypePlugins: [rehypeImg, rehypeWrap({
      selector: 'table',
      wrapper: 'figure'
    })]
    }
  )]
});