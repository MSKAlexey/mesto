class CardsList {

  static _template = document.querySelector('#template-list-card').content;

  constructor(items) {
    this._items = items;
  }

  render = (container) => {
    this._view = CardsList._template.cloneNode(true).children[0];
    container.prepend(this._view);
  }

}

export default CardsList;