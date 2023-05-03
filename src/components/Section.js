export default class Section {
  constructor({items}, selector) {
    this._itemsData = items;    

    this._container = document.querySelector(selector);
  }

  renderItems({renderer}) {
    this._renderer = renderer;
    this._itemsData.forEach((item) => this._renderer(item));
  }
  addItem(element) {
    this._container.prepend(element);
  }
}
