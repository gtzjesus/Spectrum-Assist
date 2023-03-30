class View {
  _parentElement = document.querySelector('.results-view');
  render() {
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}

export default new View();
