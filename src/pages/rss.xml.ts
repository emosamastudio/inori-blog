import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('blog'))
    .filter((p) => !p.data.draft)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: 'Inori Blog',
    description: '祈的个人博客——关于虚拟助手、全息光影与细腻温柔的思考。',
    site: context.site || 'https://inori.emosamastudio.com',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.summary,
      pubDate: post.data.date,
      link: `/blog/${post.id.replace('.md', '')}`,
    })),
    customData: '<language>zh-CN</language>',
  });
}
