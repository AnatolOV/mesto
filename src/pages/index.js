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
} from "../utils/constants.js";
import Api from "../components/Api.js";

// добавляем подпись-placeholder к полям ввода
popUpAddNamePlace.placeholder = "Название";
popUpAddReferenceImage.placeholder = "Ссылка на картинку";
popupEditFieldProfession.placeholder = "Вид деятельности";
popupEditFieldName.placeholder = "ФИО";
inputAvatarPhotoField.placeholder = "Ссылка на фото"

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
      api
        .patchAvatarInfo({ avatar: data.avatarPhoto }) // это метод класса Api
        .then((info) => {
          // console.log(info);
          submitButtonAvatar.textContent = "Сохранение...";
          userInfo.setUserInfo({ avatar: info.avatar }); // это метод из класса UserInfo. profilePopup - экземпляр класса UserInfo
        })
        .then(() => {
          profileEditAvatar.close();
          validationAvatarForm.resetValidation();
        })
        .catch((err) => console.log(err))
      .finally(() => {
        submitButtonAvatar.textContent = "Сохранить";
      });
    },
  },
  "#edit-avatar"
);
profileEditAvatar.setEventListeners();

editAvatarButton.addEventListener("click", () => {
  // console.log("форма редактирования аватара");
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
    renderer: (e) => {
      sectionClass.addItem(createCard(e));
      const bin = document.querySelector(".elements__bin");
      bin.addEventListener("click", () => {
        popWithSubmit.open();
        popWithSubmit.setEventListeners();
        shureButton.addEventListener("click", () => {
          bin.closest(".elements__element").remove();
          api.deleteCard(e._id);
          popWithSubmit.close();
        });
      });
      if (e.owner._id !== "f09e13c82670c28e9e23fe17") {
        document.querySelector(".elements__bin").remove();
      }
      addLikeToPage(e);
    },
  });
}

///////////Первоначальная Отрисовка Массива Карточек/////////////////
let sectionClass;
const draw = api.getInitialCards().then((data) => {
  drawing(data);
});

////////////    функция для добавления лайков ///////////
function addLikeToPage(e) {
  const likeElement = document.querySelector(".elements__like");
  const numberLikes = document.querySelector(".elements__likequantity"); //отображение количества лайков на каждой карточке
  const numberOfLikes = likeElement
    .closest(".elements__container")
    .querySelector(".elements__likequantity");
  numberLikes.textContent = e.likes.length;
  //окрашивание сердечек при загрузке
  const color = e.likes.forEach((el) => {
    //проверяем есть ли уже мой лайк на карточках, если есть, красим сердце
    if (el._id == "f09e13c82670c28e9e23fe17") {
      likeElement.classList.toggle("elements__like_active");
    }
  });
  //ставим лайки
  likeElement.addEventListener("click", () => {
    if (likeElement.className == "elements__like elements__like_active") {
      api.deleteLike(e._id).then((data) => {
        likeElement.classList.toggle("elements__like_active");
        numberOfLikes.textContent = data.likes.length;
      });
    } else {
      api.getLike(e._id).then((data) => {
        likeElement.classList.toggle("elements__like_active");
        numberOfLikes.textContent = data.likes.length;
      });
    }
  });
}

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
// поп ап подтверждения
const popWithSubmit = new PopupWithSubmit("#shure");

///////////////////// функция для добавления новой карточки////////////////

const handleFormSubmitAdd = (item) => {
  api
    .postNewCard(item)
    .then((data) => {
      sectionClass.addItem(createCard(data));
      const bin = document.querySelector(".elements__bin");
      bin.addEventListener("click", () => {
        popWithSubmit.open();
        popWithSubmit.setEventListeners();
        shureButton.addEventListener("click", () => {
          bin.closest(".elements__element").remove();
          api.deleteCard(data._id);
          popWithSubmit.close();
        });
      });
      addLikeToPage(data)
    });
  popupAddCard.close();
};
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

// редактирование данных пользователя
const handleFormSubmitEdit = (data) => {
  api
    .editUserInfo(data)
    .then((data) => {
      
      userId = data._id;
      userInfo.setUserInfo({
        human: data.name,
        occupation: data.about,
        avatar: data.avatar,
      });
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
profileEditButton.addEventListener("click", () =>
  profileEditButtonCallback(userInfo.getUserInfo())
); // открытие попап Редактировать профиль

///////////////////////////////////////////////////////////////////////////////////////////
