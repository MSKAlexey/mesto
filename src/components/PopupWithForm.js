import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popup, submit) {
    super(popup);
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__input');
    this._submit = submit;
    this._confirmationButton = this._popup.querySelector('.popup__button');

  }

  _getInputValues() {
    this._inputValue = {};
    this._inputList.forEach((input) => {
      this._inputValue[input.name] = input.value;
    });
    return this._inputValue;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
      this._submit(this._getInputValues());
      this.close();
    });
  }

  close() {
    this._form.reset();
    super.close();
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._confirmationButton.textContent = 'Сохранение...';
    } else {
      this._confirmationButton.textContent = 'Сохранить';
    }
  }

}