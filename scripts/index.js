import {
  popupEditHead,
  popupAddCard,
  popupOpenButtonEditHead,
  popupOpenButtonAddCard,
  popupName,
  popupAbout,
  profileName,
  profileAboutMe,
  profileForm,
  cardForm,
  inputAddName,
  inputAddLink,
  popupsList,
} from "./constants.js";
import initialCards from "./cards.js";
import formValidationConfig from "./formValidationConfig.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

popupEditHead.addEventListener('submit', (event) => {
  event.preventDefault();
  profileName.textContent = popupName.value;
  profileAboutMe.textContent = popupAbout.value;
  closePopup(popupEditHead);
});

const submitFormAdd = (event) => {
  event.preventDefault();
  const cardsNameLink = { name: inputAddName.value, link: inputAddLink.value, };
  cardForm.reset();
  const card = new Card(cardsNameLink, '.template');
  const cardElement = card.generateCard(openPopup);
  // Добавляем в DOM
  document.querySelector('.cards').prepend(cardElement);
  closePopup(popupAddCard);
};

cardForm.addEventListener('submit', submitFormAdd);

popupOpenButtonEditHead.addEventListener('click', () => {
  const buttonSubmit = profileForm.querySelector(formValidationConfig.buttonSelector);
  buttonSubmit.disabled = true;
  buttonSubmit.classList.add('popup__button_disabled');
  popupName.value = profileName.textContent;
  popupAbout.value = profileAboutMe.textContent;
  openPopup(popupEditHead);
});

popupOpenButtonAddCard.addEventListener('click', () => {
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

popupsList.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
    if (evt.target.classList.contains('popup__close')) {
      closePopup(popup)
    };
  });
});

initialCards.forEach((item) => {
  const card = new Card(item, '.template');
  const cardElement = card.generateCard(openPopup);
  document.querySelector('.cards').prepend(cardElement);
});

const formValidatorEditHead = new FormValidator(formValidationConfig, profileForm);
formValidatorEditHead.enableValidation();
const formValidatorAddCard = new FormValidator(formValidationConfig, cardForm);
formValidatorAddCard.enableValidation();