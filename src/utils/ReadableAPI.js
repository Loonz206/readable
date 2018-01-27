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
export const getAllCategories = () =>
  fetch(`${api}/categories/`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

/*
Posts ---->>
*/

//get all posts (meant for the default view)
export const getAllPosts = () => 
    fetch(`${api}/posts`, { 
        headers
    })
    .then(res => res.json())
    .then(data => data.json)

//get all posts in a category, used for category views    
export const getAllPostsByCategory = (category) =>
    fetch(`${api}/${category}/posts`, { 
        headers
    })
    .then(res => res.json())
    .then(data => data.json)
      
//change voteScore for post    
export const voteOnPostById = (id, vote) =>
    fetch(`${api}/posts/${id}`, { 
        method: 'POST', 
        headers, 
        body: JSON.stringify({ option: vote }) 
    })
    .then(res => res.json())
    .then(data => data.json)   

//add new post    
export const addNewPost = (data) =>
    fetch(`${api}/posts`, { 
        method: 'POST', 
        headers, 
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => data.json)

//get a single post by id    
export const getPostById = (id) =>
    fetch(`${api}/posts/${id}`, { 
        headers 
    })
    .then(res => res.json())
    .then(data => data.json)  
    
//edit post
export const editPostById = (data, id) =>
    fetch(`${api}/posts/${id}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => data.json())    

//delete a single post    
export const deletePostById = (id) =>
    fetch(`${api}/posts/${id}`, { 
        method: 'DELETE', 
        headers 
    })
    .then(res => res.json())
    .then(data => data.json)         

/*
Comments ---->>
*/

export const getCommentById = (id) =>
    fetch(`${api}/posts/${id}`, { 
        headers 
    })
    .then(res => res.json())
    .then(data => data.json)         