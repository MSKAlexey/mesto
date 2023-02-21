// const formList = document.querySelectorAll('.popup'); Почему находит только первую форму edit?
// console.log('form', form);
const formValidationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    errorClass: 'popup__input_type_error',
    buttonSelector: '.popup__button-save',
}
// console.log(formValidationConfig);
const stopWindowResetOnSubmit = (event) => {
    event.preventDefault();
};
function enableValidation(config) {
    const form = document.querySelectorAll(config.formSelector);
    // console.log(form);
    form.addEventListener('submit', stopWindowResetOnSubmit);
    addInputListners(form, config);
    // console.log('arguments', arguments); для проверки всех переданых аргументов в функцию
    toggleEnableButtonSubmit(form, config);
}
enableValidation(formValidationConfig);

function handleFormInput(event, config) {
    // console.log(config);
    const input = event.target;
    const inputId = input.id;
    const errorElement = document.querySelector(`#${inputId}-error`);
    // console.log(errorElement); проверям что находятся нужные нам span
    // console.log(input.id); проверям что находятся нужные нам input по их id

    if (input.validity.valid) {
        input.classList.remove(config.errorClass)
        errorElement.textContent = '';
    } else {
        input.classList.add(config.errorClass)
        errorElement.textContent = input.validationMessage;
    }

}

function toggleEnableButtonSubmit (form, config) {
    const buttonSubmit = form.querySelectorAll(config.buttonSelector);
    console.log(buttonSubmit);
}

function addInputListners(form, config) {
    const inputList = Array.from(document.querySelectorAll(config.inputSelector));
    inputList.forEach((item) => {
        item.addEventListener('input', (event) => {
            handleFormInput(event, config)
        });
    });
    // console.log(inputList);
}

