const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__popup-open');
let popupName = popupElement.querySelector('.popup__form_input_name');
let popupAbout = popupElement.querySelector('.popup__form_input_about');
let saveBtn = popupElement.querySelector('.popup__button-save');
let profileName = document.querySelector('.profile__title');
let profileAboutMe = document.querySelector('.profile__subtitle');



const openPopup = function() {
    popupElement.classList.add('popup_opened');
    popupName.value = profileName.textContent;
    popupAbout.value = profileAboutMe.textContent;
}

const closePopup = function() {
    popupElement.classList.remove('popup_opened');
}

const closePopupByClickOnOverlay = function(event) {
    if (event.target !== event.currentTarget) {
        return;
    }

    closePopup();
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);

popupElement.addEventListener('click', closePopupByClickOnOverlay);

form.addEventListener('submit', (event) =>{
    profileName.textContent = popupName.value;
    profileAboutMe.textContent = popupAbout.value;
    closePopup();
    event.preventDefault()  
});