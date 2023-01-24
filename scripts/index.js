const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__popup-open');
let popupName = popupElement.querySelector('.popup__name');
let popupProfession = popupElement.querySelector('.popup__profession');
let saveBtn = popupElement.querySelector('.popup__button-save');
let profileName = document.querySelector('.profile__title');
let profileProfession = document.querySelector('.profile__subtitle');

const openPopup = function() {
    popupElement.classList.add('popup__is-opened');
}

const closePopup = function() {
    popupElement.classList.remove('popup__is-opened');
}

const closePopupByClickOnOverlay = function(event) {
    console.log(event.target, event.currentTarget);
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
    profileProfession.textContent = popupProfession.value;
    closePopup();  
});