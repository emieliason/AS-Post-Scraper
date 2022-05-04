// Require the API
import GhostContentAPI from '@tryghost/content-api';

// URL, Key
const api = new GhostContentAPI({
    url: 'https://amherststudent.com',
    key: '553ba2bd1aab74780a082521a2',
    version: "v3"
});

// Wait until posts are fetched to return
export async function fetchPosts() {
    try {
        const posts = await api.posts
            .browse({
                limit: 50,
                include: 'tags,authors',
                fields: 'title,author,custom_excerpt,url,published_at',
                formats: 'plaintext',
                filter: "published_at:>'2022-04-27 00:00:00'"
            });
        return posts;
    } catch (err) {
        console.error(err);
    }    
}