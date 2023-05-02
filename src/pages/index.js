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
import Api from "../components/Api.js";

// добавляем подпись-placeholder к полям ввода
popUpAddNamePlace.placeholder = "Название";
popUpAddReferenceImage.placeholder = "Ссылка на картинку";
popupEditFieldProfession.placeholder = "Вид деятельности";
popupEditFieldName.placeholder = "ФИО";

// объект с персональными данными для Api
const apiData = {
  url: "https://mesto.nomoreparties.co/v1/cohort-65",
  headers: {
    "Content-Type": "application/json",
    authorization: "839f0bcd-454c-4502-9292-a3578896039c",
  },
};
// объект класса Api
const api = new Api(apiData);
console.log(333)

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
// получаем начальный набор карточек
// let cardList; // изменяю значение ниже, поэтому не могу обьявить константу
// const elementaryCards = api
//   .getInitialCards()
//   .then(function (data) {
//     console.log('запущен запрос для получения карточек с сервера')
//     cardList = new Section(
//       {
//         elem: data.reverse(), // переворачивем массив, чтобы карточки добавлялись в начало
//         renderer: (item) => {
//           cardList.addItem(createNewCard(item));
//         },
//       },
//       ".elements"
//     );
//   })
//   .catch((err) => {
//     console.log(err);
//   });

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
profileEditPopup.setEventListeners();

function profileEditButtonCallback(dat) {
  profileEditPopup.open();
  inputHumanField.value = dat.human;
  inputProfessionField.value = dat.occupation;  
}
profileEditButton.addEventListener("click", () =>
  profileEditButtonCallback(userInfo.getUserInfo())
); // открытие попап Редактировать профиль

///////////////////////////////////////////////////////////////////////////////////////////

// данные пользователя
// let userId; // изменяю значение ниже, поэтому не могу обьявить константу
// const userInfo = api
//   .getInfo()
//   .then((data) => {
//     userId = data._id;
//     profilePopup.setUserInfo({
//       name: data.name,
//       about: data.about,
//       avatar: data.avatar,
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// // чтобы все информация загружалась одновременно
// Promise.all([userInfo, elementaryCards]).then(() => cardList.renderItems());