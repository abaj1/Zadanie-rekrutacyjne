import axios from 'axios';
import {CORE_QUERY} from './constants';

export const getRecipes = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(`${CORE_QUERY}&q=chicken`);
      const {
        data: {hits},
      } = response;
      resolve(hits);
    } catch (error) {
      reject(error);
    }
  });
};
export const getFilteredRecipes = (search, diet, mealType) => {
  return new Promise(async (resolve, reject) => {
    try {
      let query = `${CORE_QUERY}&q=${search.length ? search : 'chicken'}`;
      if (diet) query += `&diet=${diet}`;
      if (mealType) query += `&mealType=${mealType}`;
      const response = await axios.get(query);
      const {
        data: {hits},
      } = response;
      resolve(hits);
    } catch (error) {
      reject(error);
    }
  });
};

export const calculateKcal = calories => (+calories / 10).toFixed(0).toString();
