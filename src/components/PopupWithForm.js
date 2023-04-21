import Popup from './Popup.js';

export default class PopupWithForm extends Popup {

  constructor({ handleFormSubmit }, popupSelector) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit; // колбек сабмита формы
    this._inputList = this._popup.querySelectorAll('.pop-up__field'); // поля ввода
    this._form = this._popup.querySelector(".pop-up__form"); // форма
    // console.log(this._popup);
  }

  _getInputValues() {
    this._formElement = {};
    // перебираем inputs, присваиваем значение и возвращаем форму
    this._inputList.forEach(
      (elem) => {this._formElement[elem.name] = elem.value}
      
    );
  //  console.log(this._formElement)
  console.log(this._popup);
    return this._formElement;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    
     this._handleFormSubmit(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
