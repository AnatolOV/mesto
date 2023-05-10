import Popup from "./Popup";
export default class PopupWithSubmit extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._deleteButton = document.querySelector(".pop-up__shure-button");
  }

  // setEventListeners() {
  //   super.setEventListeners();
  //   // this._form.addEventListener("submit", (evt) => {
  //   //   evt.preventDefault();
  //   //   // console.log(this._formElement);
  //   //   this._handleFormSubmit(this._getInputValues());
  //   // });
  // }
  open(call) {
    super.open();
    this.call = call;
    this._deleteButton.onclick = this.call;
  }
}
