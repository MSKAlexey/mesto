class FormValidator {
  constructor(config, form) {
    this._config = config;
    this._form = form;
    this._formSelector = config.formSelector;
    this._buttonSelector = config.buttonSelector;
    this._buttonDisabledClass = config.buttonDisabledClass;
    this._inputSelector = config.inputSelector;
    this._errorClass = config.errorClass;
  }

  _handleFormInput(item) {
    // console.log(item)
    const inputId = item.id;
    console.log(inputId)
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
    // console.log(this._form)
    const buttonSubmit = this._form.querySelector(this._buttonSelector);
    // console.log(buttonSubmit)
    const isFormValidity = this._formSelector.checkValidity();
    // console.log(isFormValidity)
    buttonSubmit.disabled = !isFormValidity;
    buttonSubmit.classList.toggle(this._buttonDisabledClass, !isFormValidity);
  };

  _addInputListners() {
    const inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    inputList.forEach((item) => {
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