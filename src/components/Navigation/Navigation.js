import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCategories } from '../../actions/index';

class Navigation extends Component {

    componentDidMount() {
        this.props.getCategories();
    }

    render () {
        //short-hand categories from props
        const { categories } = this.props;
        //map over the categories into a list which will be links bearing the url and name of categories
        const list = categories.map((item, index) => {
            return (
                <li key={index}>
                    <NavLink exact activeClassName="active" to={`/${item.name}`}>{item.name}</NavLink>
                </li>
            )
        });

        //redundant navigation for default view with all category posts on it
        const All = () => {
            return (
                <li key='All'>
                <NavLink exact activeClassName="active" to='/'>All</NavLink>
                </li>
            )
        }

        return (
            //return both navigations 
            <nav id="menu">
                <ul className="left-nav">
                    <li>
                        <NavLink exact activeClassName="active" to="/">Readable</NavLink>
                        <Link className="sr-only" to="#main-content">Skip Navigation</Link>
                    </li>
                </ul>
                <ul className="right-nav">
                    <All />
                    {list}
                </ul>
            </nav>
        )
    }
}

const mapStateToProps = ({ categories }) => ({
        categories: categories.categories
});
  
const mapDispatchToProps = (dispatch) => ({
        getCategories: () => dispatch(fetchCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
