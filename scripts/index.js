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
import Section from "./Section.js";
import Popup from "./Popup.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";
import FormValidator from "./FormValidator.js";

// редактирование профиля в заголовке
const userInfo = new UserInfo(profileName, profileAboutMe);
// console.log(userInfo)

// открытие/закрытие popup
const openPopupEditHead = new PopupWithForm(popupEditHead, (inputValues) => {
  userInfo.setUserInfo(inputValues);
  console.log(inputValues)
});
openPopupEditHead.setEventListeners();

const openPopupAddCard = new PopupWithForm(popupAddCard, ({ titleInput, linkInput }) => {
  cardsContainer.prepend(generateCardToPage({ cardsNameLink }));
});

openPopupAddCard.setEventListeners()

const openPopupImg = new PopupWithImage(popupImg);

popupOpenButtonEditHead.addEventListener('click', () => {
  formValidatorEditHead.disabledbuttonSubmit();
  openPopupEditHead.open();
});

popupOpenButtonAddCard.addEventListener('click', () => {
  openPopupAddCard.open();
});

// создание карточек
function generateCardToPage(item) {
  const card = new Card(item, '.template');
  return card.generateCard(openPopupImg);
};

const addCard = new Section(
  generateCardToPage,
  cardsContainer);
addCard.renderItem(initialCards);

// валидация
const formValidatorEditHead = new FormValidator(formValidationConfig, profileForm);
formValidatorEditHead.enableValidation();

const formValidatorAddCard = new FormValidator(formValidationConfig, cardForm);
formValidatorAddCard.enableValidation();