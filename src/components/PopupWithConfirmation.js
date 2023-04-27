import Popup from "./Popup";

export default class PopupWithConfirmation extends Popup {
  constructor(selector) {
    super(selector);
    this._confirmationButton = this._popup.querySelector('.popup__button');

  }

  setEventListeners() {
    super.setEventListeners();
    this._confirmationButton.addEventListener('click', (event) => {
      event.preventDefault();

      this._handleSubmit();
    });
  }

  setSubmit(handle) {
    this._handleSubmit = handle;
  }


  renderLoading(isLoading) {
    if (isLoading) {
      this._confirmationButton.textContent = 'Удаление...';
    } else {
      this._confirmationButton.textContent = 'Да';
    }
  }


}