import Popup from "./Popup.js";
import { inputAddLink, inputAddName } from "./constants.js";
export default class PopupWithForm extends Popup {
  constructor(popup, submit) {
    super(popup);
    this._form = popup.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__input');
    this._submit = submit;
  }

  _getInputValues() {
    this._inputValue = {};
    this._inputList.forEach(input => {
      this._inputValue[input.name] = input.value;
    });
    return this._inputValue;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
      this._form.reset();
      this.close();
      // console.log(this._submit(inputAddName, inputAddLink))
      this._submit(this._getInputValues());
    });
  }
  close() {
    super.close();
    this._form.reset();
  }
}