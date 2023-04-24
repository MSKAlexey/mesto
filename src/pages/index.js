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

let userId;

// редактирование профиля в заголовке
const userInfo = new UserInfo({ name: profileName, about: profileAbout });

const openPopupEditHead = new PopupWithForm(popupEditHead,
  (userData) => {
    api
      .changeUserInfo(userData)
      .then(data => {
        userInfo.setUserInfo(data);
      })
      .catch(err => console.log(err));
  });

// console.log(api.getUserInfo())
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
function generateCardToPage(data) {
  const card = new Card(
    data,
    '.template',
    handleOpenPopup,
    api,
  )

  return card.generateCard();
};
// создаем новые карточки
const cardsList = new Section(generateCardToPage, cardsContainerSelector);

const openPopupAddCard = new PopupWithForm(popupAddCard,
  (data) => {
    api
      .addCard(data)
      .then(item => {
        cardsList.addItem(item);
      })
  })

openPopupAddCard.setEventListeners();

// отображаем карточки полученные с сервера
const initialCards = api.getInitialCards();

initialCards.then(data => {
  cardsList.addCards(data);
})
  .catch(err => console.log(err));

// валидация
const formValidatorEditHead = new FormValidator(formValidationConfig, profileForm);
formValidatorEditHead.enableValidation();
const formValidatorAddCard = new FormValidator(formValidationConfig, cardForm);
formValidatorAddCard.enableValidation();