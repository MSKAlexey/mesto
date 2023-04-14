import Popup from "./Popup.js";
import {
  popupImage,
  popupImgName,
} from "./constants.js";

export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
  }

  open(name, link) {
    super.open();
    popupImage.src = link;
    popupImage.alt = link;
    popupImgName.textContent = name;
  };
}