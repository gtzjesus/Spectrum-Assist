import headerView from './views/headerView';
import resultsView from './views/resultsView';
import tutorialView from './views/tutorialView';
import * as model from './model.js';
import { async } from 'regenerator-runtime';

const controlTutorials = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    //// 2) LOADING TUTORIAL
    await model.loadTutorial(id);
    console.log(model.state.recipe);
    //// 3) RENDERING TUTORIAL
    tutorialView.render(model.state.recipe);
  } catch (error) {
    console.log(error);
  }
};

const init = function () {
  headerView.render();
  tutorialView.addHandlerRender(controlTutorials);
};

init();
