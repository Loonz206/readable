import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/index';
import Post from '../../components/Post/Post';

class DefaultView extends Component {

    componentDidMount(){
        this.props.getPosts();
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
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
            </div>
        )
    }
} 
    
const mapStateToProps = ({ posts }) => ({
    posts: posts.posts
});

const mapDispatchToProps = (dispatch) => ({
    getPosts: () => dispatch(fetchPosts())
});


export default connect(mapStateToProps, mapDispatchToProps)(DefaultView);
