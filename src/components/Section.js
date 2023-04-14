export default class Section {
  constructor(renderer, cardsContainer) {
    this._renderer = renderer;
    this._cardsContainer = cardsContainer;
  }

  renderer(element) {
    this._cardsContainer.prepend(this._renderer(element));
  }

  addItem(element) {
    this.renderer(element);
  }

  addCards(items) {
    items.forEach(element => {
      this.renderer(element);
    })
  }
}