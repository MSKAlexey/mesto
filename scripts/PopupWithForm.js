import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popup, submit) {
    super(popup);
    this._submit = submit;
    this.form = this._popup.querySelector('.popup__form');
  }

  _getInputValues() {
    this._inputList = this.form.querySelectorAll('.popup__input');

    this._formValues = {};

    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    })

    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();

    this.form.addEventListener('submit', (evt) => {
      evt.preventDefault();

      this._formSubmit(this._getInputValues());

      this.close();
    });
  }

  close() {
    super.close();

    this.form.reset();
  }
}