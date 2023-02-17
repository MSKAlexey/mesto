// popup
const popupEditHead = document.querySelector('.popup_edit');
const popupAddCard = document.querySelector('.popup_add');
const popupImg = document.querySelector('.popup_img');
// popup button close
const popupCloseButtonEdit = popupEditHead.querySelector('.popup__close');
const popupCloseButtonAdd = popupAddCard.querySelector('.popup__close');
const popupCloseButtonImg = popupImg.querySelector('.popup__close');
// popup button open
const popupOpenButtonEdit = document.querySelector('.profile__popup-open');
const popupOpenButtonAdd = document.querySelector('.profile__vector');
// popup button save
const popupName = popupEditHead.querySelector('.popup__form_input_name');
const popupAbout = popupEditHead.querySelector('.popup__form_input_about');
const profileName = document.querySelector('.profile__title');
const profileAboutMe = document.querySelector('.profile__subtitle');
const popupLink = popupAddCard.querySelector('.popup__form_input_link');
// открытие popup
/* const openPopupEditHead = () => {
    popupEditHead.classList.add('popup_opened');
    popupName.value = profileName.textContent;
    popupAbout.value = profileAboutMe.textContent;
}
const openPopupAddCard = () => {
    popupAddCard.classList.add('popup_opened');
}
// закрытие popup
const closePopupEditHead = () => {
    popupEditHead.classList.remove('popup_opened');
}
const closePopupAddCard = () => {
    popupAddCard.classList.remove('popup_opened');
}
const closePopupImg = () => {
    popupImg.classList.remove('popup_opened');
} */
const openPopup = () => {
    popup.target.classList.add('.popup_opened');
}
const closePopup = () => {
    popup.classList.remove('popup_opened');
}
// слушаем событие
popupOpenButtonEdit.addEventListener('click', openPopupEditHead);
popupCloseButtonEdit.addEventListener('click', closePopupEditHead);
popupOpenButtonAdd.addEventListener('click', openPopupAddCard);
popupCloseButtonAdd.addEventListener('click', closePopupAddCard);
popupCloseButtonImg.addEventListener('click', closePopupImg);
// закрытие popup при нажатие вне формы
const closePopupEditHeadByClickOnOverlay = (event) => {
    if (event.target !== event.currentTarget) {
        return;
    }
    closePopupEditHead();
}
const closePopupAddCardByClickOnOverlay = (event) => {
    if (event.target !== event.currentTarget) {
        return;
    }
    closePopupAddCard();
}
const closePopupImgByClickOnOverlay = (event) => {
    if (event.target !== event.currentTarget) {
        return;
    }
    closePopupImg();
}
// слушаем событие нажатия вне формы и закрываем popup если оно есть
popupEditHead.addEventListener('click', closePopupEditHeadByClickOnOverlay);
popupAddCard.addEventListener('click', closePopupAddCardByClickOnOverlay);
popupImg.addEventListener('click', closePopupImgByClickOnOverlay);
edit.addEventListener('submit', (event) => {
    event.preventDefault();
    profileName.textContent = popupName.value;
    profileAboutMe.textContent = popupAbout.value;
    closePopupEditHead();
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
// выбираем ul в который будем вставлять template
const cards = document.querySelector('.cards');
// выбираем template шаблон
const template = document.querySelector('.template')
    .content
    .querySelector('.cards__item');
// создаем карточки по шаблону
const createCards = (cardsNameLink) => {
    const card = template.cloneNode(true);
    card.querySelector('.cards__title').textContent = cardsNameLink.name;
    card.querySelector('.cards__image').src = cardsNameLink.link;
    card.querySelector('.cards__image').alt = cardsNameLink.name;

    const popupImage = popupImg.querySelector('.popup__image');
    const popupName = popupImg.querySelector('.popup__name');
    const popupOpenButtonImg = card.querySelector('.cards__image');
    const openPopupImg = popupOpenButtonImg.addEventListener('click', () => {
        popupImg.classList.add('popup_opened');
        popupImage.src = popupOpenButtonImg.src;
        popupName.textContent = cardsNameLink.name;
    });

    const likeBtn = card.querySelector('.cards__icon');
    likeBtn.addEventListener('click', (event) => {
        event.target.classList.toggle('cards__icon_active');
    })

    const deleBtn = card.querySelector('.cards__trash');
    deleBtn.addEventListener('click', () => {
        card.remove();
    })
    return card;
};
// размещаем созданные карточки на странице
const renderCards = (cardsNameLink) => {
    cards.append(createCards(cardsNameLink));
};
// делаем обход массива
initialCards.forEach((elm) => {
    renderCards(elm);
});
// выбираем форму для обработки события
const formAdd = popupAddCard.querySelector('.form_add');
const inputAddName = formAdd.querySelector('.popup__form_input_title');
const inputAddLink = formAdd.querySelector('.popup__form_input_link');
const renderNewCards = (inputAddName, inputAddLink) => {
    cards.prepend(createNewCards(inputAddName, inputAddLink));
};
const submitFormAdd = (event) => {
    event.preventDefault();
    const cardAddName = inputAddName.value;
    const cardAddLink = inputAddLink.value;
    renderNewCards(cardAddName, cardAddLink);
    inputAddName.value = '';
    inputAddLink.value = '';
    closePopupAddCard();
};
const createNewCards = (cardAddName, cardAddLink) => {
    const card = template.cloneNode(true);
    card.querySelector('.cards__title').textContent = cardAddName;
    card.querySelector('.cards__image').src = cardAddLink;
    card.querySelector('.cards__image').alt = cardAddName;

    const popupImage = popupImg.querySelector('.popup__image');
    const popupName = popupImg.querySelector('.popup__name');
    const popupOpenButtonImg = card.querySelector('.cards__image');
    const openPopupImg = popupOpenButtonImg.addEventListener('click', () => {
        popupImg.classList.add('popup_opened');
        popupImage.src = popupOpenButtonImg.src;
        popupName.textContent = cardAddName;
    });

    const likeBtn = card.querySelector('.cards__icon');
    likeBtn.addEventListener('click', (event) => {
        event.target.classList.toggle('cards__icon_active');

    })
    const deleBtn = card.querySelector('.cards__trash');
    deleBtn.addEventListener('click', () => {
        card.remove();
    })

    return card;
};
// вешаем обработчик события на форму
formAdd.addEventListener('submit', submitFormAdd);