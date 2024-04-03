import rss from "@astrojs/rss"
import { getCollection } from "astro:content"
import { SITE } from "../consts"

type Context = {
  site: string
}

export async function GET(context: Context) {
  const projects = await getCollection("projects")

  projects.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())

  return rss({
    title: SITE.TITLE,
    description: SITE.DESCRIPTION,
    site: context.site,
    items: projects.map((item) => ({
      title: item.data.title,
      description: item.data.summary,
      pubDate: item.data.date,
      link: `/projects/${item.slug}/`,
    })),
  })
}