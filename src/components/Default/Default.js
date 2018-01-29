import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Post from '../Post/Post';

class Default extends Component {

    componentDidMount(){
    } 
    
    render () {

        return (
            <div className="default-container">
                <h1>Welcome to Readable</h1>
                <h2>Posts</h2>
                <Link to='/create-post'>
                    <button>Add Post</button>
                </Link>
                <br/>
                <label htmlFor="">Filter by: </label>
                <select name="" id="">
                    <option value="">timeStamp</option>
                    <option value="">voteScore</option>
                </select>
                <hr/>
                <div className="post-container">
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
        )
    }
}

export default Default;