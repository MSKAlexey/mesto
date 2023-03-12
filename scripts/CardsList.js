class CardsList {

  static _template = document.querySelector('#template-list-card').content;

  constructor(items, createCardsListItem) {
    this._items = items;
    this._createCardsListItem = createCardsListItem;
  }

  render = (container) => {
    this._view = CardsList._template.cloneNode(true).children[0];

    // this._items.forEach(item => this._createCardsListItem(this._view.querySelector('.cards')).render());

    container.prepend(this._view);
  }

}

export default CardsList;