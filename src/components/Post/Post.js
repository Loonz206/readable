import React, { Component } from 'react';

class Post extends Component {
    render () {
        return (
            <article>
                <h3><a href="">some post</a></h3>
                <small>author | timeStamp | voteScore</small>
                <p>Maecenas sed diam eget risus varius blandit sit amet non magna. 
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
                Nulla vitae elit libero, a pharetra augue.</p>
            </article>
        ) 
    }
}

export default Post;