import {
  popupEditHead,
  popupOpenButtonEditHead,
  popupOpenButtonAddCard,
  profileName,
  profileAboutMe,
  profileForm,
  cardForm,
  popupImg,
  cardsContainer,
  popupName,
  popupAbout,
  popupAddCard,
} from "./constants.js";
import initialCards from "./cards.js";
import formValidationConfig from "./formValidationConfig.js";
import Card from "./Card.js";
import Section from "./Section.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";
import FormValidator from "./FormValidator.js";

// редактирование профиля в заголовке
const userInfo = new UserInfo(profileName, profileAboutMe);

const openPopupEditHead = new PopupWithForm(popupEditHead,
  (data) => {
    userInfo.setUserInfo(data);
  });

function handleOpenPopupEditHead() {
  const user = userInfo.getUserInfo();
  popupName.value = user.title;
  popupAbout.value = user.about;
  openPopupEditHead.open();
}

const popupWithImage = new PopupWithImage(popupImg);

popupOpenButtonEditHead.addEventListener('click', () => {
  formValidatorEditHead.disabledbuttonSubmit();
  handleOpenPopupEditHead();
});

// создание карточек
const openPopupAddCard = new PopupWithForm(popupAddCard,
  (data) => {
    addCards.addItem(data);
    cardForm.reset();
  })

popupOpenButtonAddCard.addEventListener('click', () => {
  const buttonSubmit = cardForm.querySelector(formValidationConfig.buttonSelector);
  buttonSubmit.disabled = true;
  buttonSubmit.classList.add('popup__button_disabled');
  openPopupAddCard.open();
});

function generateCardToPage(item) {
  const card = new Card(item, '.template');
  return card.generateCard(popupWithImage);
};

const addCards = new Section(generateCardToPage, cardsContainer);

addCards.addCards(initialCards);

// валидация
const formValidatorEditHead = new FormValidator(formValidationConfig, profileForm);
formValidatorEditHead.enableValidation();

const formValidatorAddCard = new FormValidator(formValidationConfig, cardForm);
formValidatorAddCard.enableValidation();