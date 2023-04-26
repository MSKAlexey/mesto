export default class Card {
  constructor(
    data,
    templateSelector,
    handleOpenPopup,
    api,
    handleLikeClick,
    userId,
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
    this._handleLikeClick = handleLikeClick;
    this._likes = data.likes;
    this._userId = userId;
    this._numberLikeClick = this._element.querySelector('.cards__count');
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
    this._numberLikeClick.textContent = this._likes.length;
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

    this._element.querySelector('.cards__icon').addEventListener('click', () => this._handleLikeClick(data));

  }

  updateData(newData) {
    this._likes = newData.likes;
  }

  updateLikesView() {
    this._numberLikeClick.textContent = this._likes.length;
    if (this.isLiked()) {
      this._like.classList.add('card__button-like_active');
    } else {
      this._like.classList.remove('card__button-like_active');
    }
  }

  isLiked() {
    return this._likes.some((item) => item._id === this._userId);
  }

}