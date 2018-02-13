import React from 'react';

const Footer = (props) => (
    <footer className="container">
        <hr/>
        <p className="center">Created with React | Copyright {props.date.getFullYear()}</p>
    </footer>
)

export default Footer;