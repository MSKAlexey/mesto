export default class Section {
  constructor(renderer, cardsContainer) {
    this._renderer = renderer;
    this._cardsContainer = document.querySelector(cardsContainer);
  }

  renderItem(item) {
    this.addItem(this._renderer(item));
  }

  addItem(element) {
    this._cardsContainer.prepend(element);
  }

  addCards(items) {
    items.forEach(element => {
      this.renderItem(element);
    })
  }
}