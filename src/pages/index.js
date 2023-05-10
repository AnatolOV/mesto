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
  objectOfSettings,
  selectorName,
  selectorOccupation,
  selectorAvatar,
  inputAvatarPhotoField,
  submitButtonAvatar,
  editAvatarButton,
  shureButton,
  popUpEditSaveButton,
  popUpAddBoxSaveButton,
} from "../utils/constants.js";
import Api from "../components/Api.js";

function handleDeleteCard(item) {
  popWithSubmit.open(() => {
    api
      .deleteCard(item.getId())
      .then(() => {
        item.remove();
        popWithSubmit.close();
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

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
let userId;
// console.log(userId)

//формы для валидации
const addFormElement = document.querySelector("#add");
const editFormElement = document.querySelector("#edit");
const editAvatarElement = document.querySelector("#edit-avatar");

//////////////////Подключаю валидацию форм//////////////////
const validationAddForm = new FormValidator(arrOfSettings, addFormElement);
validationAddForm.enableValidation();

const validationEditForm = new FormValidator(arrOfSettings, editFormElement);
validationEditForm.enableValidation();

///////новый поп ап аватар

const validationAvatarForm = new FormValidator(
  arrOfSettings,
  editAvatarElement
);
validationAvatarForm.enableValidation();

// // попап аватара
const profileEditAvatar = new PopupWithForm(
  {
    handleFormSubmit: (data) => {
      submitButtonAvatar.textContent = "Сохранение...";
      api
        .patchAvatarInfo({ avatar: data.avatarPhoto }) // это метод класса Api
        .then((info) => {
          userInfo.setUserInfo({ avatar: info.avatar }); // это метод из класса UserInfo. profilePopup - экземпляр класса UserInfo
        })
        .then(() => {
          profileEditAvatar.close();
          submitButtonAvatar.textContent = "Сохранить";
        })
        .catch((err) => console.log(err));
      // .finally(() => {
      //   submitButtonAvatar.textContent = "Сохранить";
      // });
    },
  },
  "#edit-avatar"
);
profileEditAvatar.setEventListeners();

editAvatarButton.addEventListener("click", () => {
  // console.log("форма редактирования аватара");
  validationAvatarForm.resetValidation();
  profileEditAvatar.open();
});

const popupImage = new PopupWithImage("#photo");
popupImage.setEventListeners();

///////////////функция для отрисовки страницы///////////
function drawing(data) {
  sectionClass = new Section(
    { items: data, elem: data.reverse() },
    ".elements"
  );
  sectionClass.renderItems({
    renderer: (e) => drawElement(e),
  });
}

///////////Первоначальная Отрисовка Массива Карточек/////////////////
let sectionClass;
// функция добавления лайка
function handleLikeCard(item) {
  api
    .getLike(item.getId())
    .then((data) => {
      item.toggleLikeCard(data);
    })
    .catch((err) => {
      console.log(err);
    });
}
// функция удаления лайка
function handleDeleteLikeCard(item) {
  api
    .deleteLike(item.getId())
    .then((data) => {
      item.toggleLikeCard(data);
    })
    .catch((err) => {
      console.log(err);
    });
}


///////////////////////////// СОЗДАНИЕ ПОПАПОВ С ПОЛНЫМ ФУНКЦИОНАЛОМ //////////////////////////////////////////////
// новый попап картинка
function createCard(item) {
  const cardElement = new Card(
    item,
    userId,
    objectOfSettings,
    () => {
      const { classOfImgInCard } = objectOfSettings;
      const cardImg = cardElement.querySelector(`.${classOfImgInCard}`);
      popupImage.open(cardImg.alt, cardImg.src);
    },
    handleDeleteCard,
    handleLikeCard,
    handleDeleteLikeCard
  ).generateCard();
  return cardElement;
}
// поп ап подтверждения
const popWithSubmit = new PopupWithSubmit("#shure");

////функция для отрисовки элемента

function drawElement(data) {
  const el = createCard(data);
  sectionClass.addItem(el);  
  // addLikeToPage(data);
}

///////////////////// функция для добавления новой карточки////////////////

const handleFormSubmitAdd = (item) => {
  popUpAddBoxSaveButton.textContent = "Сохранение...";
  api.postNewCard(item).then((data) => {
    const el = createCard(data);
    sectionClass.addItem(el);
    const bin = document.querySelector(".elements__bin");

    // addLikeToPage(data);
    popUpAddBoxSaveButton.textContent = "Создать";
  });

  popupAddCard.close();
};
// console.log(el);
// const newCardId = document.getElementById(`${data._id}`);
// console.log(newCardId);
////////////////////////////////////////////////////////////////////////////////////////////////

const popupAddCard = new PopupWithForm(
  { handleFormSubmit: handleFormSubmitAdd },
  "#add"
);
popupAddCard.setEventListeners();
///////////////////////////////////////////////

function addCardButtonCallback() {
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

// редактирование данных пользователя
const handleFormSubmitEdit = (data) => {
  popUpEditSaveButton.textContent = "Сохранение...";
  api
    .editUserInfo(data)
    .then((data) => {
      userId = data._id;
      userInfo.setUserInfo({
        human: data.name,
        occupation: data.about,
        avatar: data.avatar,
      });
      popUpEditSaveButton.textContent = "Сохранить";
    })
    .catch((err) => console.log(err));
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
profileEditButton.addEventListener("click", () => {
  validationEditForm.resetValidation();
  profileEditButtonCallback(userInfo.getUserInfo());
}); // открытие попап Редактировать профиль

///////////////////////////////////////////////////////////////////////////////////////////
// чтобы все информация загружалась одновременно

Promise.all([api.getInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userId = userData._id;
    userInfo.setUserInfo({
      human: userData.name,
      occupation: userData.about,
      avatar: userData.avatar,
    });
    drawing(cards);
  })
  .catch((err) => {
    console.log(err);
  });
