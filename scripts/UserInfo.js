export default class UserInfo {
  constructor(title, about) {
    this._name = title;
    this._about = about;
  }

  getUserInfo() {
    return {
      title: this._name.textContent,
      about: this._about.textContent,
    }
  }

  setUserInfo(data) {
    this._name.textContent = data.title;
    this._about.textContent = data.about;
  }

}