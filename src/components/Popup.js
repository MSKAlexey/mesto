export default class Popup {
  constructor(popup) {
    this._popup = popup;
  }

  open() {
    this.setEventListeners();
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  };

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  };

  _handleEscClose = (event) => {
    if (event.key === 'Escape') {
      this.close(document.querySelector('.popup_opened'));
    };
  };

  setEventListeners() {
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        this.close()
      }
      if (evt.target.classList.contains('popup__close')) {
        this.close()
      };
    });
  }
}