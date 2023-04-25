export default class Card {
  constructor(
    data,
    templateSelector,
    handleOpenPopup,
    api,
  ) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._element = this._getTemplate();
    this._cardsImage = this._element.querySelector('.cards__image');
    this._cardsTitle = this._element.querySelector('.cards__title');
    this._handleOpenPopup = handleOpenPopup;
    this._id = data._id;
    this._api = api;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.cards__item')
      .cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._setEventListeners();
    this._cardsImage.src = this._link;
    this._cardsImage.alt = this._name;
    this._cardsTitle.textContent = this._name;
    return this._element;
  }

  removeElement() {
    this._api.deleteCard(this._id)
      .then(() => {
        this._element.remove();
      })
      .catch(err => console.log(err));
  }

  _toggleLikeButton(event) {
    event.target.classList.toggle('cards__icon_active');
  }

  _setEventListeners() {

    this._cardsImage.addEventListener('click', () => {
      this._handleOpenPopup(this._name, this._link);
    });

    this._element.querySelector('.cards__trash').addEventListener('click', () => {
      this.removeElement();
    });

    this._element.querySelector('.cards__icon').addEventListener('click', (event) => {
      this._toggleLikeButton(event);
    });

  }

}