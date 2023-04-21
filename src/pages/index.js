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
import formValidationConfig from "../utils/formValidationConfig.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import Api from "../components/Api.js";

const api = new Api();

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
const cardsList = new Section(generateCardToPage, cardsContainerSelector);

const openPopupAddCard = new PopupWithForm(popupAddCard,
  (data) => {
    api
      .addItem(data)
      .then((item) => {
        cardsList.renderItem(item);
      })
      .catch((err) => console.log(err))
      // .finally(() => popupAdd.renderLoading(false));
  });

openPopupAddCard.setEventListeners();

function generateCardToPage(item) {
  const card = new Card(item, '.template', handleOpenPopup);
  return card.generateCard(popupWithImage);
};
// отображаем карточки полученные с сервера
const initialCards = api.getInitialCards();
initialCards.then(data => {
  cardsList.addCards(data);
})
  .catch(err => alert(err)) // выводим ошибку в самом конце then цепочки
// валидация
const formValidatorEditHead = new FormValidator(formValidationConfig, profileForm);
formValidatorEditHead.enableValidation();
const formValidatorAddCard = new FormValidator(formValidationConfig, cardForm);
formValidatorAddCard.enableValidation();