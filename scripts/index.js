const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__popup-open');
let popupName = popupElement.querySelector('.popup__name');
let popupAboutMe = popupElement.querySelector('.form__item_el_about-me');
let saveBtn = popupElement.querySelector('.popup__button-save');
let profileName = document.querySelector('.profile__title');
let profileAboutMe = document.querySelector('.profile__subtitle');



const openPopup = function() {
    popupElement.classList.add('popup__opened');
    popupName.value = profileName.textContent;
    popupAboutMe.value = profileAboutMe.textContent;
}

const closePopup = function() {
    popupElement.classList.remove('popup__opened');
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

saveBtn.addEventListener('click', () =>{
    profileName.textContent = popupName.value;
    profileAboutMe.textContent = popupAboutMe.value;
    closePopup();  
});