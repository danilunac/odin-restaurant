function createContact() {
    const contact = document.createElement('div');
    contact.id = 'contact';

    contact.appendChild(createParagraph('phone number: 933 526 719'));
    contact.appendChild(createParagraph('email: beertato@beertato.com'));
    contact.appendChild(createParagraph('address: Passatge Utset, 4, Barcelona (Spain)'));

    return contact;
}

function createParagraph(text) {
    const p = document.createElement('p');
    p.textContent = text;

    return p;
}

function loadContact() {
    const content = document.getElementById('content');
    content.textContent = '';
    content.appendChild(createContact());
}

export default loadContact;