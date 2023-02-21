const formValidationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    errorClass: 'popup__input_type_error',
    buttonSelector: '.popup__button-save',
    buttonDisabledClass: 'popup__button-save_disabled',
};
const formList = Array.from(document.querySelectorAll(formValidationConfig.formSelector));
const stopWindowResetOnSubmit = (event) => {
    event.preventDefault();
};
function enableValidation(config) {
    formList.forEach((form) => {
        form.addEventListener('submit', stopWindowResetOnSubmit);
        form.addEventListener('input', () => {
            toggleEnableButtonSubmit(form, config);
        });
        addInputListners(form, config);
        toggleEnableButtonSubmit(form, config);
    });
};
enableValidation(formValidationConfig);
function handleFormInput(event, config) {
    const input = event.target;
    const inputId = input.id;
    const errorElement = document.querySelector(`#${inputId}-error`);
    if (input.validity.valid) {
        input.classList.remove(config.errorClass)
        errorElement.textContent = '';
    } else {
        input.classList.add(config.errorClass)
        errorElement.textContent = input.validationMessage;
    }
};
function toggleEnableButtonSubmit(form, config) {
    const buttonSubmit = form.querySelector(config.buttonSelector);
    const isFormValidity = form.checkValidity();
    buttonSubmit.disabled = !isFormValidity;
    buttonSubmit.classList.toggle('popup__button-save_disabled', !isFormValidity);
};
function addInputListners(form, config) {
    const inputList = Array.from(document.querySelectorAll(config.inputSelector));
    inputList.forEach((item) => {
        item.addEventListener('input', (event) => {
            handleFormInput(event, config)
        });
    });
};