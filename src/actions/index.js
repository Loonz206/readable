//Actions
import {
    getAllCategories,
    getAllPosts,
    getCommentById
} from '../utils/ReadableAPI';

export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_POSTS = 'GET_POSTS';
export const GET_COMMENTS = 'GET_COMMENTS';

export const getCategories = (categories) => ({
    type: GET_CATEGORIES,
    categories
});

export const getPosts = (posts) => ({
    type: GET_POSTS,
    posts
});

export const getComments = (comments) => ({
    type: GET_COMMENTS,
    comments
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

export const fetchComments = () => dispatch => (
    getCommentById()
        .then(comments => dispatch(getComments(comments))) 
);




  


