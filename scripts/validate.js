// const formList = document.querySelectorAll('.popup'); Почему находит только первую форму edit?
// console.log('form', form);
const formValidationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
}
// console.log(formValidationConfig);
const stopWindowResetOnSubmit = (event) => {
    event.preventDefault();
};
function enableValidation(config) {
    const form = document.querySelector(config.formSelector);
    // console.log(form);
    form.addEventListener('submit', stopWindowResetOnSubmit);
    addInputListners(form, config);
    // console.log('arguments', arguments); для проверки всех переданых аргументов в функцию
}
enableValidation(formValidationConfig);

function handleFormInput (event) {
    // console.log('event', event);
    const input = event.target;
    // console.log(input.validity);
}

function addInputListners(form, config) {
    const inputList = Array.from(popupEditHead.querySelectorAll(config.inputSelector));
    inputList.forEach((item) => {
        item.addEventListener('input', handleFormInput);
    });
    // console.log(inputList);
}

