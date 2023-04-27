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
  popupRemoveCard,
} from '../utils/elements.js';
import formValidationConfig from '../utils/formValidationConfig.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';
import Api from '../components/Api.js';

const api = new Api();

let userId;

const userInfo = new UserInfo({
  name: profileName,
  about: profileAbout,
  avatar: profileAvatar,
});

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([data, card]) => {
    // получаем свой id
    userId = data._id;
    // отображаем карточки полученные с сервера для профиля
    userInfo.setUserInfo(data);
    // отображаем карточки полученные с сервера для профиля
    cardsList.addCards(card);
  })
  .catch(err => console.log(err))

const openPopupEditHead = new PopupWithForm(popupEditHead,
  (formData) => {
    openPopupEditHead.renderLoading(true);
    api
      .changeUserInfo(formData)
      .then(data => {
        userInfo.setUserInfo(data)
        openPopupEditHead.close()
      })
      .catch(err => console.log(err))
      .finally(() => openPopupEditHead.renderLoading(false))
  })
openPopupEditHead.setEventListeners();

const openPopupEditAvatar = new PopupWithForm(popupEditAvatar,
  (formData) => {
    openPopupEditAvatar.renderLoading(true);
    api
      .changeUserAvatar(formData)
      .then(data => {
        userInfo.setUserAvatar(data._id)
        openPopupEditAvatar.close()
      })
      .catch(err => console.log(err))
      .finally(() => openPopupEditAvatar.renderLoading(false))
  });
openPopupEditAvatar.setEventListeners();

function handleOpenPopupEditHead() {
  api
    .getUserInfo()
    .then(data => {
      // popupName.value = data.name;
      // popupAbout.value = data.about;
    })
    .catch(err => console.log(err))
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

const openPopupRemoveCard = new PopupWithConfirmation(popupRemoveCard);
openPopupRemoveCard.setEventListeners();

// создание карточек
function generateCardToPage(data) {
  const card = new Card(
    data,
    '.template',
    handleOpenPopup,
    api,
    userId,
    {
      createLike: (cardId) => {
        api
          .addLike(cardId)
          .then((like) => {
            console.log(cardId)
            card.updateLikesView(like);
          })
          .catch(err => console.log(err));
      },

      deleteLike: (cardId) => {
        api
          .deleteLike(cardId)
          .then((like) => {
            card.updateLikesView(like);
          })
          .catch(err => console.log(err));
      },

      deleteCardForPage: () => {
        openPopupRemoveCard.open();
        openPopupRemoveCard.setSubmit(() => {
          openPopupRemoveCard.renderLoading(true);
          api
            .deleteCard(data._id)
            .then(() => {
              card.removeElement();
              openPopupRemoveCard.close();
            })
            .catch(err => console.log(err))
            .finally(() => openPopupRemoveCard.renderLoading(false))
        })
      }
    })

  return card.generateCard();
};
// создаем новые карточки
const cardsList = new Section(generateCardToPage, cardsContainerSelector);

const openPopupAddCard = new PopupWithForm(popupAddCard,
  (data) => {
    openPopupAddCard.renderLoading(true);
    api
      .addCard(data)
      .then(item => {
        cardsList.addItem(item);
        openPopupAddCard.close()
      })
      .catch(err => console.log(err))
      .finally(() => openPopupAddCard.renderLoading(false))
  })
openPopupAddCard.setEventListeners();

// валидация
const formValidatorEditHead = new FormValidator(formValidationConfig, profileForm);
formValidatorEditHead.enableValidation();

const formValidatorAddCard = new FormValidator(formValidationConfig, cardForm);
formValidatorAddCard.enableValidation();

const formValidatorEditAvatar = new FormValidator(formValidationConfig, profileFormAvatar);
formValidatorEditAvatar.enableValidation();