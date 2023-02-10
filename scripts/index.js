// popup
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
/* const popupView = document.querySelector('.cards__image'); */
// console.log(popupEdit, popupAdd)

// popup button close
const popupCloseButtonEdit = popupEdit.querySelector('.popup__close');
const popupCloseButtonAdd = popupAdd.querySelector('.popup__close');
/* const popupCloseButtonView  = popupView.querySelector('.popup__close'); */
// console.log({popupCloseButtonEdit, popupCloseButtonAdd})

// popup button open
const popupOpenButtonEdit = document.querySelector('.profile__popup-open');
const popupOpenButtonAdd = document.querySelector('.profile__vector');
/* const popupOpenButtonView = document.querySelector('.cards__image'); */

// popup button save
let saveBtn = document.querySelector('.popup__button-save');
let popupName = document.querySelector('.popup__form_input_name');
let popupAbout = document.querySelector('.popup__form_input_about');
let profileName = document.querySelector('.profile__title');
let profileAboutMe = document.querySelector('.profile__subtitle');


// открытие popup
const openPopupEdit = () => {
    popupEdit.classList.add('popup_opened');
    popupName.value = profileName.textContent;
    popupAbout.value = profileAboutMe.textContent;
}

const openPopupAdd = () => {
    popupAdd.classList.add('popup_opened');
}

/* const openPopupView = function () {
    popupView.classList.add('popup_opened');
} */

// закрытие popup
const closePopupEdit = () => {
    popupEdit.classList.remove('popup_opened');
}

const closePopupAdd = () => {
    popupAdd.classList.remove('popup_opened');
}

popupOpenButtonEdit.addEventListener('click', openPopupEdit);
popupCloseButtonEdit.addEventListener('click', closePopupEdit);

popupOpenButtonAdd.addEventListener('click', openPopupAdd);
popupCloseButtonAdd.addEventListener('click', closePopupAdd);

// закрытие popup при нажатие вне формы
const closePopupEditByClickOnOverlay = function (event) {
    if (event.target !== event.currentTarget) {
        return;
    }

    closePopupEdit();
}

const closePopupAddByClickOnOverlay = function (event) {
    if (event.target !== event.currentTarget) {
        return;
    }

    closePopupAdd();
}



popupEdit.addEventListener('click', closePopupEditByClickOnOverlay);
popupAdd.addEventListener('click', closePopupAddByClickOnOverlay);

edit.addEventListener('submit', (event) => {
    event.preventDefault()
    profileName.textContent = popupName.value;
    profileAboutMe.textContent = popupAbout.value;
    closePopupEdit();
});

add.addEventListener('submit', (event) => {
    event.preventDefault()
    closePopupAdd();
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
const template = document.querySelector('#template')

const createCards = (cardsNameLink) => {
    const card = template.content.querySelector('.cards__item').cloneNode(true);

    card.querySelector('.cards__title').textContent = cardsNameLink.name;
    card.querySelector('.cards__image').src = cardsNameLink.link;
    card.querySelector('.cards__image').alt = cardsNameLink.name;
    return card;
};

const renderCards = (cardsNameLink) => {
    cards.append(createCards(cardsNameLink));
};

initialCards.forEach((elm) => {
    renderCards(elm);
});

deleteCards = () => {

}