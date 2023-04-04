class Section {
  constructor(renderer, cardsContainer) {
    this._renderer = renderer;
    this._cardsContainer = cardsContainer;
  }

  renderItem(items) {
    this._items = items;
    this._items.forEach(item => {
      this.addItem(item);
    });
  }

  addItem(element) {
    this._cardsContainer.prepend(this._renderer(element));
  };
}

export default Section;