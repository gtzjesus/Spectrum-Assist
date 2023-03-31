import { API_URL, KEY } from './config';
import { AJAX } from './helpers/ajax';

/**
 * CREATES OUR OWN STATE OBJECT WITH ALL DATA FROM SPECTRUM API
 */
export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
  },
};
/**
 * GRABS ALL DATA FROM API AND IT IS STORED INTO OUR RECIPE OBJECT
 * @param {Object} data INDIVIDUAL RESULT FOR EACH API TUTORIAL
 */
export const createTutorialObject = function (data) {
  const { recipe } = data.data;
  return {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    image: recipe.image_url,
    ingredients: recipe.ingredients,
  };
};
/**
 * LOADING SEARCH RESULTS FROM QUERY GIVEN
 * @param {String} ID OBTAINED FROM URL
 */
export const loadTutorial = async function (id) {
  try {
    const data = await AJAX(`${API_URL}${id}?key=${KEY}`);
    console.log('this is the data', data);
    state.recipe = createTutorialObject(data);
    console.log('this is our own state', state.recipe);
  } catch (error) {
    console.log(error);
  }
};
