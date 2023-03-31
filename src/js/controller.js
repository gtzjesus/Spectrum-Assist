import headerView from './views/headerView';
import resultsView from './views/resultsView';
import tutorialView from './views/tutorialView';
import * as model from './model.js';
import { async } from 'regenerator-runtime';
import searchView from './views/searchView';

const controlTutorials = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    //// 0) UPDATE RESULTS VIEW TO MARK SELECTED SEARCH RESULTS
    // resultsView.update(model.getSearchResultsPage());

    //// 2) LOADING TUTORIAL
    await model.loadTutorial(id);
    //// 3) RENDERING TUTORIAL
    tutorialView.render(model.state.recipe);
  } catch (error) {
    console.log(error);
  }
};

const controlSearchResults = async function () {
  try {
    //// 1) GET SEARCH QUERY
    const query = searchView.getQuery();
    console.log(query);
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
