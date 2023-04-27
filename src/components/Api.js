export default class Api {
  constructor() {
    this._url = "https://mesto.nomoreparties.co/v1/cohort-64/";
    this._headers = {
      authorization: "45c7ab21-c601-4d3e-824d-76630cdc55cf",
      "Content-Type": "application/json",
    };
  }

  _checkStatusResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Произошла ошибка`);
  }

  getInitialCards() {
    return fetch(`${this._url}cards`,
      {
        method: "GET",
        headers: this._headers,
      }).then(this._checkStatusResponse);
  }

  addCard({ name, link }) {
    return fetch(`${this._url}cards`,
      {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify({
          name: name,
          link: link,
        })
      }).then(this._checkStatusResponse);
  }

  deleteCard(id) {
    return fetch(`${this._url}cards/${id}`,
      {
        method: "DELETE",
        headers: this._headers,
      }).then(this._checkStatusResponse);
  }

  getUserInfo() {
    return fetch(`${this._url}users/me`,
      {
        method: "GET",
        headers: this._headers,
      }).then(this._checkStatusResponse);
  }

  changeUserInfo({ title, about }) {
    return fetch(`${this._url}users/me`,
      {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          name: title,
          about: about,
        })
      }).then(this._checkStatusResponse);
  }

  changeUserAvatar(avatar) {
    return fetch(`${this._url}users/me`,
      {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify(avatar)
      }).then(this._checkStatusResponse);
  }

  addLike(cardId) {
    return fetch(`${this._url}cards/likes/${cardId}`,
      {
        method: "PUT",
        headers: this._headers,
      }).then(this._checkStatusResponse);
  }

  deleteLike(cardId) {
    return fetch(`${this._url}cards/likes/${cardId}`,
      {
        method: "DELETE",
        headers: this._headers,
      }).then(this._checkStatusResponse);
  }

}