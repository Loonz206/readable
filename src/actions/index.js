//Actions
import {
    getAllCategories,
    getAllPosts
} from '../utils/ReadableAPI';

export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_POSTS = 'GET_POSTS';

export const getCategories = (categories) => ({
    type: GET_CATEGORIES,
    categories
});

export const getPosts = (posts) => ({
    type: GET_POSTS,
    posts
});


//fetchNaming -- these get mentioned in the component
export const fetchCategories = () => dispatch => (
    getAllCategories()
      .then(categories => dispatch(getCategories(categories)))
);

export const fetchPosts = () => dispatch => (
    getAllPosts()
        .then(posts => dispatch(getPosts(posts)))
);





  


