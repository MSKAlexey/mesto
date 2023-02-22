const formValidationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    errorClass: 'popup__input_type_error',
    buttonSelector: '.popup__button',
    buttonDisabledClass: 'popup__button_disabled',
};
const formList = Array.from(document.querySelectorAll(formValidationConfig.formSelector));
const inputList = Array.from(document.querySelectorAll(formValidationConfig.inputSelector));
/* const buttonList = Array.from(document.querySelectorAll(formValidationConfig.buttonSelector)); */
//console.log('formList', formList)
//console.log('inputList', inputList)
/* console.log('buttonList', buttonList) */

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
/**
 * Выбираем задействуеный input и добавляем ему класс который пишет стандартную браузерную ошибку незаполненой формы
 * если поле input заполнено верно, то убирает класс с ошибкой
 * @param {*} event 
 * @param {*} config 
 */
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
    //console.log('form', form)
    const buttonSubmit = form.querySelector(config.buttonSelector);
    //console.log('buttonSubmit', buttonSubmit)
    const isFormValidity = form.checkValidity();
    buttonSubmit.disabled = !isFormValidity;
    buttonSubmit.classList.toggle('popup__button_disabled', !isFormValidity);
};
/**
 * Слушаем все input
 * @param {*} form 
 * @param {*} config 
 */
function addInputListners(form, config) { 
    inputList.forEach((item) => {
        //console.log('item', item)
        item.addEventListener('input', (event) => {
            handleFormInput(event, config)
        });
    });
};