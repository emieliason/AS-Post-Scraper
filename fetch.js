const GhostContentAPI = require('@tryghost/content-api');

const api = new GhostContentAPI({
    url: 'https://amherststudent.com',
    key: '553ba2bd1aab74780a082521a2',
    version: "v3"
  });
  
  // fetch 5 posts, including related tags and authors
  api.posts
      .browse({limit: 5, include: 'tags,authors'})
      .then((posts) => {
          posts.forEach((post) => {
              console.log(post.title);
          });
      })
      .catch((err) => {
          console.error(err);
      });