import Popup from "./Popup";
export default class PopupWithSubmit extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._deleteButton = document.querySelector(".pop-up__shure-button");
  }

  open(call) {
    super.open();
    this.call = call;
    this._deleteButton.onclick = this.call;
  }
}
