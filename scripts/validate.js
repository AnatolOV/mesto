const arrayOfInputs = document.querySelectorAll('.pop-up__field'); // находим все поля ввода на странице
const buttons = document.querySelectorAll('.pop-up__save'); // находим все кнопки в pop-up на странице
const showInputError = (element, errorMessage) => {
  element.classList.add('pop-up__input-error_active');
  element.textContent = errorMessage;
};
const hideInputError = (element) => {
  element.classList.remove('pop-up__input-error_active');
  element.textContent = '';
};
const isValid = (el) => {
  if (!el.validity.valid) {
    showInputError(el.nextElementSibling, el.validationMessage);
  } else {
    hideInputError(el.nextElementSibling);
  }
};
const activeButton = (el) => {
  let arr = Array.from(el.closest('form').querySelectorAll('.pop-up__field'));
  if (!(arr[0].validity.valid == true && arr[1].validity.valid == true)) {
    el.setAttribute('disabled', 'disabled');
    el.classList.add('pop-up__save_inactive');
  } else {
    el.removeAttribute('disabled', 'disabled');
    el.classList.remove('pop-up__save_inactive');
  }
};
const enableValidation = (arrOfButtons, arrayOfInputs) => {
  arrayOfInputs.forEach((e) => {
    e.addEventListener('input', () => {
      activeButton(e.closest('form').querySelector('button'));
      isValid(e);
    });
  });
  arrOfButtons.forEach((e) => activeButton(e));
};
enableValidation(buttons, arrayOfInputs);
