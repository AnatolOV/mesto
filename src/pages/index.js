import './index.css';
import Card from '../components/Card.js';
import Popup from '../components/Popup.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import {
  profileEditButton,
  popUpAddBox,
  addCardsButton,
  popUpAddNamePlace,
  popUpAddReferenceImage,
  addFormElement,
  editFormElement,
  arrOfSettings,
  initialCards,
  objectOfSettings,
  selectorName,
  selectorOccupation,
} from '../utils/constants.js';

popUpAddNamePlace.placeholder = 'Название';
popUpAddReferenceImage.placeholder = 'Ссылка на картинку';

//////////////////Подключаю валидацию форм//////////////////
const validationAddForm = new FormValidator(arrOfSettings, addFormElement);
validationAddForm.enableValidation();

const validationEditForm = new FormValidator(arrOfSettings, editFormElement);
validationEditForm.enableValidation();

function createCard(item) {
  const cardElement = new Card(item, objectOfSettings, open).generateCard();
  let cardImg = cardElement.querySelector('.elements__image');
  cardImg.addEventListener('click', () => {
    popupImage.open(cardImg.alt, cardImg.src);
    popupImage.setEventListeners();
  });
  return cardElement;
}
///////////Первоначальная Отрисовка Массива Карточек/////////////////
const popupImage = new PopupWithImage('#photo');
const sectionClass = new Section(
  {
    items: initialCards,
    renderer: (e) => {
      sectionClass.addItem(createCard(e));
    },
  },
  '.elements'
);
sectionClass.renderItems();

///////////////////////////// СОЗДАНИЕ ПОПАПОВ С ПОЛНЫМ ФУНКЦИОНАЛОМ //////////////////////////////////////////////
// новый попап картинка

const handleFormSubmitAdd = (item) => {
  console.log('функция добавить картинку попап');
  sectionClass.addItem(createCard(item));
  popupAddCard.close();
};

const popupAddCard = new PopupWithForm(
  { handleFormSubmit: handleFormSubmitAdd },
  '#add'
);

addCardsButton.addEventListener('click', (e) => {
  // открытие попап Добавить картинку
  popupAddCard.open(); //new code
  popupAddCard.setEventListeners();
  validationAddForm.enableValidation();
});

/////////////////////////////////////////////////////////////////////
// новый попап редактировать профиль

const userInfo = new UserInfo({
  profileName: selectorName,
  profileAbout: selectorOccupation,
});

const handleFormSubmitEdit = (data) => {
  userInfo.getUserInfo();
  userInfo.setUserInfo(data);
  profileEditPopup.close();
};

const profileEditPopup = new PopupWithForm(
  { handleFormSubmit: handleFormSubmitEdit },
  '#edit'
);
profileEditButton.addEventListener('click', (e) => {
  // открытие попап Редактировать профиль
  profileEditPopup.open();
  validationEditForm.enableValidation();
  profileEditPopup.setEventListeners();
});

///////////////////////////////////////////////////////////////////////////////////////////
