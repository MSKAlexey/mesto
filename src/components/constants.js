export const popupImage = document.querySelector('.popup__image');
export const popupImg = document.querySelector('.popup_img');
export const popupImgName = popupImg.querySelector('.popup__name');

export const popupOpenButtonEditHead = document.querySelector('.profile__popup-open');
export const popupOpenButtonAddCard = document.querySelector('.profile__vector');

export const profileName = document.querySelector('.profile__title');
export const profileAboutMe = document.querySelector('.profile__subtitle');

// selector cards
export const cardsContainer = document.querySelector('.cards');
// all popup
export const popupsList = Array.from(document.querySelectorAll('.popup'));
// selector popup
export const popupEditHead = document.querySelector('.popup_edit');
export const popupAddCard = document.querySelector('.popup_add');
// selector form
export const profileForm = document.forms.edit;
export const cardForm = document.forms.add;
// inputs form editProfile
export const popupName = popupEditHead.querySelector('.popup__input_type_name');
export const popupAbout = popupEditHead.querySelector('.popup__input_type_about');
// inputs form addCard
export const inputAddName = cardForm.querySelector('.popup__input_type_title');
export const inputAddLink = cardForm.querySelector('.popup__input_type_link');