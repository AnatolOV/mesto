import "./index.css";
import PopupWithSubmit from "../components/PopupWithSubmit.js";
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
  likeQuantity,
  popupShure,
  shureButton,
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
api.getInitialCards().then(function (data) {
  
  sectionClass = new Section(
    { items: data, elem: data.reverse() },
    ".elements"
  );
  sectionClass.renderItems({
    renderer: (e) => {
      sectionClass.addItem(createCard(e));    
      document.querySelector(".elements__bin").addEventListener("click", () => {
        popWithSubmit.open();
        popWithSubmit.setEventListeners();
        shureButton.addEventListener("click", () => {
          document.querySelector(".elements__element").remove();
          api.deleteCard(e._id);
          popWithSubmit.close()
        });
      });
      if (e.owner._id !== "f09e13c82670c28e9e23fe17") {
        document.querySelector(".elements__bin").remove();
      }
      const numberLikes = document.querySelector(".elements__likequantity"); //отображение количества лайков на каждой карточке
      numberLikes.textContent = e.likes.length;
    },
  });
});

///////////////////////////// СОЗДАНИЕ ПОПАПОВ С ПОЛНЫМ ФУНКЦИОНАЛОМ //////////////////////////////////////////////
// новый попап картинка

function createCard(item) {
  const cardElement = new Card(item, objectOfSettings, () => {
    console.log("func");
    const { classOfImgInCard} =
      objectOfSettings;

    const cardImg = cardElement.querySelector(`.${classOfImgInCard}`);
    popupImage.open(cardImg.alt, cardImg.src);
  }).generateCard();

  return cardElement;
}
// поп ап подтверждения
const popWithSubmit = new PopupWithSubmit("#shure");
console.log(popWithSubmit);
// функция для добавления новой картинки
const handleFormSubmitAdd = (item) => {
  console.log("функция добавить картинку");
  
  api.postNewCard(item);
  popupAddCard.close();
  api.getInitialCards();
  api.getInitialCards().then(function (data) {
    sectionClass = new Section(
      { items: data, elem: data.reverse() },
      ".elements"
    );
    sectionClass.renderItems({
      renderer: (e) => {
        sectionClass.addItem(createCard(e));
        document
          .querySelector(".elements__bin")
          .addEventListener("click", () => {
            popWithSubmit.open();
            popWithSubmit.setEventListeners();
            shureButton.addEventListener("click", () => {
              document.querySelector(".elements__element").remove();
              api.deleteCard(e._id);
              popWithSubmit.close();
            });
          });
        if (e.owner._id !== "f09e13c82670c28e9e23fe17") {
          document.querySelector(".elements__bin").remove();
        }
        const numberLikes = document.querySelector(".elements__likequantity"); //отображение количества лайков на каждой карточке
        numberLikes.textContent = e.likes.length;
      },
    });
  });
};

const popupAddCard = new PopupWithForm(
  { handleFormSubmit: handleFormSubmitAdd },
  "#add"
);
popupAddCard.setEventListeners();
///////////////////////////////////////////////

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
