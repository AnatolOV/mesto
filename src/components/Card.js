export default class Card {
  constructor(
    data,
    userId,
    objectOfSettings,
    handleCardClick,
    handleDeleteCard,
    handleLikeCard,
    handleDeleteLikeCard
  ) {
    this._objectOfSettings = objectOfSettings;
    this._data = data;
    this._link = data.link || data.reference;
    this._name = data.name;
    this._likes = data.likes;
    this._id = data._id;
    this._owner = data.owner._id;
    this._handleCardClick = handleCardClick;
    this.handleDeleteCard = handleDeleteCard;
    this.handleLikeCard = handleLikeCard;
    this.handleDeleteLikeCard = handleDeleteLikeCard;
    this.imageInPopUp = document.querySelector(
      `.${this._objectOfSettings.classImgInPopUp}`
    );
    this._namePopUpImage = document.querySelector(
      `.${this._objectOfSettings.classNameOfImgInPopup}`
    );
    this._classForOpenPopup = this._objectOfSettings.classForOpenPopup;
    this._userId = userId;
    this._owner = data.owner._id;
    this._classActiveForColorHeart = this._objectOfSettings.classActiveForColorHeart;
    this._classForDisplayBin = this._objectOfSettings.classForDisplayBin;
  }

  _getTemplate() {
    this.cardElement = document
      .querySelector(`#${this._objectOfSettings.templateId}`)
      .content.querySelector(`.${this._objectOfSettings.classOfCard}`)
      .cloneNode(true);
    return this.cardElement;
  }

  generateCard() {
    this.element = this._getTemplate();
    this.cardImage = this.element.querySelector(
      `.${this._objectOfSettings.classOfImgInCard}`
    );
    this.cardImage.src = this._link;
    this.cardImage.alt = this._name;
    this.cardName = this.element.querySelector(
      `.${this._objectOfSettings.classOfNameCard}`
    );
    this.cardName.textContent = this._name;
    this.likeButton = this.element.querySelector(
      `.${this._objectOfSettings.classLikeCardButton}`
    );
    this.elementRemove = this.element.querySelector(
      `.${this._objectOfSettings.classRemoveCardButton}`
    );
    this._setEventListeners();
    // console.log(this._userId)

    this.element.id = this._id;
    this.likeCounter = this.element.querySelector(
      `.${this._objectOfSettings.classLikeCounter}`
    );
    this.likeCounter.textContent = this._likes.length;
    this._checkOwner();
    this._checkLikeOwner();
    // console.log(this.element);

    return this.element;
  }
  // проверяем пользователя
  _checkOwner() {
    if (this._owner == this._userId) {
      this.elementRemove.classList.add(`${this._classForDisplayBin}`);
    }
  }
  
  // проверяем есть ли мой лайк на карточке
  _checkLikeOwner() {
    // метод some проверяет условие
    if (this._likes.some((user) => this._userId === user._id)) {
      this.likeButton.classList.toggle(`${this._classActiveForColorHeart}`);
    }
  }
  // получаем id
  getId() {
    return this._data._id;
  }

  // удаление
  remove() {
    this.cardElement.remove();
    this.cardElement = null;
  }
  // добавляем или убираем лайк
  toggleLikeCard(data) {
    this._likes = data.likes;
    this.likeCounter.textContent = this._likes.length;
    this.likeButton.classList.toggle(`${this._classActiveForColorHeart}`);
  }

  _setEventListeners() {
    this.cardImage.addEventListener("click", () => {
      this._handleCardClick();
    });
    this.likeButton.addEventListener("click", () => {
      if (
        this.likeButton.classList.contains(`${this._classActiveForColorHeart}`)
      ) {
        this.handleDeleteLikeCard(this);
      } else {
        this.handleLikeCard(this);
      }
    });
    this.elementRemove.addEventListener("click", () => {
      this.handleDeleteCard(this);
    });
  }
}
