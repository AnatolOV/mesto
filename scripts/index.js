//pop-up для редактирования профиля
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

function openPopUpEdit() {
  popUpBoxEdit.classList.add('pop-up__open');
  popUpNameHuman.value = profileName.textContent;
  popUpOccupationHuman.value = profileProfession.textContent;
}

function closePopUpEdit() {
  popUpBoxEdit.classList.remove('pop-up__open');
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
const popUpAddNamePlace = popUpAddBox.querySelector('.pop-up__field_name_place');
const popUpAddReferenceImage = popUpAddBox.querySelector(
  '.pop-up__field_reference_image'
);
popUpAddNamePlace.placeholder = 'Название';
popUpAddReferenceImage.placeholder = 'Ссылка на картинку';
const popUpAddForm = popUpAddBox.querySelector('.pop-up__form');
let elemetTemplate;
let elementInElements;

function openPopUpAdd() {
  popUpAddBox.classList.add('pop-up__open');  
}
addCardsButton.addEventListener('click', openPopUpAdd);

function closePopUpAdd() {
  popUpAddBox.classList.remove('pop-up__open');
  popUpAddReferenceImage.value = '';
  popUpAddNamePlace.value = '';
}
popUpAddClose.addEventListener('click', closePopUpAdd);

function handleFormSubmitAdd(evt) {
  evt.preventDefault();
  if (popUpAddNamePlace.value != '' && popUpAddReferenceImage.value != '') {
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
      e.addEventListener('click', () =>
        e.closest('.elements__element').remove()
      )
    );

    cards = document.querySelectorAll('.elements__image');

    cards.forEach((e) =>
      e.addEventListener('click', (e) => {
        let cards = document.querySelectorAll('.elements__image');
        popUpImage.classList.add('pop-up__open');
        imageInPopUp.src = e.target.src;
        imageInPopUp.alt = e.target.alt;
        namePopUpImage.textContent = e.target
          .closest('.elements__element')
          .querySelector('.elements__name').textContent;
      })
    );

    like = document.querySelectorAll('.elements__like');
    like.forEach((e) =>
      e.addEventListener('click', (e) => {
        e.target.classList.toggle('elements__like_active');
      })
    );
  }
  closePopUpAdd();
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
cards = document.querySelectorAll('.elements__image');

// удаление карточек по нажатию на корзину
let elementRemove = Array.from(document.querySelectorAll('.elements__bin'));
elementRemove.forEach((e) =>
  e.addEventListener('click', () => e.closest('.elements__element').remove())
);

//ставим лайки по нажатию на сердечко
let like = document.querySelectorAll('.elements__like');
like.forEach((e) =>
  e.addEventListener('click', (e) => {
    console.log(e.target), e.target.classList.toggle('elements__like_active');
  })
);

cards.forEach((e) =>
  e.addEventListener('click', (e) => {
    let cards = document.querySelectorAll('.elements__image');
    popUpImage.classList.add('pop-up__open');
    imageInPopUp.src = e.target.src;
    imageInPopUp.alt = e.target.alt;
    namePopUpImage.textContent = e.target
      .closest('.elements__element')
      .querySelector('.elements__name').textContent;
  })
);

function closePopImage() {
  popUpImage.classList.remove('pop-up__open');
}

popUpImageClose.addEventListener('click', (e) => closePopImage());
