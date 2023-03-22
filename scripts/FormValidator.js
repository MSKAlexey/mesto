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
    const inputId = item.id;
    const errorElement = document.querySelector(`#${inputId}-error`);
    if (item.validity.valid) {
      item.classList.remove(this._errorClass);
      errorElement.textContent = '';
    } else {
      item.classList.add(this._errorClass);
      errorElement.textContent = item.validationMessage;
    };
  };

  _toggleEnableButtonSubmit() {
    const isFormValidity = this._form.checkValidity();
    this._submitButton.disabled = !isFormValidity;
    this._submitButton.classList.toggle(this._buttonDisabledClass, !isFormValidity);
  };

  _addInputListners() {
    this._inputList.forEach((item) => {
      item.addEventListener('input', () => {
        this._handleFormInput(item);
      });
    });
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