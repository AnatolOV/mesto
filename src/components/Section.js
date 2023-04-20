export default class Section {
  constructor({ items, renderer }, selector) {
    this._itemsData = items;
    this._renderer = renderer;

    this._container = document.querySelector(selector);
  }

  renderItems() {
    this._itemsData.forEach((item) => this._renderer(item));
  }
  addItem(element) {
    this._container.append(element);
    // console.log('method addItem')
  }
}
