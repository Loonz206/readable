import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import logo from '../assets/logo.svg';
import { fetchCategories } from '../actions';

class App extends Component {

  componentDidMount() {  
    this.props.getCategories();
  }

  render() {

    const { categories } = this.props;
    const list = categories.map((item, index) => {
      return (
        <li key={index}>
          <Link to={`/${item.name}`}>{item.name}</Link>
        </li>
      )
    });

    const All = () => {
      return(
        <li key='All'>
          <Link to='/'>All</Link>
        </li>
      )
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul className="Categories-List">
          <All />
          {list}
        </ul>
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
