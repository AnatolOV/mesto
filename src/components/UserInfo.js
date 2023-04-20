export default class UserInfo {
  constructor({ profileName, profileAbout }) {
    this._profileName = document.querySelector(profileName); // селектор имя
    this._profileAbout = document.querySelector(profileAbout); //селектор обо мне
  }

  getUserInfo() {
    this.info = {};
    // console.log(this._profileName.textContent);
    // console.log(this._profileAbout.textContent);
    this.info.human = this._profileName.textContent;
    this.info.occupation = this._profileAbout.textContent;
    // console.log(this.info)
    return this.info;
  }
  setUserInfo({ human, occupation }) {
    if (human) {
      this._profileName.textContent = human;
    }
    if (occupation) {
      this._profileAbout.textContent = occupation;
    }
  }
}
