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
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
      this._submit;
      this._form.reset();
      console.log(this._submit(inputAddName, inputAddLink))
    });
  }

}