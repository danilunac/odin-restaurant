import homePage from './home.js'
import menuPage from './menu.js'
import contactPage from './contact.js'
import "./style.css"

homePage();

const homeButton = document.querySelector('button[data-nav="home"]');
homeButton.classList.add('active');

const navElement = document.querySelector('nav');

navElement.addEventListener('click', (e) => {
    const button = e.target.closest('button');
    if (!button) return;

    const buttons = document.querySelectorAll('button');
    for (let btn of buttons) {
        btn.classList.remove('active');
    }

    if (button) {
        button.classList.add('active');
    }

    if (button.dataset.nav === 'home') {
        homePage();
    } else if (button.dataset.nav === 'menu') {
        menuPage();
    } else if (button.dataset.nav === 'contact') {
        contactPage();
    }
});