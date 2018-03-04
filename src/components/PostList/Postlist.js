import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/index';
//import Post from '../components/Post/Post';

class Postlist extends Component {

    componentDidMount(){
        this.props.getPosts();
    }

    render () {

        const { posts } = this.props;
        console.log('Posts:', posts, typeof posts);

        return (
            <h1>Hello World</h1>
        )
    }
}

const mapStateToProps = ({ posts }) => ({
    posts: posts.posts
});

const mapDispatchToProps = (dispatch) => ({
    getPosts: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Postlist);
