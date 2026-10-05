import homePage from './home.js'
import menuPage from './menu.js'
import contactPage from './contact.js'
import "./style.css"

homePage();

const buttons = document.querySelector('nav');

buttons.addEventListener('click', (e) => {
    const button = e.target.closest('button');
    if (!button) return;

    if (button.dataset.nav === 'home') {
        homePage();
    } else if (button.dataset.nav === 'menu') {
        menuPage()
    } else if (button.dataset.nav === 'contact') {
        contactPage();
    }
});