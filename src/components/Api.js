export default class Api {
  constructor() {
    this._baseUrl = "https://mesto.nomoreparties.co/v1/cohort-64/";
    this._headers = {
      authorization: "45c7ab21-c601-4d3e-824d-76630cdc55cf",
      "Content-Type": "application/json",
    };
  }

  _checkStatusResponse(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`Ошибка: ${response.status}`);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: this._headers,
    })
      .then(this._checkStatusResponse);
  }





  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
    })
      .then(this._checkStatusResponse);
  }




}