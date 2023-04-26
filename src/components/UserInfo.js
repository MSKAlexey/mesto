export default class UserInfo {
  constructor({ name, about, avatar }) {
    this._name = document.querySelector(name);
    this._about = document.querySelector(about);
    this._avatar = document.querySelector(avatar);
  }

  // getUserInfo(/* data */) {
  //   return {
  //     // title: data.name,
  //     // about: data.about,
  //   }
  // }

  setUserInfo(data) {
    // console.log(data.avatar)
    this._name.textContent = data.name;
    this._about.textContent = data.about;
    this._avatar.src = data.avatar;
  }
  setUserAvatar(data) {
    console.log(data.link)
    this._avatar.src = data.avatar;
  }
}