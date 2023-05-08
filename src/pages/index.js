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

// добавляем подпись-placeholder к полям ввода
popUpAddNamePlace.placeholder = "Название";
popUpAddReferenceImage.placeholder = "Ссылка на картинку";
popupEditFieldProfession.placeholder = "Вид деятельности";
popupEditFieldName.placeholder = "ФИО";
inputAvatarPhotoField.placeholder = "Ссылка на фото";

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

// данные пользователя запрос на сервер

const setUserInfo = api
  .getInfo()
  .then((data) => {
    userId = data._id;
    // console.log(data)
    userInfo.setUserInfo({
      human: data.name,
      occupation: data.about,
      avatar: data.avatar,
    });
  })
  .catch((err) => {
    console.log(err);
  });
// console.log(userId);
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
        })
        .catch((err) => console.log(err))
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
// const draw = api.getInitialCards().then((data) => {
//   drawing(data);
// });

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
    if (el._id == userId) {
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
  const cardElement = new Card(item, userId, objectOfSettings, () => {
    const { classOfImgInCard } = objectOfSettings;
    const cardImg = cardElement.querySelector(`.${classOfImgInCard}`);
    popupImage.open(cardImg.alt, cardImg.src);
  }).generateCard();
  return cardElement;
}
// поп ап подтверждения
const popWithSubmit = new PopupWithSubmit("#shure");

////функция для отрисовки элемента

function drawElement(data) {
  const el = createCard(data);

  // console.log(el)
  sectionClass.addItem(el);
  const bin = document.querySelector(".elements__bin");

  const removeBin = () => {
    bin.closest(".elements__element").remove();
    api.deleteCard(data._id);
    shureButton.removeEventListener("click", removeBin);
    popWithSubmit.close();
  };

  bin.addEventListener("click", () => {
    popWithSubmit.open();
    popWithSubmit.setEventListeners();
    shureButton.addEventListener("click", removeBin);
  });

  if (data.owner._id !== userId) {
    document.querySelector(".elements__bin").remove();
  }
  addLikeToPage(data);
}

///////////////////// функция для добавления новой карточки////////////////

const handleFormSubmitAdd = (item) => {
  popUpAddBoxSaveButton.textContent = "Сохранение...";
  api.postNewCard(item).then((data) => {
    const el = createCard(data);
    sectionClass.addItem(el);
    const bin = document.querySelector(".elements__bin");

    const removeBin = (e) => {
      bin.closest(".elements__element").remove();
      api.deleteCard(data._id);
      // console.log(555);
      shureButton.removeEventListener("click", removeBin);
      popWithSubmit.close();
    };

    bin.addEventListener("click", () => {
      popWithSubmit.open();
      popWithSubmit.setEventListeners();
      shureButton.addEventListener("click", removeBin);
    });

    addLikeToPage(data);
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
Promise.all([
  setUserInfo,
  api.getInitialCards().then((data) => {
    drawing(data);
  }),
])

