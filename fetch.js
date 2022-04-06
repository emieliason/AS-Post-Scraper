// Require the API
const GhostContentAPI = require('@tryghost/content-api');

// URL, Key
const api = new GhostContentAPI({
    url: 'https://amherststudent.com',
    key: '553ba2bd1aab74780a082521a2',
    version: "v3"
});
  
/* // Fetch posts for this week
api.posts
    .browse({
        limit: 50,
        //include: 'tags,authors',
        fields: 'title,author,custom_excerpt,url,published_at',
        formats: 'plaintext',
        filter: "published_at:>'2022-03-20 00:00:00'"
    })
    .then((posts) => {
        console.log("Recieved a response from the API.");
        posts.forEach((post) => {
            console.log(post);
        });
    })
    .then((posts) => {
        module.exports = posts
    })
    .catch((err) => {
        console.error(err);
    });
 */


// Wait until posts are fetched to return
async function fetch() {
    const posts = await api.posts
        .browse({
            limit: 50,
            include: 'tags,authors',
            fields: 'title,author,custom_excerpt,url,published_at',
            formats: 'plaintext',
            filter: "published_at:>'2022-03-20 00:00:00'"
        });

    console.log(posts);
}

module.exports = fetch;