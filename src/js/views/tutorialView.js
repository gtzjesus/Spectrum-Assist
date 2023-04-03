import View from './View';
import fracty from 'fracty';
import checkmark from '../../imgs/checkmark.png';

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
        <img src="${this._data.image}" alt="${
      this._data.title
    }" class="tutorial__img" />
        <h1 class="tutorial__title">
        <span>${this._data.title}</span>
        </h1>
    </figure>

    <div class="recipe__ingredients">
        <h2 class="heading--2">Troubleshooting</h2>
        <ul class="recipe__ingredient-list">
        ${this._data.ingredients.map(this._generateMarkupIngredient).join('')}
        </ul>
    </div>
    `;
  }

  _generateMarkupIngredient(ingredient) {
    return ` 
        <li class="recipe__ingredient">
            <a class="recipe__description">
                <img src="${checkmark}" />
                <span>${ingredient.description}</span>
            </a
        </li>
        
        `;
  }
}
export default new TutorialView();
