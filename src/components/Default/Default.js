import React, { Component } from 'react';

class Default extends Component {
    render () {
        return (
            <div className="default-container">
                <h1>Welcome to Readable</h1>
                <h2>Posts</h2>
                <hr/>
                <div className="post-container">
                    <article>
                        <h3><a href="">Some Post</a></h3>
                        <small>author | timeStamp | voteScore</small>
                        <p>Maecenas sed diam eget risus varius blandit sit amet non 
                            magna. Vivamus sagittis lacus vel augue laoreet rutrum 
                            faucibus dolor auctor.</p>
                    </article>

                    <article>
                        <h3><a href="">Some Post</a></h3>
                        <small>author | timeStamp | voteScore</small>
                        <p>Maecenas sed diam eget risus varius blandit sit amet non 
                            magna. Vivamus sagittis lacus vel augue laoreet rutrum 
                            faucibus dolor auctor.</p>
                    </article>
                </div>
            </div>
        )
    }
}

export default Default;