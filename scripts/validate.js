// const formList = document.querySelectorAll('.popup'); Почему находит только первую форму edit?
// console.log('form', form);
const formValidationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    errorClass: 'popup__input_type_error',
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

function handleFormInput(event, config) {
    // console.log(config);
    const input = event.target;

    if (input.validity.valid) {
        input.classList.remove(config.errorClass)
    } else {
        input.classList.add(config.errorClass)
    }

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

