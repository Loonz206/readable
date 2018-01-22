import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Default extends Component {

    componentDidMount() {
        //console.log(this.props); 
    }

    render () {
        return (
            <div className="default-container">
                <h1>Welcome to Readable</h1>
                <h2>Posts</h2>
                <NavLink to='/create-post'>
                    <button>Add Post</button>
                </NavLink>
                <br/>
                <label htmlFor="">Filter by: </label>
                <select name="" id="">
                    <option value="">timeStamp</option>
                    <option value="">voteScore</option>
                </select>
                <hr/>
                <div className="post-container">
                    <article>
                        <h3><a href="">Some Post</a></h3>
                        <small>author | timeStamp | voteScore</small>
                        <p>Maecenas sed diam eget risus varius blandit sit amet non 
                            magna. Vivamus sagittis lacus vel augue laoreet rutrum 
                            faucibus dolor auctor.
                            Maecenas sed diam eget risus varius blandit sit amet non 
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