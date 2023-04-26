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
  popupOpenButtonEditAvatar,
  popupEditAvatar,
  profileFormAvatar,
} from "../utils/elements.js";
import formValidationConfig from "../utils/formValidationConfig.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import Api from "../components/Api.js";

// console.log(profileFormAvatar)

const api = new Api();

const userInfo = new UserInfo({
  name: profileName,
  about: profileAbout
});

const openPopupEditHead = new PopupWithForm(popupEditHead,
  (formData) => {
    // popupEditHead.renderLoading(true);
    api
      .changeUserInfo(formData)
      .then((data) => {
        userInfo.setUserInfo(data);
      })
      .catch((err) => console.log(err))
    // .finally(() => popupEditHead.renderLoading(false));
  });

openPopupEditHead.setEventListeners();

function handleOpenPopupEditHead() {
  api
    .getUserInfo()
    .then(data => {
      const user = userInfo.getUserInfo(data);
      popupName.value = user.title;
      popupAbout.value = user.about;
    })

  openPopupEditHead.open();
}

const popupWithImage = new PopupWithImage(popupImg);
popupWithImage.setEventListeners();

function handleOpenPopup(name, link) {
  popupWithImage.open(name, link);
}

popupOpenButtonEditHead.addEventListener('click', handleOpenPopupEditHead);

popupOpenButtonEditAvatar.addEventListener('click', () => {
  openPopupEditAvatar.open();
})

popupOpenButtonAddCard.addEventListener('click', () => {
  openPopupAddCard.open();
});

const openPopupEditAvatar = new PopupWithForm(popupEditAvatar,)
openPopupEditAvatar.setEventListeners();

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

// валидация
const formValidatorEditHead = new FormValidator(formValidationConfig, profileForm);
formValidatorEditHead.enableValidation();

const formValidatorAddCard = new FormValidator(formValidationConfig, cardForm);
formValidatorAddCard.enableValidation();

const formValidatorEditAvatar = new FormValidator(formValidationConfig, profileFormAvatar);
formValidatorEditAvatar.enableValidation();