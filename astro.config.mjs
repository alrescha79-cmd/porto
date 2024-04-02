import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import solidJs from "@astrojs/solid-js"

import react from "@astrojs/react"

// https://astro.build/config
export default defineConfig({
  site: "https://cakson.my.id",
  // base: "porto",
  integrations: [mdx(), sitemap(), solidJs(), tailwind({
    applyBaseStyles: false
  }), react()],
  jsx: "react",
})