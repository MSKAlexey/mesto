import {
  popupImage,
  popupImg,
  popupImgName
} from "./constants.js";
class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._element = this._getTemplate();
    this._cardsImage = this._element.querySelector('.cards__image');
    this._cardsTitle = this._element.querySelector('.cards__title');
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.cards__item')
      .cloneNode(true);
    return cardElement;
  }

  generateCard(popup) {
    this._setEventListeners();
    this._cardsImage.src = this._link;
    this._cardsImage.alt = this._name;
    this._cardsTitle.textContent = this._name;

    this._cardsImage.addEventListener('click', () => {
      popup.open(popupImg);
      popupImage.src = this._link;
      popupImgName.textContent = this._name;
      popupImage.alt = this._name;
    });
    return this._element;
  }

  removeElement() {
    this._element.remove();
  }

  toggleLikeButton(event) {
    event.target.classList.toggle('cards__icon_active');
  }

  _setEventListeners() {
    this._element.querySelector('.cards__trash').addEventListener('click', () => {
      this.removeElement();
    });
    this._element.querySelector('.cards__icon').addEventListener('click', (event) => {
      this.toggleLikeButton(event);
    });
  }
}

export default Card;