export default class UserInfo {
  constructor({ name, about }) {
    this._name = document.querySelector(name);
    this._about = document.querySelector(about);
  }

  getUserInfo(data) {
    return {
      title: data.name,
      about: data.about,
    }
  }

  setUserInfo(data) {
    console.log(data)
    this._name.textContent = data.name;
    this._about.textContent = data.about;
  }

}