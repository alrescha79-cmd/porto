import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import solidJs from "@astrojs/solid-js"
import react from "@astrojs/react"
import vercel from "@astrojs/vercel/serverless"



// https://astro.build/config
export default defineConfig({
  site: "https://cakson.my.id",
  integrations: [mdx(), sitemap(), solidJs(), tailwind({
    applyBaseStyles: false
  }), react()],
  jsx: "react",
  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
})