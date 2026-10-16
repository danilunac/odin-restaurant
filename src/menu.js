import bravasImg from './images/menu/bravas.webp';
import craftBeersImg from './images/menu/craft-beers.webp';
import fritasImg from './images/menu/fritas.webp';
import tortillaImg from './images/menu/tortilla.webp';

function createMenu() {
    const menu = document.createElement('div');
    menu.id = 'menu';

    const beerPost = postContainer();
    beerPost.appendChild(addImage(craftBeersImg, 'Craft beers'));
    beerPost.appendChild(createTitle('Our craft beers'));

    const lager = document.createElement('strong');
    lager.textContent = 'Lager - ';
    const paleAle = document.createElement('strong');
    paleAle.textContent = 'Pale Ale - ';
    const ipa = document.createElement('strong');
    ipa.textContent = 'IPA - ';
    const wheatBeer = document.createElement('strong');
    wheatBeer.textContent = 'Wheat Beer - ';
    const stout = document.createElement('strong');
    stout.textContent = 'Stout - ';

    beerPost.appendChild(createParagraphWithDescription(lager, 'light and refreshing, with a smooth malt flavor.'));
    beerPost.appendChild(createParagraphWithDescription(paleAle, 'balanced, with malty notes and a touch of hops.'));
    beerPost.appendChild(createParagraphWithDescription(ipa, 'intense and bitter, with a strong hop character.'));
    beerPost.appendChild(createParagraphWithDescription(wheatBeer, 'smooth and refreshing, with citrus notes.'));
    beerPost.appendChild(createParagraphWithDescription(stout, 'dark and creamy, with coffee and chocolate notes.'));

    const tapasContainer = document.createElement('div');
    tapasContainer.id = 'tapas';
    tapasContainer.appendChild(createTitle('Our tapas'));

    const bravasPost = postContainer();
    bravasPost.appendChild(addImage(bravasImg, 'Spanish tapa: patatas bravas'));
    bravasPost.appendChild(createSmallTitle('Patatas bravas'));
    bravasPost.appendChild(createParagraph('Crispy and golden, with a spicy brava sauce.'));

    const tortillaPost = postContainer();
    tortillaPost.appendChild(addImage(tortillaImg, 'Spanish dish: tortilla de patatas.'));
    tortillaPost.appendChild(createSmallTitle('Tortilla de patatas'));
    tortillaPost.appendChild(createParagraph('Juicy and homemade, with tender potatoes and onion.'));

    const fritasPost = postContainer();
    fritasPost.appendChild(addImage(fritasImg, 'French fries'));
    fritasPost.appendChild(createSmallTitle('French fries'));
    fritasPost.appendChild(createParagraph('Crispy outside, tender inside, perfect for sharing.'));

    tapasContainer.appendChild(bravasPost);
    tapasContainer.appendChild(tortillaPost);
    tapasContainer.appendChild(fritasPost);

    menu.appendChild(beerPost);
    menu.appendChild(tapasContainer);

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

function createSmallTitle(text) {
    const smallTitle = document.createElement('h4');
    smallTitle.textContent = text;

    return smallTitle;
}

function createParagraphWithDescription(strong, text) {
    const p = document.createElement('p');

    p.appendChild(strong);
    p.appendChild(document.createTextNode(text));

    return p;
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
