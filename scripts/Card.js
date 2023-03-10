class Card {
  constructor(items) {
    //    debugger;
    this._items = items;
  }

  render = (container, template) => {
    this._template = template.cloneNode(true);
    const popupOpenButtonImg = this._template.querySelector('.cards__image');
    this._template.querySelector('.cards__title').textContent = this._items.name;
    popupOpenButtonImg.src = this._items.link;
    popupOpenButtonImg.alt = this._items.name;

    this._items.forEach(element => this._template.render());

    container.prepend(this._template);

  }
}

export default Card;