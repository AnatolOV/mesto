const showInputError = (
  formElement,
  inputElement,
  errorMessage,
  errorClass
) => {
  
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(`${errorClass}`);
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.classList.remove('pop-up__input-error_active');
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, errorClass) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      errorClass
    );
  } else {
    hideInputError(formElement, inputElement);
  }
};

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}
function toggleButtonState(inputList, buttonElement, inactiveButtonClass) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(`${inactiveButtonClass}`);
  } else {
    buttonElement.classList.remove(`${inactiveButtonClass}`);
  }
}

const setEventListeners = (
  formElement,
  inputSelector,
  submitButtonSelector,
  inactiveButtonClass,
  errorClass
) => {
  const inputList = Array.from(
    formElement.querySelectorAll(`${inputSelector}`)
  );
  const buttonElement = formElement.querySelector(`${submitButtonSelector}`);
  toggleButtonState(inputList, buttonElement, inactiveButtonClass);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, errorClass);
      toggleButtonState(inputList, buttonElement, inactiveButtonClass);
    });
  });
};

const enableValidation = (arr) => {
  let {
    formSelector,
    inputSelector,
    submitButtonSelector,
    inactiveButtonClass,
    errorClass,
  } = arr;
 
  const formList = Array.from(document.querySelectorAll(`${formSelector}`));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    formList.forEach((fieldSet) => {
      setEventListeners(
        fieldSet,
        inputSelector,
        submitButtonSelector,
        inactiveButtonClass,
        errorClass
      );
    });
  });
  addCardsButton.addEventListener('click', () => enableValidation(arr)); //деактивировал кнопку в поп апе добавления новой карточки
};
//массив с настройками
const arrOfSettings = {
  formSelector: '.pop-up__form',
  inputSelector: '.pop-up__field',
  submitButtonSelector: '.pop-up__save',
  inactiveButtonClass: 'pop-up__save_inactive',
  errorClass: 'pop-up__input-error_active',
};

enableValidation(arrOfSettings);
