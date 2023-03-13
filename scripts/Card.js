const popupElement = document.querySelector('.popup');
const popupImage = document.querySelector('.popup__image');
const popupCloseButton = document.querySelector('.popup__close');
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

  generateCard() {
    this._element = this._getTemplate();

    this._element.querySelector('.cards__image').src = this._link;
    this._element.querySelector('.cards__image').alt = this._name;
    this._element.querySelector('.cards__title').textContent = this._name;

    this._element.querySelector('.cards__trash').addEventListener('click', () => {
      this._element.remove();
    });
    this._element.querySelector('.cards__icon').addEventListener('click', (event) => {
      event.target.classList.toggle('cards__icon_active');
    });

    this._element.querySelector('.cards__image').addEventListener('click', () => {
      openPopup(popupImg);
      popupImage.src = popupOpenButtonImg.src;
      popupImgName.textContent = cardsNameLink.name;
      popupImage.alt = cardsNameLink.name;
    });
    // card.querySelector('.cards__title').textContent = cardsNameLink.name;
    // popupOpenButtonImg.src = cardsNameLink.link;
    // popupOpenButtonImg.alt = cardsNameLink.name;
    // popupOpenButtonImg

    return this._element;
  }

}

export default Card;