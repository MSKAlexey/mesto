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
  cardsContainerSelector,
  popupName,
  popupAbout,
} from "../utils/elements.js";
// import initialCards from "../utils/cards.js";
import formValidationConfig from "../utils/formValidationConfig.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import Api from "../components/Api.js";


// console.log(initialCards)

// редактирование профиля в заголовке
const userInfo = new UserInfo({ name: profileName, about: profileAbout });

const openPopupEditHead = new PopupWithForm(popupEditHead,
  (data) => {
    userInfo.setUserInfo(data);
  });
openPopupEditHead.setEventListeners();

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
popupWithImage.setEventListeners();

function handleOpenPopup(name, link) {
  popupWithImage.open(name, link);
}

popupOpenButtonEditHead.addEventListener('click', handleOpenPopupEditHead);

// создание карточек
const openPopupAddCard = new PopupWithForm(popupAddCard,
  (data) => {
    cardsList.renderItem(data);
  });
openPopupAddCard.setEventListeners();

function generateCardToPage(item) {
  const card = new Card(item, '.template', handleOpenPopup);
  return card.generateCard(popupWithImage);
};
const cardsList = new Section(generateCardToPage, cardsContainerSelector);
// отображаем карточки полученные с сервера
const api = new Api();
const initialCards = api.getInitialCards();
initialCards.then(data => {
  cardsList.addCards(data);
console.log(data)
})
// валидация
const formValidatorEditHead = new FormValidator(formValidationConfig, profileForm);
formValidatorEditHead.enableValidation();

const formValidatorAddCard = new FormValidator(formValidationConfig, cardForm);
formValidatorAddCard.enableValidation();