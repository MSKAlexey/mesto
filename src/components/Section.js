export default class Section {
  constructor(renderer, cardsContainerSelector) {
    this._renderer = renderer;
    this._cardsContainerSelector = document.querySelector(cardsContainerSelector);
  }

  renderItem(item) {
    this.addItem(this._renderer(item));
  }

  addItem(element) {
    this._cardsContainerSelector.prepend(element);
  }

  addCards(items) {
    items.forEach(element => {
      this.renderItem(element);
    })
  }
}