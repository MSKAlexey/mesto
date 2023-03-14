class FormValidation {
  constructor(formValidationConfig) {
    this._formValidationConfig = formValidationConfig;
  }

  _addInputListners(form, config) {
    const inputList = Array.from(form.querySelectorAll(this._formValidationConfig.inputSelector));
    inputList.forEach((item) => {
      item.addEventListener('input', (event) => {
        handleFormInput(event, config)
      });
    });
  };
  _toggleEnableButtonSubmit(form, config) {
    const buttonSubmit = form.querySelector(config.buttonSelector);
    const isFormValidity = form.checkValidity();
    buttonSubmit.disabled = !isFormValidity;
    buttonSubmit.classList.toggle(config.buttonDisabledClass, !isFormValidity);
  };
  _handleFormInput(event, config) {
    const input = event.target;
    const inputId = input.id;
    const errorElement = document.querySelector(`#${inputId}-error`);
    if (input.validity.valid) {
      input.classList.remove(config.errorClass);
      errorElement.textContent = '';
    } else {
      input.classList.add(config.errorClass);
      errorElement.textContent = input.validationMessage;
    };
  };

  _enableFormValidate(form, config) {
    form.addEventListener('submit', stopWindowResetOnSubmit);
    form.addEventListener('input', () => {
        toggleEnableButtonSubmit(form, config);
    });
    addInputListners(form, config);
    toggleEnableButtonSubmit(form, config);
    form.addEventListener('reset', () => {
        setTimeout(() => {
            toggleEnableButtonSubmit(form, config);
        }, 0);
    });
};

  enableValidation(config) {
    const formList = Array.from(document.querySelectorAll(this._formValidationConfig.formSelector));
    formList.forEach((form) => {
      enableFormValidate(form, config);
    });
  };

}

export default FormValidation;