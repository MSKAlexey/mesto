export default class Card {
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
    this._setEventListeners(popup);
    this._cardsImage.src = this._link;
    this._cardsImage.alt = this._name;
    this._cardsTitle.textContent = this._name;
    return this._element;
  }

  _removeElement() {
    this._element.remove();
  }

  _toggleLikeButton(event) {
    event.target.classList.toggle('cards__icon_active');
  }

  _setEventListeners(popup) {
    this._cardsImage.addEventListener('click', () => {
      popup.open(this._name, this._link);
    });
    this._element.querySelector('.cards__trash').addEventListener('click', () => {
      this._removeElement();
    });
    this._element.querySelector('.cards__icon').addEventListener('click', (event) => {
      this._toggleLikeButton(event);
    });
  }
}