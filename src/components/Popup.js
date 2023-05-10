export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    // console.log(this._popup)
    this._closeButton = this._popup.querySelector(".pop-up__close");
    this._handleEscClose = this._handleEscClose.bind(this);
  }
  open() {
    this._popup.classList.add("pop-up__open");
    document.addEventListener("keydown", this._handleEscClose);
  }
  close() {
    this._popup.classList.remove("pop-up__open");
    document.removeEventListener("keydown", this._handleEscClose);
  }
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  _handleOverClose = (evt) => {
    if (evt.target.classList.contains("pop-up")) {
      this.close();
    }
  };

  setEventListeners() {
    this._closeButton.addEventListener("click", this.close.bind(this));
    this._popup.addEventListener("click", this._handleOverClose.bind(this));
  }
}
