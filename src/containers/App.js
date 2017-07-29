import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import BooksOverview from './BooksOverview'

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <img 
                style={{width: 138, height: 28}}
                src={require('../images/my-books-logo.png')}
                alt="My Books"
              />
            </Link>
          </div>
        </nav>


        <div className="app">
          <Route exact path="/" component={BooksOverview} />
        </div>
      </div>
    )
  }
}

export default App;
