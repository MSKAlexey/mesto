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
    // this._setEventListeners();
    this._element.querySelector('.cards__image').src = this._link;
    this._element.querySelector('.cards__image').alt = this._name;
    this._element.querySelector('.cards__title').textContent = this._name;

    return this._element;
  }
  
//   _handleOpenPopup() {
//     popupImage.src = this._image;
//     popupElement.classList.add('popup_is-opened');
//   }
  
//   _handleClosePopup() {
//     popupImage.src = '';
//     popupElement.classList.remove('popup_is-opened');
//   }
  
//   _setEventListeners() {
//   this._element.addEventListener('click', () => {
//     this._handleOpenPopup();
//   });
//   popupCloseButton.addEventListener('click', () => {
//     this._handleClosePopup();
//   });
// }
  
}

export default Card;