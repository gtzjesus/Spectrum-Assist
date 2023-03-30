import View from './View';
import spectrum from '../../imgs/logo.png';
import search from '../../imgs/search.png';

class HeaderView extends View {
  _parentElement = window.document.querySelector('.header');

  _generateMarkup() {
    return `
        <div class="logo">
            <img src="${spectrum}" />
        </div>

        <button
          class="mobile__nav__toggle"
          aria-controls="primary__navigation"
          aria-expanded="false"
        ></button>
        
        <nav   
        id="primary__navigation"
        data-visible="false"
        class="primary__navigation flex">
        <div class="search">
            <form>
            <input
                type="text"
                class="search__field"
                placeholder="tutorials"
            />
            <button
             
            type="submit" class="btn">
                <div class="search__btn">
                    <span>search</span>
                    <span><img src="${search}" /></span>
                </div>
            </button>
            </form>
        </div>

        <div class="links__container">
            <ul class="links">
                <li class="link"><a>tutorials</a></li>
                <li class="link"><a>bookmarks</a></li>
            </ul>
        </div>
        <nav>

    `;
  }
}

export default new HeaderView();
