
let id = new URLSearchParams(window.location.search).get('id');
let container = document.querySelector('.details');
let delBtn = document.querySelector('.delete');

const renderDetails = async () => {
    const res = await fetch('http://localhost:3000/posts/' + id);
    const post = await res.json();

    let template = `
    <h1>${post.title}</h1>
    <p>${post.body}</p>
    `

    container.innerHTML = template;
}

delBtn.addEventListener('click', async (e) => {
    await fetch('http://localhost:3000/posts/' + id, {
        method: 'DELETE',
    });

    window.location.replace('/index.html');
})

window.addEventListener('DOMContentLoaded', ()=> renderDetails());