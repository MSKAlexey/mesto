class Section {
  constructor({ renderer }, cardsContainer) {
    this._renderer = renderer;
    this._cardsContainer = cardsContainer;
    console.log(this._cardsContainer)
    console.log(this._renderer)
  }

  renderItem(items) {
    this._items = items;
    this._items.forEach(item => {
      this._renderer(item);
    });
  }

  addItem(element) {
    this._cardsContainer.prepend(element);
  };
}

export default Section;