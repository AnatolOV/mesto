const elemetTemplate = document.querySelector('#element').content;
const popUpBoxEdit = document.querySelector('#edit');
const profileEditButton = document.querySelector('.profile__edit-button');
const popUpBoxEditClose = popUpBoxEdit.querySelector('.pop-up__close');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const popUpNameHuman = popUpBoxEdit.querySelector('.pop-up__field_name_human');
const popUpOccupationHuman = popUpBoxEdit.querySelector(
  '.pop-up__field_name_occupation'
);
const popUpFormEdit = popUpBoxEdit.querySelector('.pop-up__form');
const inputCardUrl = document.querySelector('.pop-up__field_reference_image');
const inputCardPlace = document.querySelector('.pop-up__field_name_place');
const popUpImage = document.querySelector('#photo');
const popUpImageClose = popUpImage.querySelector('.pop-up__close');
const imageInPopUp = popUpImage.querySelector('.pop-up__image');
const namePopUpImage = popUpImage.querySelector('.pop-up__name-image');
const containerOfElements = document.querySelector('.elements');
const elementInContainer =
  containerOfElements.querySelectorAll('.elements__element');
const popUpAddBox = document.querySelector('#add');
const addCardsButton = document.querySelector('.profile__add-button');
const popUpAddClose = popUpAddBox.querySelector('.pop-up__close');
const popUpAddNamePlace = popUpAddBox.querySelector(
  '.pop-up__field_name_place'
);
const popUpAddReferenceImage = popUpAddBox.querySelector(
  '.pop-up__field_reference_image'
);
popUpAddNamePlace.placeholder = 'Название';
popUpAddReferenceImage.placeholder = 'Ссылка на картинку';
const popUpAddForm = popUpAddBox.querySelector('.pop-up__form');

function openPopUp(popup) {
  popup.classList.add('pop-up__open');
  document.addEventListener('keydown', closeByEscape);
  document.addEventListener('click', closeByClick);
}
function closePopUp(popup) {
  popup.classList.remove('pop-up__open');
  document.removeEventListener('keydown', closeByEscape);
  document.removeEventListener('click', closeByClick); 
}
function handleFormSubmitEdit(evt) {
  evt.preventDefault();
  profileName.textContent = popUpNameHuman.value;
  profileProfession.textContent = popUpOccupationHuman.value;
  closePopUp(popUpBoxEdit);
}

profileEditButton.addEventListener('click', (e) => {
  openPopUp(popUpBoxEdit);
  popUpNameHuman.value = profileName.textContent;
  popUpOccupationHuman.value = profileProfession.textContent;
});

popUpBoxEditClose.addEventListener('click', () => closePopUp(popUpBoxEdit));
popUpFormEdit.addEventListener('submit', handleFormSubmitEdit);

const initialCards = [
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

addCardsButton.addEventListener('click', () => openPopUp(popUpAddBox));

popUpAddClose.addEventListener('click', () => closePopUp(popUpAddBox));

function handleFormSubmitAdd(evt) {
  evt.preventDefault();
  const card = createCard({
    name: inputCardPlace.value,
    link: inputCardUrl.value,
  });
  containerOfElements.prepend(card);

  closePopUp(popUpAddBox); //??? не понял комментарий по деактивации кнопки только,"после этого нужно деактивировать кнопку только. 
  // Больше нигде не нужно" - что значит больше нигде не нужно, что не нужно?

  evt.target.reset();
}

popUpAddForm.addEventListener('submit', handleFormSubmitAdd);

popUpImageClose.addEventListener('click', () => closePopUp(popUpImage));

// первоначальное заполнение страницы на основе данных массива initialCards
initialCards.forEach((item) => {
  const card = createCard(item);
  containerOfElements.append(card);
});

function createCard(item) {
  //вааа
  const elementInElements = elemetTemplate
    .querySelector('.elements__element')
    .cloneNode(true);
  const cardImage = elementInElements.querySelector('.elements__image');
  cardImage.src = item.link;
  cardImage.alt = item.name;
  const cardName = elementInElements.querySelector('.elements__name');
  cardName.textContent = item.name;
  const like = elementInElements.querySelector('.elements__like');
  like.addEventListener('click', (e) =>
    e.target.classList.toggle('elements__like_active')
  );
  const elementRemove = elementInElements.querySelector('.elements__bin');
  elementRemove.addEventListener('click', (e) =>
    e.target.closest('.elements__element').remove()
  );
  
  cardImage.addEventListener('click', (e) => {
    openPopUp(popUpImage);
    imageInPopUp.src = item.link;
    imageInPopUp.alt = item.name;
  });

  return elementInElements;
}

/* закрытие по ESC */
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.pop-up__open');
    closePopUp(openedPopup);
  }
}

/* закрытие по клику на фоне */
function closeByClick (evt) {
  if (evt.target == evt.target.closest('.pop-up')) {
    closePopUp(evt.target.closest('.pop-up'));
  }
}
