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
  inputName,
  inputAbout,
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
    userId = data._id;
    userInfo.setUserInfo(data);
    cardsList.addCards(card);
  })
  .catch(err => console.log(err))

const openPopupEditHead = new PopupWithForm(popupEditHead,
  (formData) => {
    return api
      .changeUserInfo(formData)
      .then(data => {
        userInfo.setUserInfo(data)
      })
      .catch(err => console.log(err))
  })
openPopupEditHead.setEventListeners();

const openPopupEditAvatar = new PopupWithForm(popupEditAvatar,
  (formData) => {
    return api
      .changeUserAvatar(formData)
      .then(data => {
        userInfo.setUserAvatar(data)
      })
      .catch(err => console.log(err))
  });
openPopupEditAvatar.setEventListeners();

function handleOpenPopupEditHead() {
  const user = userInfo.getUserInfo();
  inputName.value = user.name;
  inputAbout.value = user.about;
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

  return card.generateCard()

}
// создаем новые карточки
const cardsList = new Section(generateCardToPage, cardsContainerSelector);

const openPopupAddCard = new PopupWithForm(popupAddCard,
  (data) => {
    return api
      .addCard(data)
      .then(item => {
        cardsList.addItem(item);
      })
      .catch(err => console.log(err))
  })
openPopupAddCard.setEventListeners();

// валидация
const formValidatorEditHead = new FormValidator(formValidationConfig, profileForm);
formValidatorEditHead.enableValidation();

const formValidatorAddCard = new FormValidator(formValidationConfig, cardForm);
formValidatorAddCard.enableValidation();

const formValidatorEditAvatar = new FormValidator(formValidationConfig, profileFormAvatar);
formValidatorEditAvatar.enableValidation();