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
  profileAvatar,
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

const userInfo = new UserInfo({
  name: profileName,
  about: profileAbout,
  avatar: profileAvatar,
});

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([user, card]) => {
    // получаем свой id
    userId = user._id;
    // отображаем карточки полученные с сервера для профиля
    userInfo.setUserInfo(user);
    // отображаем карточки полученные с сервера для профиля
    cardsList.addCards(card);
  })
  .catch((err) => console.log(err))


const openPopupEditHead = new PopupWithForm(popupEditHead,
  (formData) => {
    api
      .changeUserInfo(formData)
      .then(data => {
        userInfo.setUserInfo(data);
      })
      .catch((err) => console.log(err))
  });
openPopupEditHead.setEventListeners();

const openPopupEditAvatar = new PopupWithForm(popupEditAvatar,
  (formData) => {
    // console.log(formData.link)
    api
      .changeUserAvatar(formData)
      .then(data => {
        userInfo.setUserAvatar(data);
      })
      .catch(err => console.log(err))
  });
openPopupEditAvatar.setEventListeners();

function handleOpenPopupEditHead() {
  api
    .getUserInfo()
    .then(data => {
      popupName.value = data.name;
      popupAbout.value = data.about;
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


// создание карточек
function generateCardToPage(data) {
  const card = new Card(
    data,
    '.template',
    handleOpenPopup,
    api,
    () => {
      if (!card.isLiked()) {
        api
          .addLike(data._id)
          .then((data) => {
            card.updateData(data);
            card.updateLikesView();
          })
          .catch((err) => {
            console.log(err);
          })
      } else {
        api
          .deleteLike(data._id)
          .then((data) => {
            card.updateData(data);
            card.updateLikesView();
          })
          .catch((err) => {
            console.log(err);
          })
      }
    },
    userId,
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

// валидация
const formValidatorEditHead = new FormValidator(formValidationConfig, profileForm);
formValidatorEditHead.enableValidation();

const formValidatorAddCard = new FormValidator(formValidationConfig, cardForm);
formValidatorAddCard.enableValidation();

const formValidatorEditAvatar = new FormValidator(formValidationConfig, profileFormAvatar);
formValidatorEditAvatar.enableValidation();