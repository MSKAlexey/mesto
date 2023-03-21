const formValidationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    errorClass: 'popup__input_type_error',
    buttonSelector: '.popup__button',
    buttonDisabledClass: 'popup__button_disabled',
};

const stopWindowResetOnSubmit = (event) => {
    event.preventDefault();
};
/* Находим все формы и передаем их дальше, теперь нам не нужно это делать, мы передаем форму сразу */
function enableValidation(config) {
    const formList = Array.from(document.querySelectorAll(formValidationConfig.formSelector));
    formList.forEach((form) => {
        enableFormValidate(form, config);
    });
};

function handleFormInput(event, config) {
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

function addInputListners(form, config) {
    const inputList = Array.from(form.querySelectorAll(formValidationConfig.inputSelector));
    inputList.forEach((item) => {
        item.addEventListener('input', (event) => {
            handleFormInput(event, config)
        });
    });
};
function toggleEnableButtonSubmit(form, config) {
    const buttonSubmit = form.querySelector(config.buttonSelector);
    const isFormValidity = form.checkValidity();
    buttonSubmit.disabled = !isFormValidity;
    buttonSubmit.classList.toggle(config.buttonDisabledClass, !isFormValidity);
};

enableValidation(formValidationConfig);

function enableFormValidate(form, config) {
    /* Накуя не понятно, у нас на сабмит и так евент превенд в index.js стоит */
    // form.addEventListener('submit', stopWindowResetOnSubmit);

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

export default formValidationConfig;





























































const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('form__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('form__input-error_active');
  };
  
  const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('form__input_type_error');
    errorElement.classList.remove('form__input-error_active');
    errorElement.textContent = '';
  };
  
  const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };

  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  };

  const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add('button_inactive');
    } else {
      buttonElement.classList.remove('button_inactive');
    }
  };
  
  const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.form__input'));
    const buttonElement = formElement.querySelector('.form__submit');
  
    toggleButtonState(inputList, buttonElement);
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement);
        // чтобы проверять его при изменении любого из полей
        toggleButtonState(inputList, buttonElement);
      });
    });
  };
  
  const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.form'));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
    const fieldsetList = Array.from(formElement.querySelectorAll('.form__set'));
    fieldsetList.forEach((fieldSet) => {
    setEventListeners(fieldSet);
      }); 
    });
  };
  
  enableValidation();