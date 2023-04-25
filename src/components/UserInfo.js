export default class UserInfo {
  constructor({ name, about }) {
    this._name = document.querySelector(name);
    this._about = document.querySelector(about);
    // console.log(this._name, this._about)

  }

  getUserInfo(data) {
    console.log(data)
    return {
      title: data.name,
      about: data.about,
    }
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._about.textContent = data.about;
  }

}