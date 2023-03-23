class FormValidator {
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

  _toggleEnableButtonSubmit() {
    this._submitButton.disabled = !this._form.checkValidity();
    this._submitButton.classList.toggle(this._buttonDisabledClass, !this._form.checkValidity());
  };

  _addInputListners() {
    this._inputList.forEach((item) => {
      item.addEventListener('input', () => {
        this._handleFormInput(item);
      });
    });
  };

  disabledbuttonSubmit() {
    this._submitButton.disabled = true;
    this._submitButton.classList.add(this._buttonDisabledClass);
  };

  enableValidation() {
    this._form.addEventListener('input', () => {
      this._toggleEnableButtonSubmit();
    });

    this._addInputListners();

    this._toggleEnableButtonSubmit();

    this._form.addEventListener('reset', () => {
      setTimeout(() => {
        this._toggleEnableButtonSubmit();
      }, 0);
    });
  }
}

export default FormValidator;