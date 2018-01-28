//ReadableAPI
const api = process.env.URL_KEY || 'http://localhost:3001'

let token = localStorage.token;
if ( !token ) {
    token = localStorage.token = Math.random().toString(36).substr(-8);
}

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

/*
Categories ---->>
*/

// Get all categories (passed to the navigation)
export const getAllCategories = () =>
  fetch(`${api}/categories/`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

/*
Posts ---->>
*/

// Get all posts (meant for the default view)
export const getAllPosts = () => 
    fetch(`${api}/posts`, { headers })
    .then(res => res.json())

