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
  cardsContainer,
} from "./constants.js";
import initialCards from "./cards.js";
import formValidationConfig from "./formValidationConfig.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

// редактирование профиля в заголовке
popupEditHead.addEventListener('submit', (event) => {
  event.preventDefault();
  profileName.textContent = popupName.value;
  profileAboutMe.textContent = popupAbout.value;
  closePopup(popupEditHead);
});

popupOpenButtonEditHead.addEventListener('click', () => {
  formValidatorEditHead.disabledbuttonSubmit();
  popupName.value = profileName.textContent;
  popupAbout.value = profileAboutMe.textContent;
  openPopup(popupEditHead);
});

// открытие/закрытие popup
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEscape);
};

popupOpenButtonAddCard.addEventListener('click', () => {
  openPopup(popupAddCard);
});

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

// создание карточек
const generateCardToPage = (item) => {
  const card = new Card(item, '.template');
  return card.generateCard(openPopup);
};

initialCards.forEach((item) => {
  cardsContainer.prepend(generateCardToPage(item));
});

const submitFormAdd = (event) => {
  event.preventDefault();
  const cardsNameLink = { name: inputAddName.value, link: inputAddLink.value, };
  cardForm.reset();
  cardsContainer.prepend(generateCardToPage(cardsNameLink));
  closePopup(popupAddCard);
};

cardForm.addEventListener('submit', submitFormAdd);

// валидация
const formValidatorEditHead = new FormValidator(formValidationConfig, profileForm);
formValidatorEditHead.enableValidation();

const formValidatorAddCard = new FormValidator(formValidationConfig, cardForm);
formValidatorAddCard.enableValidation();