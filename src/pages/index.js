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
  selectorAvatar,
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

let sectionClass;
const initCards = api.getInitialCards().then(function (data) {
  sectionClass = new Section({ items: data }, ".elements");
  sectionClass.renderItems({
    renderer: (e) => {
      sectionClass.addItem(createCard(e));
    },
  });
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
  console.log(item);
  api.postNewCard(item)
  // .then((item) => sectionClass.addItem(createCard(item)));

  // sectionClass.addItem(createCard(item));
  popupAddCard.close();
};
// метод добавляет карточки на страницу
  // postNewCard(data) {
  //   return fetch(`${this._url}/cards`, {
  //     method: "POST",
  //     headers: this._headers,
  //     body: JSON.stringify(data),
  //   }).then((res) => this._checkError(res));
  // }

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
  profileAvatar: selectorAvatar,
});

// данные пользователя запрос на сервер
let userId;
const setUserInfo = api
  .getInfo()
  .then((data) => {
    userId = data._id;
    userInfo.setUserInfo({
      human: data.name,
      occupation: data.about,
      avatar: data.avatar,
    });
  })
  .catch((err) => {
    console.log(err);
  });
// // чтобы все информация загружалась одновременно
// Promise.all([userInfo, elementaryCards]).then(() => cardList.renderItems());


// редактирование данных пользователя
const handleFormSubmitEdit = (data) => {
  // console.log('research');
  api.editUserInfo(data).then((data) => {
     userId = data._id;
      userInfo.setUserInfo({
        human: data.name,
        occupation: data.about,
        avatar: data.avatar,
      });
  });
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
