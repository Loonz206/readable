import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class Postlist extends Component {

    componentDidMount(){
        this.props.getPosts();
    }

    render () {
        return (
            <h1>Hello This is postlist</h1>
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
