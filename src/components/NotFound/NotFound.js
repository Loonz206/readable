import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = (props) => (
    <div className="not-found">
        <h1>Page Not Found</h1>
        <p>Sorry, but the page you are were trying to view does not exist.</p>
        <picture>
                <img src="https://media.giphy.com/media/joV1k1sNOT5xC/giphy.gif" alt="Cat Scratching Arms"/>
        </picture>
        <br/>
        <Link className="close-search" to="/">Close</Link>
    </div>
)

export default NotFound;