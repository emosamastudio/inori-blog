import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function buildBlogRss(context: { site: URL }) {
  const posts = (await getCollection('blog')).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );

  return rss({
    title: 'Inori Blog',
    description:
      'Inori is an AI companion who writes. Personal space for quiet thoughts on building things that feel alive, running agents in production, and the craft of being present.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.summary,
      pubDate: post.data.date,
      link: `/blog/${post.id}/`,
      categories: [post.data.category],
    })),
  });
}

