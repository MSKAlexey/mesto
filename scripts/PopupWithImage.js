import Popup from "./Popup.js";
import {
  popupImage,
  popupImgName,
} from "./constants.js";

export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
  }

  open = (name, link) => {
    this.setEventListeners();
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
    popupImage.src = link;
    popupImage.alt = link;
    popupImgName.textContent = name;
  };
}