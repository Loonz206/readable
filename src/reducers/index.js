//Reducers
import { combineReducers } from 'redux';

const categories = (state = { categories: [] }, action) => {
    switch (action.type) {
      case 'GET_CATEGORIES':
        return {
          ...state,
          categories: action.categories
        }
      default:
        return state
    }
}

const getAllPosts = ( state = { posts: [] }, action) => {
   switch (action.type) {
     case 'RECEIVE_POSTS': 
        return {
          ...state,
          categories: action.categories
        }
        default:
          return state
   }
}


export default combineReducers({
    categories,
    getAllPosts
});