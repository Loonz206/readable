import React from 'react';
import { Link } from 'react-router-dom';
import Postlist from '../../containers/Postlist';

const Default = (props) => (
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
        <Postlist />
    </div>
)

export default Default;
