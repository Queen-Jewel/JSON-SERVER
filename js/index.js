
let container = document.querySelector(".blogs");


const renderPost = async () => {
    let uri = 'http://localhost:3000/posts';

    const res = await fetch(uri);
    const posts = await res.json();
    

    let template = '';
    posts.forEach( post => {
        template += `
        <div class="post">
        <h2>${post.title}</h2>
        <p><small>${post.likes} likes</small></p>
        <p>${post.body.slice(0, 150)}</p>
        <a href="/details.html?id=${post.id}">click for more...</a>
        </div>
        `
    })

    container.innerHTML = template;
};

window.addEventListener('DOMContentLoaded', () => renderPost());