let popUpBox = document.querySelector(".pop-up");
let profileEditButton = document.querySelector(".profile__edit-button");
let popUpClose = document.querySelector(".pop-up__close");
let profileName = document.querySelector(".profile__name");
let profileProfession = document.querySelector(".profile__profession");
let popUpNameHuman = document.querySelector(".pop-up__field_name_human");
let popUpOccupationHuman = document.querySelector(
  ".pop-up__field_name_occupation"
);

function openPopUp() {
  popUpBox.classList.add("pop-up_active");
  popUpNameHuman.value = profileName.textContent;
  popUpOccupationHuman.value = profileProfession.textContent;
}

function closePopUp() {
  popUpBox.classList.remove("pop-up_active");
}

profileEditButton.addEventListener("click", openPopUp);

popUpClose.addEventListener("click", closePopUp);

let popUpForm = document.querySelector(".pop-up__form");

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = popUpNameHuman.value;
  profileProfession.textContent = popUpOccupationHuman.value;
  closePopUp();
}

popUpForm.addEventListener("submit", handleFormSubmit);
