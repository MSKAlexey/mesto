import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    // this._img = document.querySelector('.popup__image');
    this._img = this._popup.querySelector('.popup__image'); // я так и делал, но на работу это не влияло, решил оставить через document
    this._imgName = this._popup.querySelector('.popup__name');
  }

  open(name, link) {
    super.open();
    this._img.src = link;
    this._img.alt = link;
    this._imgName.textContent = name;
  };
}