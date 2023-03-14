const arrayOfInputs = document.querySelectorAll('.pop-up__field'); // находим все поля ввода на странице
const showInputError = (element, errorMessage) => {
  element.classList.add('pop-up__input-error_active');
  element.textContent = errorMessage;
};
const hideInputError = (element) => {
  element.classList.remove('pop-up__input-error_active');
  // Очистим ошибку
  element.textContent = '';
};
const isValid = (el) => {
  if (!el.validity.valid) {
    showInputError(el.nextElementSibling, el.validationMessage);
    el.closest('form')
      .querySelector('button')
      .setAttribute('disabled', 'disabled');
    el.closest('form')
      .querySelector('button')
      .classList.add('pop-up__save_inactive');
  } else {
    hideInputError(el.nextElementSibling);
    el.closest('form')
      .querySelector('button')
      .removeAttribute('disabled', 'disabled');
    el.closest('form')
      .querySelector('button')
      .classList.remove('pop-up__save_inactive');
  }
};
const enableValidation = arrayOfInputs.forEach((e) => e.addEventListener('input', () => isValid(e))); // добавляем обработку IsValid на каждое поле
