export default class Card {
  constructor(
    data,
    templateSelector,
    handleOpenPopup,
    api,
    userId,
    handleLikeClick,
  ) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._element = this._getTemplate();

    this._handleOpenPopup = handleOpenPopup;

    this._api = api;
    this._cardId = data._id;
    this._userId = userId;
    this._ownerId = data.owner._id;

    this._likes = data.likes;

    this._cardsImage = this._element.querySelector('.cards__image');
    this._cardsTitle = this._element.querySelector('.cards__title');
    this._numberLikeClick = this._element.querySelector('.cards__count');
    this._likeItem = this._element.querySelector('.cards__icon');
    this._TrashIcon = this._element.querySelector('.cards__trash');

    this._createLike = handleLikeClick.createLike;
    this._deleteLike = handleLikeClick.deleteLike;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.cards__item')
      .cloneNode(true);

    return cardElement;
  }

  _isLiked() {
    return this._likes.some(item => item._id === this._userId);
  }

  _toggleLikeButton() {
    if (this._isLiked()) {
      this._likeItem.classList.add('cards__icon_active');
    } else {
      this._likeItem.classList.remove('cards__icon_active');
    }
  }

  removeElement() {
    this._api.deleteCard(this._cardId)
      .then(() => {
        this._element.remove();
      })
      .catch(err => console.log(err));
  }

  _handleLikeClick() {
    if (this._isLiked()) {
      this._deleteLike(this._cardId);
    } else {
      this._createLike(this._cardId);
    }
  }

  _hideButtomTrash() {
    if (this._userId !== this._ownerId) {
      this._element.querySelector('.cards__trash').style.visibility = 'hidden';
    }
  }

  _setEventListeners() {

    this._cardsImage.addEventListener('click', () => this._handleOpenPopup(this._name, this._link));

    this._element.querySelector('.cards__trash').addEventListener('click', () => this.removeElement());

    this._element.querySelector('.cards__icon').addEventListener('click', () => this._handleLikeClick());

  }

  generateCard() {
    this._setEventListeners();
    this._cardsImage.src = this._link;
    this._cardsImage.alt = this._name;
    this._cardsTitle.textContent = this._name;
    this._numberLikeClick.textContent = this._likes.length;

    this._toggleLikeButton();
    this._hideButtomTrash();

    return this._element;

  }

  updateLikesView(numberClickLike) {
    this._likes = numberClickLike.likes;

    this._numberLikeClick.textContent = this._likes.length;

    this._toggleLikeButton();

  }

}