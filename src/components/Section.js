export default class Section {
  constructor(renderer, cardsContainerSelector) {
    this._renderer = renderer;
    this._cardsContainerSelector = document.querySelector(cardsContainerSelector);
  }

  renderItem(item) {
    this._cardsContainerSelector.append(this._renderer(item));
  }

  addItem(item) {
    this._cardsContainerSelector.prepend(this._renderer(item));
  }

  addCards(items) {
    items.forEach(element => {
      this.renderItem(element);
    })
  }
}