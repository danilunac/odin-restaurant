import bravasImg from './images/menu/bravas.jpg';
import craftBeersImg from './images/menu/craft-beers.jpg';
import fritasImg from './images/menu/fritas.jpg';
import tortillaImg from './images/menu/tortilla.jpg';

function createMenu() {
    const menu = document.createElement('div');
    menu.id = 'menu';

    const beerPost = postContainer();
    beerPost.classList.add('beers');
    beerPost.appendChild(addImage(craftBeersImg, 'Craft beers'));
    beerPost.appendChild(createTitle('Our craft beers'));

    const beerTypes = document.createElement('div');
    beerTypes.id = 'beersDiv';
    beerPost.appendChild(beerTypes);

    beerTypes.appendChild(createParagraph('Lager — light and refreshing, with a smooth malt flavor.'));
    beerTypes.appendChild(createParagraph('Pale Ale — balanced, with malty notes and a touch of hops.'));
    beerTypes.appendChild(createParagraph('IPA — intense and bitter, with a strong hop character.'));
    beerTypes.appendChild(createParagraph('Wheat Beer — smooth and refreshing, with citrus notes.'));
    beerTypes.appendChild(createParagraph('Stout — dark and creamy, with coffee and chocolate notes.'));

    const bravasPost = postContainer();
    bravasPost.appendChild(addImage(bravasImg, 'Spanish tapa: patatas bravas'));
    bravasPost.appendChild(createTitle('Patatas bravas'));
    bravasPost.appendChild(createParagraph('Crispy and golden, with a spicy brava sauce.'))

    const tortillaPost = postContainer();
    tortillaPost.appendChild(addImage(tortillaImg, 'Spanish dish: tortilla de patatas.'));
    tortillaPost.appendChild(createTitle('Tortilla de patatas'));
    tortillaPost.appendChild(createParagraph('Juicy and homemade, with tender potatoes and onion.'));

    const fritasPost = postContainer();
    fritasPost.appendChild(addImage(fritasImg, 'French fries'));
    fritasPost.appendChild(createTitle('French fries'));
    fritasPost.appendChild(createParagraph('Crispy outside, tender inside, perfect for sharing.'));

    menu.appendChild(beerPost);
    menu.appendChild(bravasPost);
    menu.appendChild(tortillaPost);
    menu.appendChild(fritasPost);

    return menu;
}

function postContainer() {
    const container = document.createElement('div');
    container.classList.add('post');

    return container;
}

function addImage(src, alt) {
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;

    return img;
}

function createTitle(text) {
    const title = document.createElement('h3');
    title.textContent = text;

    return title;
}

function createParagraph(text) {
    const p = document.createElement('p');
    p.textContent = text;

    return p;
}

function loadMenu() {
    const content = document.getElementById('content');
    content.textContent = '';
    content.appendChild(createMenu());
}

export default loadMenu;
