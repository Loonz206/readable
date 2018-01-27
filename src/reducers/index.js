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

const posts = ( state = { posts: [] }, action) => {
   switch (action.type) {
     case 'GET_POSTS': 
        return {
          ...state,
          categories: action.posts
        }
        default:
          return state;
   }
}

function makeObj (items) {
  const newObj = {};
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const itemId = item.id;
    newObj[itemId] = item;
  }
  return newObj;
}

function receiveComments (state = {}, action) {
  switch (action.type) {
    case 'GET_COMMENTS':
      return { 
        ...state, 
        ...makeObj(action.comments) 
      }
    default:
      return state;
  }
}


export default combineReducers({
    categories,
    posts,
    receiveComments
});
