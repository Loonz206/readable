import React from 'react';

const PostDetailView = (props) => (
    <article>
        <h3><a href="">title</a></h3>
        <small>author | timeStamp | voteScore</small>
        <p>Body. Maecenas sed diam eget risus varius blandit sit amet non magna. 
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
        Nulla vitae elit libero, a pharetra augue.</p>
        <div className="controls">
            edit | delete | comment
        </div>
        <div className="comments">
            comments
        </div>
    </article>
)

export default PostDetailView;