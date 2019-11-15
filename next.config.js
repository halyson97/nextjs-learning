const fetch = require('isomorphic-unfetch');


function getPosts() {
	return [
		{ id: 'hello-nextjs', title: 'Hello Next.js' },
		{ id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
		{ id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
	];
}

module.exports = {
	target: 'serverless',
	exportPathMap: async function() {
		const paths = {
			'/': { page: '/' },
			'/about': { page: '/about' }
		};
		

		getPosts().forEach(post => {
			paths[`/posts/${post.id}`] = { page: '/posts/[id]', query: { id: post.id } };
		});

		return paths;
	}
};