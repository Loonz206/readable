import React, { Component } from 'react';

class Footer extends Component {
    render () {
        return (
            <footer>
                <hr/>
                <p className="center">Created with React | Copyright {this.props.date.getFullYear()}</p>
            </footer>
        )
    }
}

export default Footer;