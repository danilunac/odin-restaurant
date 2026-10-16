function createContact() {
    const contact = document.createElement('div');
    contact.id = 'contact';

    const phoneNumber = document.createElement('strong');
    phoneNumber.textContent = 'Phone number: ';
    const email = document.createElement('strong');
    email.textContent = 'Email: '
    const address = document.createElement('strong');
    address.textContent = 'Address: '

    contact.appendChild(createParagraph(phoneNumber, '+34 933 526 719'));
    contact.appendChild(createParagraph(email, 'Email: beertato@beertato.com'));
    contact.appendChild(createParagraph(address, 'Address: Passatge Utset, 4, Barcelona (Spain)'));

    return contact;
}

function createParagraph(strong, text) {
    const p = document.createElement('p');

    p.appendChild(strong);
    p.appendChild(document.createTextNode(text));

    return p;
}

function loadContact() {
    const content = document.getElementById('content');
    content.textContent = '';
    content.appendChild(createContact());
}

export default loadContact;