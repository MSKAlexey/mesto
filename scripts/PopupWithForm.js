import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popup, submit) {
    super(popup);
    this._form = popup.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__input');
  }

  _getInputValues() {
    this._formInputsValue = {};
    this._inputList.forEach(input => {
      this._formInputsValue[input.name] = input.value;
    });
    return this._formInputsValue;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
      this.close();
    });
  }

}