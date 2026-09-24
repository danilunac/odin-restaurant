function createHome() {
    const home = document.createElement('div');
    home.id = 'home';

    home.appendChild(createTitle('Beer Shop Beertato'));

    home.appendChild(createParagraph('Welcome to our craft beer shop'));
    home.appendChild(createParagraph('We want to be good at what we do. That\'s why we focus on offering a small selection of high-quality products. We offer three types of craft beer and three homemade tapas, all featuring potatoes as their main ingredient. A beer always tastes better with something to eat'));
    home.appendChild(createParagraph('Our goal is for you to enjoy drinking our beers and eating our tapas, but above all, to enjoy the good conversations that happen around them'));

    return home;
}

function createTitle(text) {
    const title = document.createElement('h1');
    title.textContent = text;

    return title;
}

function createParagraph(text) {
    const p = document.createElement('p');
    p.textContent = text;

    return p;
}

function loadHome() {
    const content = document.getElementById('content');
    content.textContent= '';
    content.appendChild(createHome());
}

export default loadHome;