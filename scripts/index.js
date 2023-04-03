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
  popupImg,
  cardsContainer,
} from "./constants.js";
import initialCards from "./cards.js";
import formValidationConfig from "./formValidationConfig.js";
import Card from "./Card.js";
import Popup from "./Popup.js";
import FormValidator from "./FormValidator.js";

// редактирование профиля в заголовке
popupEditHead.addEventListener('submit', (event) => {
  event.preventDefault();
  profileName.textContent = popupName.value;
  profileAboutMe.textContent = popupAbout.value;
  openPopupEditHead.close();
});

popupOpenButtonEditHead.addEventListener('click', () => {
  formValidatorEditHead.disabledbuttonSubmit();
  popupName.value = profileName.textContent;
  popupAbout.value = profileAboutMe.textContent;
  openPopupEditHead.open();
});

// открытие/закрытие popup

const openPopupEditHead = new Popup(popupEditHead);
const openPopupAddCard = new Popup(popupAddCard);
const openPopupImg = new Popup(popupImg);


popupOpenButtonAddCard.addEventListener('click', () => {
  openPopupAddCard.open();
});

// создание карточек
const generateCardToPage = (item) => {
  const card = new Card(item, '.template');
  return card.generateCard(openPopupImg);
};

initialCards.forEach((item) => {
  cardsContainer.prepend(generateCardToPage(item));
});

const submitFormAdd = (event) => {
  event.preventDefault();
  const cardsNameLink = { name: inputAddName.value, link: inputAddLink.value, };
  cardForm.reset();
  cardsContainer.prepend(generateCardToPage(cardsNameLink));
  openPopupAddCard.close();
};

cardForm.addEventListener('submit', submitFormAdd);

// валидация
const formValidatorEditHead = new FormValidator(formValidationConfig, profileForm);
formValidatorEditHead.enableValidation();

const formValidatorAddCard = new FormValidator(formValidationConfig, cardForm);
formValidatorAddCard.enableValidation();