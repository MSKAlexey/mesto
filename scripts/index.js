const popup = document.querySelector('.popup');
const popupEditHead = document.querySelector('.popup_edit');
const popupAddCard = document.querySelector('.popup_add');
const popupImg = document.querySelector('.popup_img');
const popupOpenButtonEditHead = document.querySelector('.profile__popup-open');
const popupOpenButtonAddCard = document.querySelector('.profile__vector');
const popupCloseButtonList = Array.from(document.querySelectorAll('.popup__close'));
const popupName = popupEditHead.querySelector('.popup__input_type_name');
const popupAbout = popupEditHead.querySelector('.popup__input_type_about');
const profileName = document.querySelector('.profile__title');
const profileAboutMe = document.querySelector('.profile__subtitle');
const popupLink = popupAddCard.querySelector('.popup__input_type_link');
const popupImage = popupImg.querySelector('.popup__image');
const popupImgName = popupImg.querySelector('.popup__name');
// выбираем ul в который будем вставлять template
const cardsContainer = document.querySelector('.cards');
// выбираем template шаблон
const template = document.querySelector('.template')
    .content
    .querySelector('.cards__item');
const formAdd = popupAddCard.querySelector('.form_add');
const inputAddName = formAdd.querySelector('.popup__input_type_title');
const inputAddLink = formAdd.querySelector('.popup__input_type_link');
popupCloseButtonList.forEach((closeButton) => {
    closeButton.addEventListener('click', (event) => {
        const popup = event.target.closest('.popup');
        closePopup(popup);
    });
});
const closePopupByClickOnOverlay = (event) => {
    if (event.target !== event.currentTarget) {
        return;
    }
    closePopup(document.querySelector('.popup_opened'));
}
popupEditHead.addEventListener('click', closePopupByClickOnOverlay);
popupAddCard.addEventListener('click', closePopupByClickOnOverlay);
popupImg.addEventListener('click', closePopupByClickOnOverlay);
form.addEventListener('submit', (event) => {
    event.preventDefault();
    profileName.textContent = popupName.value;
    profileAboutMe.textContent = popupAbout.value;
    closePopup(popupEditHead);
});
const createCard = (cardsNameLink) => {
    const card = template.cloneNode(true);
    const popupOpenButtonImg = card.querySelector('.cards__image');
    card.querySelector('.cards__title').textContent = cardsNameLink.name;
    popupOpenButtonImg.src = cardsNameLink.link;
    popupOpenButtonImg.alt = cardsNameLink.name;
    popupOpenButtonImg.addEventListener('click', () => {
        openPopup(popupImg);
        popupImage.src = popupOpenButtonImg.src;
        popupImgName.textContent = cardsNameLink.name;
        popupImage.alt = cardsNameLink.name;
    });
    const likeBtn = card.querySelector('.cards__icon');
    likeBtn.addEventListener('click', (event) => {
        event.target.classList.toggle('cards__icon_active');
    });
    const trashButtonDelete = card.querySelector('.cards__trash');
    trashButtonDelete.addEventListener('click', () => {
        card.remove();
    });
    return card;
};
const renderCards = (cardsNameLink) => {
    cardsContainer.prepend(createCard(cardsNameLink));
};
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
popupOpenButtonEditHead.addEventListener('click', () => {
    const buttonSubmit = form.querySelector(formValidationConfig.buttonSelector);
    buttonSubmit.disabled = true;
    buttonSubmit.classList.add('popup__button_disabled');
    popupName.value = profileName.textContent;
    popupAbout.value = profileAboutMe.textContent;
    openPopup(popupEditHead);
});

popupOpenButtonAddCard.addEventListener('click', () => {
    const buttonSubmit = form.querySelector(formValidationConfig.buttonSelector);
    buttonSubmit.disabled = true;
    buttonSubmit.classList.add('popup__button_disabled');
    openPopup(popupAddCard);
});
// открытие/закрытие popup
const openPopup = (popup) => {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupByEscape);
};
const closePopup = (popup) => {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupByEscape);
};
const closePopupByEscape = (event) => {
    if (event.key === 'Escape') {
        closePopup(document.querySelector('.popup_opened'));
    };
};