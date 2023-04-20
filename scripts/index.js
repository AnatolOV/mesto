import Card from './Card.js';
import FormValidator from './FormValidator.js';
const popUpBoxEdit = document.querySelector('#edit');
const profileEditButton = document.querySelector('.profile__edit-button');
const popUpBoxEditClose = popUpBoxEdit.querySelector('.pop-up__close');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const popUpNameHuman = popUpBoxEdit.querySelector('.pop-up__field_name_human');
const popUpOccupationHuman = popUpBoxEdit.querySelector(
  '.pop-up__field_name_occupation'
);
const popUpFormEdit = popUpBoxEdit.querySelector('.pop-up__form');
const inputCardUrl = document.querySelector('.pop-up__field_reference_image');
const inputCardPlace = document.querySelector('.pop-up__field_name_place');
const popUpImage = document.querySelector('#photo');
const popUpImageClose = popUpImage.querySelector('.pop-up__close');
// const imageInPopUp = popUpImage.querySelector('.pop-up__image');
// const namePopUpImage = popUpImage.querySelector('.pop-up__name-image');
const containerOfElements = document.querySelector('.elements');

const popUpAddBox = document.querySelector('#add');
const addCardsButton = document.querySelector('.profile__add-button');
// const popUpAddBoxSaveButton = popUpAddBox.querySelector('.pop-up__save');
const popUpAddClose = popUpAddBox.querySelector('.pop-up__close');
const popUpAddNamePlace = popUpAddBox.querySelector(
  '.pop-up__field_name_place'
);
const popUpAddReferenceImage = popUpAddBox.querySelector(
  '.pop-up__field_reference_image'
);
popUpAddNamePlace.placeholder = 'Название';
popUpAddReferenceImage.placeholder = 'Ссылка на картинку';
const popUpAddForm = popUpAddBox.querySelector('.pop-up__form');

function openPopUp(popup) {
  popup.classList.add('pop-up__open');
  document.addEventListener('keydown', closeByEscape);
  document.addEventListener('click', closeByClick);
}
function closePopUp(popup) {
  popup.classList.remove('pop-up__open');
  document.removeEventListener('keydown', closeByEscape);
  document.removeEventListener('click', closeByClick);
}
function handleFormSubmitEdit(evt) {
  evt.preventDefault();
  profileName.textContent = popUpNameHuman.value;
  profileProfession.textContent = popUpOccupationHuman.value;
  closePopUp(popUpBoxEdit);
}

profileEditButton.addEventListener('click', (e) => {
  openPopUp(popUpBoxEdit);
  popUpNameHuman.value = profileName.textContent;
  popUpOccupationHuman.value = profileProfession.textContent;
  validationEditForm.resetValidation();
});

popUpBoxEditClose.addEventListener('click', () => closePopUp(popUpBoxEdit));
popUpFormEdit.addEventListener('submit', handleFormSubmitEdit);

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];

addCardsButton.addEventListener('click', () => {
  openPopUp(popUpAddBox), validationAddForm.resetValidation();
});

popUpAddClose.addEventListener('click', () => closePopUp(popUpAddBox));

function createCard(item) {
  const cardElement = new Card(item, objectOfSettings, open).generateCard();
  return cardElement;
}

function handleFormSubmitAdd(evt) {
  evt.preventDefault();
  const item = {
    name: inputCardPlace.value,
    link: inputCardUrl.value,
  };
  containerOfElements.prepend(createCard(item));
  closePopUp(popUpAddBox);
  evt.target.reset();
}

popUpAddForm.addEventListener('submit', handleFormSubmitAdd);

popUpImageClose.addEventListener('click', () => closePopUp(popUpImage));

// объект настроек с классами элементов
const objectOfSettings = {
  templateId: 'element',
  classOfCard: 'elements__element',
  classOfImgInCard: 'elements__image',
  classOfNameCard: 'elements__name',
  classLikeCardButton: 'elements__like',
  classLikeButtonActive: 'elements__like_active',
  classRemoveCardButton: 'elements__bin',
  classImgInPopUp: 'pop-up__image',
  classNameOfImgInPopup: 'pop-up__name-image',
};

const open = () => {
  openPopUp(popUpImage);
};

initialCards.forEach((item) => {
  containerOfElements.append(createCard(item));
});

/* закрытие по ESC */
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.pop-up__open');
    closePopUp(openedPopup);
  }
}

/* закрытие по клику на фоне */
function closeByClick(evt) {
  if (evt.target.classList.contains('pop-up__open')) {
    closePopUp(evt.target);
  }
}
//формы для валидации
const addFormElement = document.querySelector('#add');
const editFormElement = document.querySelector('#edit');

//массив с настройками валидации
const arrOfSettings = {
  formSelector: '.pop-up__form',
  inputSelector: '.pop-up__field',
  submitButtonSelector: '.pop-up__save',
  inactiveButtonClass: 'pop-up__save_inactive',
  errorClass: 'pop-up__input-error_active',
};

const validationAddForm = new FormValidator(arrOfSettings, addFormElement);
validationAddForm.enableValidation();

const validationEditForm = new FormValidator(arrOfSettings, editFormElement);
validationEditForm.enableValidation();
