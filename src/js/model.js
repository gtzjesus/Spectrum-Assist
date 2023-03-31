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
    state.recipe = createTutorialObject(data);
  } catch (error) {
    console.log(error);
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;

    const data = await AJAX(`${API_URL}?search=${query}&key=${KEY}`);
    console.log(data);

    state.search.results = data.data.recipes.map((rec) => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
        ...(rec.key && { key: rec.key }),
      };
    });
  } catch (error) {
    console.log(error);
  }
};
