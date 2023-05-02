export const profileEditButton = document.querySelector('.profile__edit-button');
export const popUpAddBox = document.querySelector('#add');
export const addCardsButton = document.querySelector('.profile__add-button');
export const popUpAddNamePlace = popUpAddBox.querySelector(
  '.pop-up__field_name_place'
);
export const popUpAddReferenceImage = popUpAddBox.querySelector(
  '.pop-up__field_reference_image'
);
export const popupEditFieldName = document.querySelector(".pop-up__field_name_human");
export const popupEditFieldProfession = document.querySelector(
  ".pop-up__field_name_occupation"
);

//массив с настройками валидации
export const arrOfSettings = {
  formSelector: '.pop-up__form',
  inputSelector: '.pop-up__field',
  submitButtonSelector: '.pop-up__save',
  inactiveButtonClass: 'pop-up__save_inactive',
  errorClass: 'pop-up__input-error_active',
};
//массив с первоначальными карточками
export const initialCards = [
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
// объект настроек с классами элементов
export const objectOfSettings = {
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
export const selectorName = '.profile__name';
export const selectorOccupation = '.profile__profession';
export const selectorAvatar = ".profile__photo";
export const inputHumanField = document.querySelector("#human-input"); // поля ввода
export const inputProfessionField = document.querySelector("#occupation-input");