export default class UserInfo {
  constructor(name, about) {
    this._name = name;
    this._about = about;
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      about: this._about.textContent,
    }
  }

  setUserInfo() {
    profileName.textContent = this._name.textContent;
    profileAboutMe.textContent = this._about.textContent;

  }

}