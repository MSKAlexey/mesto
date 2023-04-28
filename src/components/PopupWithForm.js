import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popup, submit) {
    super(popup);
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__input');
    this._submit = submit;
    this._confirmationButton = this._popup.querySelector('.popup__button');
    this._initialText = this._confirmationButton.textContent;
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      // тут вставляем в `value` инпута данные из объекта по атрибуту `name` этого инпута
      input.value = data[input.name];
    });
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
      // перед запросом сохраняем изначальный текст кнопки
      // меняем его, чтобы показать пользователю ожидание
      this._confirmationButton.textContent = 'Сохранение...';
      this._submit(this._getInputValues())
        .then(() => this.close()) // закрывается попап в `then`
        .finally(() => {
          this._confirmationButton.textContent = this._initialText;
        }) // в любом случае меняется текст кнопки обратно на начальный в `finally`
    });
  }

  close() {
    this._form.reset();
    super.close();
  }

}