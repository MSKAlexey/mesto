class Section {
  constructor({ items, renderer }, cardsContainer) {
    this._items = items;
    console.log(this._items)
    this._renderer = renderer;
    this._cardsContainer = cardsContainer;
  }

  addItem() {
    this._items.forEach((item) => {
      this._cardsContainer.prepend(generateCardToPage(item));
    });
  };
}

export default Section;