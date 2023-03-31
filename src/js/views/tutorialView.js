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
    <img src="${this._data.image}" alt="${
      this._data.title
    }" class="tutorial__img" />
    <h1 class="tutorial__title">
      <span>${this._data.title}</span>
    </h1>
  </figure>
  <div class="tutorial__details">
    <div class="tutorial__info">
      <svg class="tutorial__info-icon">
        <use href="#icon-clock"></use>
      </svg>
      <span class="tutorial__info-data tutorial__info-data--minutes">${
        this._data.cookingTime
      }</span>
      <span class="tutorial__info-text">minutes</span>
    </div>
    <div class="tutorial__info">
      <svg class="tutorial__info-icon">
        <use href="#icon-users"></use>
      </svg>
      <span class="tutorial__info-data tutorial__info-data--people">${
        this._data.servings
      }</span>
      <span class="tutorial__info-text">servings</span>
      <div class="tutorial__info-buttons">
        <button class="btn--tiny btn--update-servings" data-update-to="${
          this._data.servings - 1
        }">
          <svg>
            <use href="#icon-minus-circle"></use>
          </svg>
        </button>
        <button class="btn--tiny btn--update-servings" data-update-to="${
          this._data.servings + 1
        }">
          <svg>
            <use href="#icon-plus-circle"></use>
          </svg>
        </button>
      </div>
    </div>
    <div class="tutorial__user-generated ${this._data.key ? '' : 'hidden'}">
      <svg>
        <use href="#icon-user"></use>
      </svg>
    </div>
    <button class="btn--round btn--bookmark">
      <svg class="">
        <use href="}#icon-bookmark${
          this._data.bookmarked ? '-fill' : ''
        }"></use>
      </svg>
    </button>
  </div>
  <div class="tutorial__ingredients">
    <h2 class="heading--2">tutorial ingredients</h2>
    <ul class="tutorial__ingredient-list">
  </div>
  <div class="tutorial__directions">
    <h2 class="heading--2">How to cook it</h2>
    <p class="tutorial__directions-text">
      This tutorial was carefully designed and tested by
      <span class="tutorial__publisher">${
        this._data.publisher
      }</span>. Please check out
      directions at their website.
    </p>
    <a
      class="btn--small tutorial__btn"
      href="${this._data.sourceUrl}"
      target="_blank"
    >
      <span>Directions</span>
      <svg class="search__icon">
        <use href="#icon-arrow-right"></use>
      </svg>
    </a>
  </div>
    `;
  }
}
export default new TutorialView();
