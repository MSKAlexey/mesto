import './index.css';
import {
  profileName,
  profileAbout,
  popupEditHead,
  popupAddCard,
  popupOpenButtonEditHead,
  popupOpenButtonAddCard,
  profileForm,
  cardForm,
  popupImg,
  cardsContainer,
  popupName,
  popupAbout,
} from "../components/elements.js";
import initialCards from "../utils/cards.js";
import formValidationConfig from "../utils/formValidationConfig.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";

// редактирование профиля в заголовке
const userInfo = new UserInfo({ name: profileName, about: profileAbout });

const openPopupEditHead = new PopupWithForm(popupEditHead,
  (data) => {
    userInfo.setUserInfo(data);
  });

function handleOpenPopupEditHead() {
  const user = userInfo.getUserInfo();
  openPopupEditHead.open();
  popupName.value = user.title;
  popupAbout.value = user.about;
}

popupOpenButtonAddCard.addEventListener('click', () => {
  openPopupAddCard.open();
});

const popupWithImage = new PopupWithImage(popupImg);

function handleOpenPopup(name, link) {
  popupWithImage.open(name, link);
  popupWithImage.setEventListeners();
}

popupOpenButtonEditHead.addEventListener('click', handleOpenPopupEditHead);

// создание карточек
const openPopupAddCard = new PopupWithForm(popupAddCard,
  (data) => {
    cardsList.renderItem(data);
  })

function generateCardToPage(item) {
  const card = new Card(item, '.template', handleOpenPopup);
  return card.generateCard(popupWithImage);
};

const cardsList = new Section(generateCardToPage, cardsContainer);

cardsList.addCards(initialCards);

// валидация
const formValidatorEditHead = new FormValidator(formValidationConfig, profileForm);
formValidatorEditHead.enableValidation();

const formValidatorAddCard = new FormValidator(formValidationConfig, cardForm);
formValidatorAddCard.enableValidation();