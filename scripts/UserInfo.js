export default class UserInfo {
  constructor(name, about) {
    this._name = name.textContent;
    this._about = about.textContent;
    // console.log(this._name, this._about)
  }
  getUserInfo() {
    this._userInfo = {};
    this._userInfo.name = this._name;
    this._userInfo.about = this._about;
    return this._userInfo;
  }
  setUserInfo() {
    this._name = this._userInfo.name;
    this._about = this._userInfo.name;
    console.log(this._name, this._about)
  }
}