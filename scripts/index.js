const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__popup-open');
let popupName = popupElement.querySelector('.popup__form_input_name');
let popupAbout = popupElement.querySelector('.popup__form_input_about');
let saveBtn = popupElement.querySelector('.popup__button-save');
let profileName = document.querySelector('.profile__title');
let profileAboutMe = document.querySelector('.profile__subtitle');



const openPopup = function () {
    popupElement.classList.add('popup_opened');
    popupName.value = profileName.textContent;
    popupAbout.value = profileAboutMe.textContent;
}

const closePopup = function () {
    popupElement.classList.remove('popup_opened');
}

const closePopupByClickOnOverlay = function (event) {
    if (event.target !== event.currentTarget) {
        return;
    }

    closePopup();
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);

popupElement.addEventListener('click', closePopupByClickOnOverlay);

form.addEventListener('submit', (event) => {
    event.preventDefault()
    profileName.textContent = popupName.value;
    profileAboutMe.textContent = popupAbout.value;
    closePopup();
});

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const cards = document.querySelector('.cards');

const createCards = (elm) => {
    const template = `
        <li class="cards__item">
        <img src="" alt="" class="cards__image">
        <div class="cards__title-icon">
            <h2 class="cards__title"></h2>
            <button type="button" class="cards__icon"></button>
        </div>    
        </li>`;

    const container = document.createElement('div');
    container.innerHTML = template;
    container.querySelector('.cards__title').textContent = elm.name;
    container.querySelector('.cards__image').src = elm.link;
    return container.firstElementChild;
};

const renderCards = (elm) => {
    cards.append(createCards(elm));
};

initialCards.forEach((elm) => {
    renderCards(elm);
});