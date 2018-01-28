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
        return state;
    }
}

const posts = ( state = {}, action) => {
  switch (action.type) {
    case 'GET_POSTS':
      return {
        ...state,
        posts: action.posts.filter(post => post.deleted === false)
      }
    default:
      return state;
  }
}

export default combineReducers({
    categories,
    posts
});
