//Actions
import {
    getAllCategories,
    getAllPosts
} from '../utils/ReadableAPI';

export const GET_CATEGORIES = 'GET_CATEGORIES';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const getCategories = (categories) => ({
    type: GET_CATEGORIES,
    categories
});

export const receivePosts = (posts) => ({
    type: RECEIVE_POSTS,
    posts
});

export const getPosts = () => dispatch => {
    getAllPosts()
        .then(posts => dispatch(receivePosts(posts)))
  }

//get all categories
export const fetchCategories = () => dispatch => (
    getAllCategories()
      .then(categories => dispatch(getCategories(categories)))
);


  


