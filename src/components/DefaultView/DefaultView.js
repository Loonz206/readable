import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/index';
import { formatTimestamp } from '../../utils/Utils';

class DefaultView extends Component {

    componentDidMount(){
        this.props.getPosts();
    }

    render () {

        // Short-hand categories from props
        const { posts } = this.props;
        // Map over the categories into a list which will be links bearing the url and name of categories
        const postList = posts.map((post, index) => {
            return (
                <article key={index}>
                    <h3><a href="">{post.title}</a></h3>
                    <small>{post.id}</small>
                    <p className="small-caps">{post.author} | {formatTimestamp(post.timestamp)} | {post.category} | {post.voteScore}</p>
                    <p>{post.body}</p>
                </article>
            )
        });

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
                    <option value="">timestamp</option>
                    <option value="">voteScore</option>
                </select>
                <hr/>
                <div className="post-container">
                    {postList}
                </div>
            </div>
        )
    }
} 
    
const mapStateToProps = ({ posts }) => ({
    posts: posts.posts || []
});

const mapDispatchToProps = (dispatch) => ({
    getPosts: () => dispatch(fetchPosts())
});


export default connect(mapStateToProps, mapDispatchToProps)(DefaultView);
