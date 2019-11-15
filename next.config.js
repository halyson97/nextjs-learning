const fetch = require('isomorphic-unfetch');


function getPosts() {
    return [
      { id: 'hello-nextjs', title: 'Hello Next.js' },
      { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
      { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
    ];
  }

module.exports = {
  exportPathMap: async function() {
    const paths = {
      '/': { page: '/' },
      '/about': { page: '/about' }
    };
    

    getPosts().forEach(show => {
      paths[`/p/${show.id}`] = { page: '/p/[id]', query: { id: show.id } };
    });

    return paths;
  }
};