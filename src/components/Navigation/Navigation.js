import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCategories } from '../../actions/index';

class Navigation extends Component {

    componentDidMount() {  
        this.props.getCategories();
    }

    render () {

        const { categories } = this.props;
        const list = categories.map((item, index) => {
            return (
                <li key={index}>
                    <NavLink exact activeClassName="active" to={`/${item.name}`}>{item.name}</NavLink>
                </li>
            )
        });

        const All = () => {
            return (
                <li key='All'>
                <NavLink exact activeClassName="active" to='/'>All</NavLink>
                </li>
            )
        }

        return (
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

const mapStateToProps = ({ categories }) => {
    return {
        categories: categories.categories
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        getCategories: () => dispatch(fetchCategories())
    }
}

  export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
