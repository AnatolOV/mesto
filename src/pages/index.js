import "./index.css";
import Card from "../components/Card.js";
import Popup from "../components/Popup.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import {
  profileEditButton,
  popUpAddBox,
  popupEditFieldName,
  popupEditFieldProfession,
  addCardsButton,
  popUpAddNamePlace,
  inputHumanField,
  inputProfessionField,
  popUpAddReferenceImage,
  arrOfSettings,
  initialCards,
  objectOfSettings,
  selectorName,
  selectorOccupation,
} from "../utils/constants.js";
// добавляем подпись-placeholder к полям ввода
popUpAddNamePlace.placeholder = "Название";
popUpAddReferenceImage.placeholder = "Ссылка на картинку";
popupEditFieldProfession.placeholder = "Вид деятельности";
popupEditFieldName.placeholder = "ФИО";

//формы для валидации
const addFormElement = document.querySelector("#add");
const editFormElement = document.querySelector("#edit");

//////////////////Подключаю валидацию форм//////////////////
const validationAddForm = new FormValidator(arrOfSettings, addFormElement);
validationAddForm.enableValidation();

const validationEditForm = new FormValidator(arrOfSettings, editFormElement);
validationEditForm.enableValidation();

///////////Первоначальная Отрисовка Массива Карточек/////////////////
const popupImage = new PopupWithImage("#photo");
popupImage.setEventListeners();
const sectionClass = new Section(
  {
    items: initialCards
  },
  ".elements"
);
sectionClass.renderItems({
  renderer: (e) => {
    sectionClass.addItem(createCard(e));
  },
});

///////////////////////////// СОЗДАНИЕ ПОПАПОВ С ПОЛНЫМ ФУНКЦИОНАЛОМ //////////////////////////////////////////////
// новый попап картинка



function createCard(item) {
  const cardElement = new Card(item, objectOfSettings, () => {
    const { classOfImgInCard } = objectOfSettings;
    const cardImg = cardElement.querySelector(`.${classOfImgInCard}`);
    popupImage.open(cardImg.alt, cardImg.src);
  }).generateCard();

  return cardElement;
}

const handleFormSubmitAdd = (item) => {
  console.log("функция добавить картинку");
  // console.log(createCard(item));
  sectionClass.addItem(createCard(item));
  popupAddCard.close();
};

const popupAddCard = new PopupWithForm(
  { handleFormSubmit: handleFormSubmitAdd },
  "#add"
);
popupAddCard.setEventListeners();

function addCardButtonCallback() {
  // console.log(9)
  popupAddCard.open();
  validationAddForm.resetValidation();
}

addCardsButton.addEventListener("click", addCardButtonCallback); // открытие попап Добавить картинку

/////////////////////////////////////////////////////////////////////
// новый попап редактировать профиль

const userInfo = new UserInfo({
  profileName: selectorName,
  profileAbout: selectorOccupation,
});

const handleFormSubmitEdit = (data) => {
  // console.log(9)
  userInfo.setUserInfo(data);
  profileEditPopup.close();
};

const profileEditPopup = new PopupWithForm(
  { handleFormSubmit: handleFormSubmitEdit },
  "#edit"
);

function profileEditButtonCallback(dat) {
  profileEditPopup.open();
  inputHumanField.value = dat.human;
  inputProfessionField.value = dat.occupation;
  profileEditPopup.setEventListeners();
}
profileEditButton.addEventListener("click", () =>
  profileEditButtonCallback(userInfo.getUserInfo())
); // открытие попап Редактировать профиль

///////////////////////////////////////////////////////////////////////////////////////////
