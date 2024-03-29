export const profileEditButton = document.querySelector(
  ".profile__edit-button"
);
export const popUpAddBox = document.querySelector("#add");
export const popUpAddBoxSaveButton = popUpAddBox.querySelector(".pop-up__save");
export const addCardsButton = document.querySelector(".profile__add-button");

export const popUpAddNamePlace = popUpAddBox.querySelector(
  ".pop-up__field_name_place"
);

export const popUpAddReferenceImage = popUpAddBox.querySelector(
  ".pop-up__field_reference_image"
);

export const popUpEdit = document.querySelector("#edit");
export const popUpEditSaveButton = popUpEdit.querySelector(".pop-up__save");
export const popupEditFieldName = document.querySelector(
  ".pop-up__field_name_human"
);

export const popupEditFieldProfession = document.querySelector(
  ".pop-up__field_name_occupation"
);
//массив с настройками валидации
export const arrOfSettings = {
  formSelector: ".pop-up__form",
  inputSelector: ".pop-up__field",
  submitButtonSelector: ".pop-up__save",
  inactiveButtonClass: "pop-up__save_inactive",
  errorClass: "pop-up__input-error_active",
};

// объект настроек с классами элементов
export const objectOfSettings = {
  templateId: "element",
  classOfCard: "elements__element",
  classOfImgInCard: "elements__image",
  classOfNameCard: "elements__name",
  classLikeCardButton: "elements__like",
  classLikeButtonActive: "elements__like_active",
  classRemoveCardButton: "elements__bin",
  classImgInPopUp: "pop-up__image",
  classNameOfImgInPopup: "pop-up__name-image",
  idOfPopupShure: "shure",
  classnameOfShureButton: "pop-up__shure-button",
  classForOpenPopup: "pop-up__open",
  classOfCardBin: "elements__bin",
  classLikeCounter: "elements__likequantity",
  classActiveForColorHeart: "elements__like_active",
  classForDisplayBin: "elements__bin_active",
};

export const selectorName = ".profile__name";
export const selectorOccupation = ".profile__profession";
export const selectorAvatar = ".profile__photo";
export const inputHumanField = document.querySelector("#human-input"); // поля ввода
export const inputProfessionField = document.querySelector("#occupation-input");

export const inputAvatarPhotoField = document.querySelector(
  "[name = avatarPhoto]"
);
export const editAvatarButton = document.querySelector(".profile__pen");
export const submitButtonAvatar = document.querySelector(
  ".pop-up__save-avatar"
);

export const shureButton = document.querySelector(".pop-up__shure-button");
