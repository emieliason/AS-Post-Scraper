import { fetchPosts } from "./fetch.js";



// Grab the articles from the website.
const articles = await fetchPosts();

for (let i = 0; i < articles.length; i++) {
    console.log(articles[i].title);
    var val = articles[i].tags[0].name;
    console.log(val);
}

// Loop through each article to create a unique string.
let articleStrings = "";

for (let i = 0; i < articles.length; i++) {
    articleStrings += "<br>**" + articles[i].title + "** \n\n" + articles[i].custom_excerpt + "<br><br>✍️ ";
    for (let j = 0; j < articles[i].authors.length - 1; j++) {
        articleStrings += articles[i].authors[j].name + " and ";
    }
    articleStrings += articles[i].authors[articles[i].authors.length - 1].name;
    articleStrings += "<br> 🔗 " + articles[i].url;
    articleStrings += "\n\n\n";
}

// Print the list of strings.
/* for (let i = 0; i < articleStrings.length; i++) {
    console.log(i + ": " + articleStrings[i]);
} */

import fs from 'fs';

fs.writeFile('output.md', articleStrings, (err) => {
    if (err) throw err;
})