export default class UserInfo {
  constructor({ profileName, profileAbout }) {
    this._profileName = document.querySelector(profileName); // селектор имя
    this._profileAbout = document.querySelector(profileAbout); //селектор обо мне
    this._profileAvatar = document.querySelector(profileAvatar); // селектор аватара
  }

  getUserInfo() {
    // console.log('get User')
    const info = {};
    info.human = this._profileName.textContent;
    info.occupation = this._profileAbout.textContent;
    
    return info;
  }
  setUserInfo({ human, occupation }) {
    if (human) {
      this._profileName.textContent = human;
    }
    if (occupation) {
      this._profileAbout.textContent = occupation;
    }
    if (avatar) {
      this._profileAvatar.src = avatar; 
    }
  }
}
