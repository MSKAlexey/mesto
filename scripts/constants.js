export const popupImage = document.querySelector('.popup__image');
export const popupImg = document.querySelector('.popup_img');
export const popupImgName = popupImg.querySelector('.popup__name');

export const popupEditHead = document.querySelector('.popup_edit');
export const popupAddCard = document.querySelector('.popup_add');
export const popupOpenButtonEditHead = document.querySelector('.profile__popup-open');
export const popupOpenButtonAddCard = document.querySelector('.profile__vector');
export const popupName = popupEditHead.querySelector('.popup__input_type_name');
export const popupAbout = popupEditHead.querySelector('.popup__input_type_about');
export const profileName = document.querySelector('.profile__title');
export const profileAboutMe = document.querySelector('.profile__subtitle');
export const profileForm = document.forms.edit;
export const cardForm = document.forms.add;
export const inputAddName = cardForm.querySelector('.popup__input_type_title');
export const inputAddLink = cardForm.querySelector('.popup__input_type_link');
export const popupsList = Array.from(document.querySelectorAll('.popup'));
export const cardsContainer = document.querySelector('.cards');