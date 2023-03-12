import initialCards from "./cards.js";

class Card {
  constructor(data, templateSelector) {
    this._title = data.title;
    this._description = data.description;
    this._price = data.price;
    this._image = data.image;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }


  
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.card__image').style.backgroundImage = `url(${this._image})`;
    this._element.querySelector('.card__title').textContent = this._title;
    this._element.querySelector('.card__info').textContent = this._description;
    this._element.querySelector('.card__price-property').textContent = this._price;
    
    return this._element;
  }
  
  _handleOpenPopup() {
    popupImage.src = this._image;
    popupElement.classList.add('popup_is-opened');
  }
  
  _handleClosePopup() {
    popupImage.src = '';
    popupElement.classList.remove('popup_is-opened');
  }
  
  _setEventListeners() {
  this._element.addEventListener('click', () => {
    this._handleOpenPopup();
  });
  popupCloseButton.addEventListener('click', () => {
    this._handleClosePopup();
  });
}
  
}

initialCards.forEach((data, '.template') => {
  const card = new Card(data.name, data.link);
  const cardElement = card.generateCard();

  // Добавляем в DOM
  document.querySelector('.card-list__items').prepend(cardElement);
});

export default Card;