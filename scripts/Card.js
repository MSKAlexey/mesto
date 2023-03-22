
class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.cards__item')
      .cloneNode(true);
    return cardElement;
  }

  generateCard(openPopup) {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.cards__image').src = this._link;
    this._element.querySelector('.cards__image').alt = this._name;
    this._element.querySelector('.cards__title').textContent = this._name;

    const popupImage = document.querySelector('.popup__image');
    const popupImg = document.querySelector('.popup_img');
    const popupImgName = popupImg.querySelector('.popup__name');

    this._element.querySelector('.cards__image').addEventListener('click', () => {
      openPopup(popupImg);
      popupImage.src = this._link;
      popupImgName.textContent = this._name;
      popupImage.alt = this._name;
    });

    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.cards__trash').addEventListener('click', () => {
      this._element.remove();
    });
    this._element.querySelector('.cards__icon').addEventListener('click', (event) => {
      event.target.classList.toggle('cards__icon_active');
    });
  }
}

export default Card;