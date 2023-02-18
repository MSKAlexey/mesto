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
// выбираем ul в который будем вставлять template
const cardsContainer = document.querySelector('.cards');
// выбираем template шаблон
const template = document.querySelector('.template')
    .content
    .querySelector('.cards__item');

const formAdd = popupAddCard.querySelector('.form_add');
const inputAddName = formAdd.querySelector('.popup__form_input_title');
const inputAddLink = formAdd.querySelector('.popup__form_input_link');
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

// создаем карточки по шаблону
const createCard = (cardsNameLink) => {
    const card = template.cloneNode(true);
    const popupOpenButtonImg = card.querySelector('.cards__image');
    card.querySelector('.cards__title').textContent = cardsNameLink.name;
    popupOpenButtonImg.src = cardsNameLink.link;
    popupOpenButtonImg.alt = cardsNameLink.name;

    const popupImage = popupImg.querySelector('.popup__image');
    const popupName = popupImg.querySelector('.popup__name');

    popupOpenButtonImg.addEventListener('click', () => {
        popupImg.classList.add('popup_opened');
        popupImage.src = popupOpenButtonImg.src;
        popupName.textContent = cardsNameLink.name;
        popupImage.alt = cardsNameLink.name;
    });

    const likeBtn = card.querySelector('.cards__icon');
    likeBtn.addEventListener('click', (event) => {
        event.target.classList.toggle('cards__icon_active');
    })

    const trashButtonDelete = card.querySelector('.cards__trash');
    trashButtonDelete.addEventListener('click', () => {
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

const submitFormAdd = (event) => {
    event.preventDefault();
    const cardsNameLink = { name: inputAddName.value, link: inputAddLink.value, };
    renderCards(cardsNameLink);
    inputAddName.value = '';
    inputAddLink.value = '';
    closePopup(popupAddCard);
};

formAdd.addEventListener('submit', submitFormAdd);