class CardsListItem {

  static _template = document.querySelector('#template-item-card').content;

  constructor(container) {
    this._container = container;
  }

  render() {
    // this._view = CardsList._template.cloneNode(true).children[0];
    // this._container.prepend(this._view);
  }

}

export default CardsListItem;