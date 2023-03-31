export default class View {
  _data;

  /**
   * Render the received object to the DOM
   * @param {Object | Object[]} data The data to be rendered (e.g. recipe)
   * @param {boolean} [render=true] If false, create markup string instead of rendering to the DOM
   * @returns {undefined | string} A markup string is returned if render=false
   * @this {Object} View instance
   * @author Jesus Gutierrez
   */
  render(data, render = true) {
    //// SET OUR DATA TO API's AQUIRED DATA
    this._data = data;
    //// GENERATE THE MARKUP HTML
    const markup = this._generateMarkup();
    if (!render) return markup;
    this._clear();
    //// INSERT OUR RECEIVED HTML MARKUP INTO HTML
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  /**
   * UPDATE THE DOM WITH APPROPRIATE DATA
   * @param {Object} data The data to be UPDATED (e.g. recipe)
   * @this {Object} View instance
   */
  update(data) {
    this._data = data;
    const markup = this._generateMarkup();

    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const currentElements = Array.from(
      this._parentElement.querySelectorAll('*')
    );

    newElements.forEach((newElement, index) => {
      const currentElement = currentElements[index];
      console.log(currentElement, newElement.isEqualNode(currentElement));

      //// UPDATING THE CHANGED TEXT
      if (
        !newElement.isEqualNode(currentElement) &&
        newElement.firstChild?.nodeValue.trim() !== ''
      ) {
        console.log(newElement.firstChild.nodeValue.trim());
        currentElement.textContent = newElement.textContent;
      }

      //// UPDATING THE CHANGED ATTRIBUTES
      if (!newElement.isEqualNode(currentElement))
        Array.from(newElement.attributes).forEach((attr) =>
          currentElement.setAttribute(attr.name, attr.value)
        );
    });
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }
}
