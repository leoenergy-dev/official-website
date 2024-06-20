import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import _const from '../const';

export async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: _const.title,
		description: _const.description,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/actualites`,
		})),
	});
}
