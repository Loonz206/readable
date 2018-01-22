import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import NotFound from '../components/NotFound/NotFound';
import Default from '../components/Default/Default';

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
                  {/* All of the views go here but try to figure out what is to be displayed */}
                  <Route exact path="/" component={Default}/>
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
