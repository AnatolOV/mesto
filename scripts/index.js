//pop-up для редактирования профиля
const elemetTemplate = document.querySelector('#element').content;
const popUpBoxEdit = document.querySelector('#edit');
const profileEditButton = document.querySelector('.profile__edit-button');
const popUpClose = popUpBoxEdit.querySelector('.pop-up__close');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const popUpNameHuman = popUpBoxEdit.querySelector('.pop-up__field_name_human');
const popUpOccupationHuman = popUpBoxEdit.querySelector(
  '.pop-up__field_name_occupation'
);
const popUpFormEdit = popUpBoxEdit.querySelector('.pop-up__form');

function openPopUp(arg) {
  arg.classList.add('pop-up__open');
}
function closePopUp(arg) {
  arg.classList.remove('pop-up__open');
}
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = popUpNameHuman.value;
  profileProfession.textContent = popUpOccupationHuman.value;
  closePopUp(popUpBoxEdit);
}

profileEditButton.addEventListener('click', () => {
  openPopUp(popUpBoxEdit);
  popUpNameHuman.value = profileName.textContent;
  popUpOccupationHuman.value = profileProfession.textContent;
});

popUpClose.addEventListener('click', () => closePopUp(popUpBoxEdit));
popUpFormEdit.addEventListener('submit', handleFormSubmit);

/////////////////////////////////////////////////////////////////////

//pop-up с фотографией места

const popUpImage = document.querySelector('#photo');
const popUpImageClose = popUpImage.querySelector('.pop-up__close');
const imageInPopUp = popUpImage.querySelector('.pop-up__image');
const namePopUpImage = popUpImage.querySelector('.pop-up__name-image');

//pop-up для добавления карточек
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

addCardsButton.addEventListener('click', () => openPopUp(popUpAddBox));

popUpAddClose.addEventListener('click', () => closePopUp(popUpAddBox));

function handleFormSubmitAdd(evt) {
  evt.preventDefault();
  createCard();
  closePopUp(popUpAddBox);
  evt.target.reset();
}

popUpAddForm.addEventListener('submit', handleFormSubmitAdd);

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

popUpImageClose.addEventListener('click', () => closePopUp(popUpImage));

createCard(initialCards);

function createCard(array) {
  elementInElements = elemetTemplate
    .querySelector('.elements__element')
    .cloneNode(true);

  if (array) {
    for (let i = 0; i < array.length; i++) {
      createCard();
      elementInElements.querySelector('.elements__image').src = array[i].link;
      elementInElements
        .querySelector('.elements__container')
        .querySelector('.elements__name').textContent = array[i].name;
      containerOfElements.append(elementInElements);
    }
  }

  like = elementInElements.querySelector('.elements__like');
  like.addEventListener('click', (e) =>
    e.target.classList.toggle('elements__like_active')
  );
  elementRemove = elementInElements.querySelector('.elements__bin');
  elementRemove.addEventListener('click', (e) =>
    e.target.closest('.elements__element').remove()
  );
  image = elementInElements.querySelector('.elements__image');
  image.addEventListener('click', (e) => {
    openPopUp(popUpImage);
    imageInPopUp.src = e.target.src;
    imageInPopUp.alt = e.target
      .closest('.elements__element')
      .querySelector('.elements__name').textContent;
    namePopUpImage.textContent = e.target
      .closest('.elements__element')
      .querySelector('.elements__name').textContent;
  });

  if (popUpAddNamePlace.value != '' && popUpAddReferenceImage.value != '') {
    elementInElements.querySelector('.elements__image').src =
      popUpAddReferenceImage.value;
    elementInElements.querySelector('.elements__image').alt =
      popUpAddNamePlace.value;
    elementInElements
      .querySelector('.elements__container')
      .querySelector('.elements__name').textContent = popUpAddNamePlace.value;
    containerOfElements.prepend(elementInElements);
  }

  return elementInElements;
}
