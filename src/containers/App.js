import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/index';
import Navigation from '../components/Navigation/Navigation';
import DefaultView from '../components/DefaultView/DefaultView';
import CreateEditView from '../components/CreateEditView/CreateEditView';
import CategoryView from '../components/CategoryView/CategoryView';
import Footer from '../components/Footer/Footer';
import NotFound from '../components/NotFound/NotFound';


class App extends Component {
  constructor(){
    super();
    this.state = {
        condition: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    this.setState({
        condition: !this.state.condition
    })
  }
  componentDidMount(){
    let body = document.body;
    body.classList.add('js');

    this.props.getCategories();
  }

  render() {

    const { categories } = this.props;

    return (
      <Router>
          <div className="app-container">
            <div className={this.state.condition ? 'wrap active' : 'wrap'} id="wrap">
              <header>
                <a href="#menu" className={this.state.condition ? 'menu-link active' : 'menu-link'} onClick={this.handleClick}>
                                    Menu &#9776;
                                </a>
                <Navigation categories={categories}/>
              </header>
              <main className="main-content" id="main">
                <Switch>
                  {/* Default view for application with all of the Posts for each Category */}
                  <Route exact path="/" component={DefaultView}></Route>
                  <Route path="/create-post" component={CreateEditView}/>
                  <Route exact path='/:category' component={CategoryView}/>
                  <Route exact path='/:category/:post_id' component={CategoryView} />
                  {/* If the user malforms a url or something this view is shown */}
                  <Route component={NotFound}/>
                </Switch>
              </main>
              <Footer date={new Date()}></Footer>
            </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ categories }) => ({
        categories: categories.categories || []
});
  
const mapDispatchToProps = (dispatch) => ({
        getCategories: () => dispatch(fetchCategories())
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
