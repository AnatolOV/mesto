import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageInPopup = this._popup.querySelector('.pop-up__image');
    this._textInPopup = this._popup.querySelector('.pop-up__name-image');
  }

  open(name, link) {
    super.open();
    this._imageInPopup.src = link;
    this._textInPopup.textContent = name;
  }
}
