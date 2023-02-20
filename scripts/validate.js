// const formList = document.querySelectorAll('.popup'); Почему находит только первую форму edit?
// console.log('form', form);
const formValidationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
}
// console.log(formValidationConfig);
function enableValidation(config) {
    const form = document.querySelector(config.formSelector);
    console.log('form', form);
// console.log('arguments', arguments); для проверки всех переданых аргументов в функцию
}
enableValidation(formValidationConfig);