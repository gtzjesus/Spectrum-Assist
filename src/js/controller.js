import headerView from './views/headerView';
import resultsView from './views/resultsView';
import tutorialView from './views/tutorialView';
import * as model from './model.js';
import { async } from 'regenerator-runtime';
import searchView from './views/searchView';

/**
 *  CONTROLLING INDIVIDUAL TUTORIAL
 */
const controlTutorials = async function () {
  try {
    ////  GRAB ID FROM URL
    const id = window.location.hash.slice(1);
    if (!id) return;
    //// 0) UPDATE RESULTS VIEW TO MARK SELECTED SEARCH RESULTS
    // resultsView.update(model.getSearchResultsPage());
    //// 2) LOADING TUTORIAL (from model)
    await model.loadTutorial(id);
    //// 3) RENDERING TUTORIAL
    tutorialView.render(model.state.recipe);
  } catch (error) {
    console.log(error);
  }
};
/**
 * CONTROLLING SEARCH RESULTS
 */
const controlSearchResults = async function () {
  try {
    //// 1) GET SEARCH QUERY
    const query = searchView.getQuery();
    if (!query) return;
    //// 2) LOAD SEARCH RESULTS
    await model.loadSearchResults(query);
    //// 3) RENDER THE RESULTS
    resultsView.render(model.state.search.results);
  } catch (error) {
    console.log(error);
  }
};
const init = function () {
  // headerView.render();
  tutorialView.addHandlerRender(controlTutorials);
  searchView.addHandlerSearch(controlSearchResults);
};

init();
