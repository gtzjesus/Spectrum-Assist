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
        <div class="search">
        
            <form>
            <input
                type="text"
                class="search__field"
                placeholder="Search over 1,000,000 tutorials..."
            />
            <button class="btn">
                <span>Search</span>
                <img src="${search}" />
            </button>
            </form>
        </div>
        <div class="links__container">
            <ul class="links">
                <li class=""><a>tutorials</a></li>
                <li class=""><a>bookmarks</a></li>
            </ul>
        </div>
    `;
  }
}
export default new HeaderView();
