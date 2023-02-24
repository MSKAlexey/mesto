const formValidationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    errorClass: 'popup__input_type_error',
    buttonSelector: '.popup__button',
    buttonDisabledClass: 'popup__button_disabled',
};
const inputList = Array.from(document.querySelectorAll(formValidationConfig.inputSelector));
const stopWindowResetOnSubmit = (event) => {
    event.preventDefault();
};
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
function addInputListners(config) {
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
    form.addEventListener('submit', stopWindowResetOnSubmit);
    form.addEventListener('input', () => {
        toggleEnableButtonSubmit(form, config);
    });
    addInputListners(form, config);
    toggleEnableButtonSubmit(form, config);
    form.addEventListener('reset', () => {
        // `setTimeout` нужен для того, чтобы дождаться очищения формы (вызов уйдет в конце стэка) и только потом вызвать `toggleButtonState`
        setTimeout(() => {
            toggleEnableButtonSubmit(form, config);
        }, 0); // достаточно указать 0 миллисекунд, чтобы после `reset` уже сработало действие
    });
};