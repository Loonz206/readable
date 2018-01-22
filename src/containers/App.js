import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';
import Default from '../components/Default/Default';
import CreateEditView from '../components/CreateEditView/CreateEditView';
import CategoryView from '../components/CategoryView/CategoryView';
import PostDetailView from '../components/PostDetailView/PostDetailView';
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
  }

  render() {
    return (
      <Router>
          <div className="app-container">
            <div className={this.state.condition ? 'wrap active' : 'wrap'} id="wrap">
              <header>
                <a href="#menu" className={this.state.condition ? 'menu-link active' : 'menu-link'} onClick={this.handleClick}>
                                    Menu &#9776;
                                </a>
                <Navigation/>
              </header>
              <main className="main-content" id="main">
                <Switch>
                  {/* Default view for application with all of the Posts for each Category */}
                  <Route exact path="/" component={Default}/>
                  <Route path="/create-post" component={CreateEditView}/>
                  <Route exact path="/:category" component={CategoryView}/>
                  <Route path="/:category/:post_id" component={PostDetailView}/>
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

export default App;
