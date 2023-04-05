export default class FormValidator {
  constructor(arrOfSettings, formElement) {
    this._arrOfSettings = arrOfSettings;
    this._formElement = formElement;
    this._showInputError = (
      formElement,
      inputElement,
      errorMessage,
      errorClass
    ) => {
      const errorElement = formElement.querySelector(
        `.${inputElement.id}-error`
      );
      errorElement.textContent = errorMessage;
      errorElement.classList.add(`${errorClass}`);
    };

    this._hideInputError = (formElement, inputElement, errorClass) => {
      const errorElement = formElement.querySelector(
        `.${inputElement.id}-error`
      );
      errorElement.classList.remove(`${errorClass}`);
      errorElement.textContent = '';
    };
  }
  resetValidation() {
    const { inactiveButtonClass, errorClass } = this._arrOfSettings;
    this._toggleButtonState(
      this.inputList,
      this.buttonElement,
      inactiveButtonClass
    );

    this.inputList.forEach((inputElement) => {
      this._hideInputError(this._formElement, inputElement, errorClass);
    });
  }

  enableValidation = () => {
    const {
      inputSelector,
      submitButtonSelector,
      inactiveButtonClass,
      errorClass,
    } = this._arrOfSettings;

    this._formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    this._setEventListeners(
      inputSelector,
      submitButtonSelector,
      inactiveButtonClass,
      errorClass
    );
  };

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState(inputList, buttonElement, inactiveButtonClass) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(`${inactiveButtonClass}`);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(`${inactiveButtonClass}`);
      buttonElement.disabled = false;
    }
  }

  _checkInputValidity(formElement, inputElement, errorClass) {
    if (!inputElement.validity.valid) {
      this._showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage,
        errorClass
      );
    } else {
      this._hideInputError(formElement, inputElement, errorClass);
    }
  }

  _setEventListeners = () => {
    const {
      inputSelector,
      submitButtonSelector,
      inactiveButtonClass,
      errorClass,
    } = this._arrOfSettings;
    this.inputList = Array.from(
      this._formElement.querySelectorAll(`${inputSelector}`)
    );
    this.buttonElement = this._formElement.querySelector(
      `${submitButtonSelector}`
    );

    this._toggleButtonState(
      this.inputList,
      this.buttonElement,
      inactiveButtonClass
    );
    this.inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(this._formElement, inputElement, errorClass);
        this._toggleButtonState(
          this.inputList,
          this.buttonElement,
          inactiveButtonClass
        );
      });
    });
  };
}
