//Reducers
import { combineReducers } from 'redux';
import { GET_CATEGORIES } from '../actions';

const categories = (state = { categories: [] }, action) => {
    switch(action.type) {
      case 'GET_CATEGORIES':
        return {
          ...state,
          categories: action.categories
        }
      default:
        return state
    }
}

export default combineReducers({
    categories
});