export default class Section {
  constructor({ items, renderer }, cardsContainer) {
    this._items = items;
    this._renderer = renderer;
    this._cardsContainer = cardsContainer;
  }

  renderer(element) {
    this._cardsContainer.prepend(this._renderer(element));
  }

  addItem(element) {
    this.renderer(element);
  }

  addCards() {
    this._items.forEach(element => {
      this.renderer(element);
    })
  }
}