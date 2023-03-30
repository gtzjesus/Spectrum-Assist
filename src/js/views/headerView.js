/**
 * HEADER IMPLEMENTATION FILE
 */

import View from './View';
import spectrum from '../../imgs/logo.png';
import search from '../../imgs/search.png';

class HeaderView extends View {
  //// GRAB PARENT ELEMENT TO DISPLAY HTML MARKUP
  _parentElement = window.document.querySelector('.header');
  //// GENERATE THE MARKUP THAT RETURNS THE HTML TO RENDER
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
        <div class="mobile-title">
            <span>Start by searching for a tutorial <br /> <span class="ie">(i.e. like for like swap dvr)</span></span>
        </div>
        <div class="search">
            <form>
            <div>
            <input
                type="text"
                class="search__field"
                placeholder="tutorials"
            />
            </div>
            <div>
            <button
            type="submit" class="btn">
                <div class="search__btn">
                    <span>search</span>
                    <span><img src="${search}" /></span>
                </div>
            </button>
            </div>
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
