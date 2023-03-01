//pop-up для редактирования профиля
let popUpBoxEdit = document.querySelector('#edit');
let profileEditButton = document.querySelector('.profile__edit-button');
let popUpClose = popUpBoxEdit.querySelector('.pop-up__close');
let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');
let popUpNameHuman = popUpBoxEdit.querySelector('.pop-up__field_name_human');
let popUpOccupationHuman = popUpBoxEdit.querySelector(
  '.pop-up__field_name_occupation'
);
let popUpFormEdit = popUpBoxEdit.querySelector('.pop-up__form');

function openPopUpEdit() {
  popUpBoxEdit.classList.add('pop-up_active');
  popUpNameHuman.value = profileName.textContent;
  popUpOccupationHuman.value = profileProfession.textContent;
}

function closePopUpEdit() {
  popUpBoxEdit.classList.remove('pop-up_active');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = popUpNameHuman.value;
  profileProfession.textContent = popUpOccupationHuman.value;
  closePopUpEdit();
}

profileEditButton.addEventListener('click', openPopUpEdit);
popUpClose.addEventListener('click', closePopUpEdit);
popUpFormEdit.addEventListener('submit', handleFormSubmit);

//pop-up для добавления карточек
let containerOfElements = document.querySelector('.elements');
let elementInContainer =
  containerOfElements.querySelectorAll('.elements__element');
let popUpAddBox = document.querySelector('#add');
let addCardsButton = document.querySelector('.profile__add-button');
let popUpAddClose = popUpAddBox.querySelector('.pop-up__close');
let popUpAddNamePlace = popUpAddBox.querySelector('.pop-up__field_name_place');
let popUpAddReferenceImage = popUpAddBox.querySelector(
  '.pop-up__field_reference_image'
);
let popUpAddForm = popUpAddBox.querySelector('.pop-up__form');
let elemetTemplate;
let elementInElements;

function openPopUpAdd() {
  popUpAddBox.classList.add('pop-up_active');
  popUpAddNamePlace.placeholder = 'Название';
  popUpAddReferenceImage.placeholder = 'Ссылка на картинку';
}
addCardsButton.addEventListener('click', openPopUpAdd);

function closePopUpAdd() {
  popUpAddBox.classList.remove('pop-up_active');
  popUpAddReferenceImage.value = '';
  popUpAddNamePlace.value = '';
}
popUpAddClose.addEventListener('click', closePopUpAdd);

function handleFormSubmitAdd(evt) {
  evt.preventDefault();
  elemetTemplate = document.querySelector('#element').content;
  elementInElements = elemetTemplate
    .querySelector('.elements__element')
    .cloneNode(true);
  elementInElements.querySelector('.elements__image').src =
    popUpAddReferenceImage.value;
  elementInElements
    .querySelector('.elements__container')
    .querySelector('.elements__name').textContent = popUpAddNamePlace.value;
  containerOfElements.prepend(elementInElements);
  elementRemove = Array.from(document.querySelectorAll('.elements__bin'));
  elementRemove.forEach((e) =>
    e.addEventListener('click', () => e.closest('.elements__element').remove())
  );
  closePopUpAdd();
}

popUpAddForm.addEventListener('submit', handleFormSubmitAdd);

// заполнение карточек информацией
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
function fillContainer(array) {
  for (let i = 0; i < array.length; i++) {
    elemetTemplate = document.querySelector('#element').content;
    elementInElements = elemetTemplate
      .querySelector('.elements__element')
      .cloneNode(true);
    elementInElements.querySelector('.elements__image').src = array[i].link;
    elementInElements
      .querySelector('.elements__container')
      .querySelector('.elements__name').textContent = array[i].name;
    containerOfElements.append(elementInElements);
  }
}
fillContainer(initialCards);

// удаление карточек

let elementRemove = Array.from(document.querySelectorAll('.elements__bin'));
elementRemove.forEach((e) =>
  e.addEventListener('click', () => e.closest('.elements__element').remove())
);

//ставим лайки
let like = document.querySelectorAll('.elements__like');
like.forEach((e) => e.addEventListener('click', (e) =>{console.log(e.target), e.target.classList.toggle('elements__like_active')}));