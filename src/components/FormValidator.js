export default class FormValidator {
  constructor(config, form) {
    this._config = config;
    this._form = form;
    this._buttonSelector = config.buttonSelector;
    this._buttonDisabledClass = config.buttonDisabledClass;
    this._inputSelector = config.inputSelector;
    this._errorClass = config.errorClass;
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._submitButton = this._form.querySelector(this._buttonSelector);
  }

  _handleFormInput(item) {
    const errorElement = document.querySelector(`#${item.id}-error`);
    if (item.validity.valid) {
      item.classList.remove(this._errorClass);
      errorElement.textContent = '';
    } else {
      item.classList.add(this._errorClass);
      errorElement.textContent = item.validationMessage;
    };
  };

  _toggleSubmitButtonState() {
    const isFormValid = this._form.checkValidity();
    this._submitButton.disabled = !isFormValid;
    this._submitButton.classList.toggle(this._buttonDisabledClass, !isFormValid);
  };

  _addInputListners() {
    this._inputList.forEach((item) => {
      item.addEventListener('input', () => {
        this._toggleSubmitButtonState();
        this._handleFormInput(item);
      });
    });
  };

  disabledbuttonSubmit() {
    this._submitButton.disabled = true;
    this._submitButton.classList.add(this._buttonDisabledClass);
  };

  enableValidation() {
    this._addInputListners();
    this._toggleSubmitButtonState();

    this._form.addEventListener('reset', () => {
      setTimeout(() => {
        this._toggleSubmitButtonState();
      }, 0);
    });
  }
}