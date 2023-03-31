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

    `;
  }
}

export default new HeaderView();
