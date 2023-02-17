const popupEditHead = document.querySelector('.popup_edit');
const popupAddCard = document.querySelector('.popup_add');
const popupImg = document.querySelector('.popup_img');
// popup button open
const popupOpenButtonEditHead = document.querySelector('.profile__popup-open');
const popupOpenButtonAddCard = document.querySelector('.profile__vector');
// popup button close
const popupCloseButtonEditHead = popupEditHead.querySelector('.popup__close');
const popupCloseButtonAddCard = popupAddCard.querySelector('.popup__close');
const popupCloseButtonImg = popupImg.querySelector('.popup__close');

const popupName = popupEditHead.querySelector('.popup__form_input_name');
const popupAbout = popupEditHead.querySelector('.popup__form_input_about');
const profileName = document.querySelector('.profile__title');
const profileAboutMe = document.querySelector('.profile__subtitle');
const popupLink = popupAddCard.querySelector('.popup__form_input_link');
// открытие/закрытие popup
const openPopup = (popup) => {
    popup.classList.add('popup_opened');
}
const closePopup = (popup) => {
    popup.classList.remove('popup_opened');
}

popupOpenButtonEditHead.addEventListener('click', () => {
    popupName.value = profileName.textContent;
    popupAbout.value = profileAboutMe.textContent;
    openPopup(popupEditHead);
});
popupOpenButtonAddCard.addEventListener('click', () => openPopup(popupAddCard));

popupCloseButtonEditHead.addEventListener('click', () => closePopup(popupEditHead));
popupCloseButtonAddCard.addEventListener('click', () => closePopup(popupAddCard));
popupCloseButtonImg.addEventListener('click', () => closePopup(popupImg));
// закрытие popup при нажатие вне формы
const closePopupEditHeadByClickOnOverlay = (event) => {
    if (event.target !== event.currentTarget) {
        return;
    }
    closePopup(popupEditHead);
}
const closePopupAddCardByClickOnOverlay = (event) => {
    if (event.target !== event.currentTarget) {
        return;
    }
    closePopup(popupAddCard);
}
const closePopupImgByClickOnOverlay = (event) => {
    if (event.target !== event.currentTarget) {
        return;
    }
    closePopup(popupImg);
}
// слушаем событие нажатия вне формы и закрываем popup если оно есть
popupEditHead.addEventListener('click', closePopupEditHeadByClickOnOverlay);
popupAddCard.addEventListener('click', closePopupAddCardByClickOnOverlay);
popupImg.addEventListener('click', closePopupImgByClickOnOverlay);

form.addEventListener('submit', (event) => {
    event.preventDefault();
    profileName.textContent = popupName.value;
    profileAboutMe.textContent = popupAbout.value;
    closePopup(popupEditHead);
});

// выбираем ul в который будем вставлять template
const cardsContainer = document.querySelector('.cards');
// выбираем template шаблон
const template = document.querySelector('.template')
    .content
    .querySelector('.cards__item');

// создаем карточки по шаблону
const createCard = (cardsNameLink) => {
    const card = template.cloneNode(true);
    card.querySelector('.cards__title').textContent = cardsNameLink.name;
    card.querySelector('.cards__image').src = cardsNameLink.link;
    card.querySelector('.cards__image').alt = cardsNameLink.name;



    const popupImage = popupImg.querySelector('.popup__image');
    const popupName = popupImg.querySelector('.popup__name');
    const popupOpenButtonImg = card.querySelector('.cards__image');
    popupOpenButtonImg.addEventListener('click', () => {
        popupImg.classList.add('popup_opened');
        popupImage.src = popupOpenButtonImg.src;
        popupName.textContent = cardsNameLink.name;
    });


    const renderNewCards = () => {
        cardsContainer.prepend(createNewCard());
    };


    const likeBtn = card.querySelector('.cards__icon');
    likeBtn.addEventListener('click', (event) => {
        event.target.classList.toggle('cards__icon_active');
    })

    const treshButtonDelete = card.querySelector('.cards__trash');
    treshButtonDelete.addEventListener('click', () => {
        card.remove();
    })
    return card;
};

// размещаем созданные карточки на странице
const renderCards = (cardsNameLink) => {
    cardsContainer.prepend(createCard(cardsNameLink));
};
// делаем обход массива
initialCards.forEach((elm) => {
    renderCards(elm);
});

const formAdd = popupAddCard.querySelector('.form_add');
const inputAddName = formAdd.querySelector('.popup__form_input_title');
const inputAddLink = formAdd.querySelector('.popup__form_input_link');

const submitFormAdd = (event) => {
    event.preventDefault();
    const card = { name: inputAddName.value, link: inputAddLink.value, };
    renderCards(card);
    inputAddName.value = '';
    inputAddLink.value = '';
    closePopup(popupAddCard);
};
formAdd.addEventListener('submit', submitFormAdd);