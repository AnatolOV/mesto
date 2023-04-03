export default class Card {
  constructor(data, objectOfSettings, handleCardClick) {
    this._objectOfSettings = objectOfSettings;
    this._link = data.link;
    this._name = data.name;
    this._handleCardClick = handleCardClick;
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
    return this.element;
  }

  _handleCardLike() {
    this.likeButton.classList.toggle(
      `${this._objectOfSettings.classLikeButtonActive}`
    );
  }
  _handleDelete() {
    this.cardElement.remove();
  }
  _clickOnImg() {
    this._handleCardClick();
    this.imageInPopUp = document.querySelector(
      `.${this._objectOfSettings.classImgInPopUp}`
    );
    this.imageInPopUp.src = this._link;
    this._namePopUpImage = document.querySelector(
      `.${this._objectOfSettings.classNameOfImgInPopup}`
    );
    this._namePopUpImage.textContent = this._name;
  }
  _setEventListeners() {
    this.cardImage.addEventListener('click', () => this._clickOnImg());
    this.likeButton.addEventListener('click', () => this._handleCardLike());
    this.elementRemove.addEventListener('click', () => this._handleDelete());
  }
}
