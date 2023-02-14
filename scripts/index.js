// popup
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const popupImg = document.querySelector('.popup_img');
// popup button close
const popupCloseButtonEdit = popupEdit.querySelector('.popup__close');
const popupCloseButtonAdd = popupAdd.querySelector('.popup__close');
const popupCloseButtonImg = popupImg.querySelector('.popup__close');
// popup button open
const popupOpenButtonEdit = document.querySelector('.profile__popup-open');
const popupOpenButtonAdd = document.querySelector('.profile__vector');
// popup button save
const saveBtn = document.querySelector('.popup__button-save');
const popupName = popupEdit.querySelector('.popup__form_input_name');
const popupAbout = popupEdit.querySelector('.popup__form_input_about');
const profileName = document.querySelector('.profile__title');
const profileAboutMe = document.querySelector('.profile__subtitle');
const popupLink = popupAdd.querySelector('.popup__form_input_link');
// открытие popup
const openPopupEdit = () => {
    popupEdit.classList.add('popup_opened');
    popupName.value = profileName.textContent;
    popupAbout.value = profileAboutMe.textContent;
}
const openPopupAdd = () => {
    popupAdd.classList.add('popup_opened');
}
// закрытие popup
const closePopupEdit = () => {
    popupEdit.classList.remove('popup_opened');
}
const closePopupAdd = () => {
    popupAdd.classList.remove('popup_opened');
}
const closePopupImg = () => {
    popupImg.classList.remove('popup_opened');
}
// слушаем событие
popupOpenButtonEdit.addEventListener('click', openPopupEdit);
popupCloseButtonEdit.addEventListener('click', closePopupEdit);
popupOpenButtonAdd.addEventListener('click', openPopupAdd);
popupCloseButtonAdd.addEventListener('click', closePopupAdd);
popupCloseButtonImg.addEventListener('click', closePopupImg);
// закрытие popup при нажатие вне формы
const closePopupEditByClickOnOverlay = (event) => {
    if (event.target !== event.currentTarget) {
        return;
    }
    closePopupEdit();
}
const closePopupAddByClickOnOverlay = (event) => {
    if (event.target !== event.currentTarget) {
        return;
    }
    closePopupAdd();
}
const closePopupImgByClickOnOverlay = (event) => {
    if (event.target !== event.currentTarget) {
        return;
    }
    closePopupImg();
}
// слушаем событие нажатия вне формы и закрываем popup если оно есть
popupEdit.addEventListener('click', closePopupEditByClickOnOverlay);
popupAdd.addEventListener('click', closePopupAddByClickOnOverlay);
popupImg.addEventListener('click', closePopupImgByClickOnOverlay);
edit.addEventListener('submit', (event) => {
    event.preventDefault();
    profileName.textContent = popupName.value;
    profileAboutMe.textContent = popupAbout.value;
    closePopupEdit();
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
    const popupOpenButtonImg = card.querySelector('.cards__image');
    const openPopupImg = popupOpenButtonImg.addEventListener('click', () => {
        popupImg.classList.add('popup_opened');
        popupImage.src = popupOpenButtonImg.src;
    });


    const likeBtn = card.querySelector('.cards__icon');
    likeBtn.addEventListener('click', () => {
        popupImg.target.classList.toggle('cards__icon_active');
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
const formAdd = popupAdd.querySelector('.form_add');
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
    closePopupAdd();
};
const createNewCards = (cardAddName, cardAddLink) => {
    const card = template.cloneNode(true);
    card.querySelector('.cards__title').textContent = cardAddName;
    card.querySelector('.cards__image').src = cardAddLink;
    card.querySelector('.cards__image').alt = cardAddName;

    const popupOpenButtonImg = card.querySelector('.cards__image');
    const openPopupImg = () => {
        card.classList.toggle('popup_opened');
    }

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