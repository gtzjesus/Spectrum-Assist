import View from './View';

class TutorialView extends View {
  _parentElement = document.querySelector('.tutorial');

  addHandlerRender(handler) {
    ['hashchange', 'load'].forEach((ev) =>
      window.addEventListener(ev, handler)
    );
  }

  _generateMarkup() {
    return `
    <figure class="tutorial__fig">
        <img src="${this._data.image}" alt="${this._data.title}" class="tutorial__img" />
        <h1 class="tutorial__title">
        <span>${this._data.title}</span>

        </h1>
    </figure>
    `;
  }
}
export default new TutorialView();
