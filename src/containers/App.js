import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import BooksOverview from './BooksOverview';
import BooksSearch from './BooksSearch';
import * as BooksAPI from '../utils/BooksAPI';

class App extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  moveTo = (book, shelf) => {
    let { books } = this.state;

    BooksAPI.update(book, shelf).then((booksUpdated) => {
      this.setState({
        books : books.map((b) => {
          if (b.id === book.id) b.shelf = shelf
          return b
        })
      })
    })
  }

  addTo = (book, shelf) => {
    let { books } = this.state;
    book.shelf = shelf; //Not sure if this is correct

    if (books.filter((b) => b.id === book.id).length > 0) this.moveTo(book, shelf)
    else {
      BooksAPI.update(book, shelf).then((booksUpdated) => {
        this.setState({
          books : books.concat([ book ])
        })
      })
    }
  }

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
            <Link to="/" className="navbar-item">
              <span className="icon"><i className="fa fa-book"></i></span>
              <span>Overview</span>
            </Link>
            <Link to="/search" className="navbar-item">
              <span className="icon"><i className="fa fa-search"></i></span>
              <span>Search</span>
            </Link>
          </div>
        </nav>

        <div className="app">
          <Route exact path="/" render={() => (
            <BooksOverview 
              moveTo={this.moveTo}
              books={this.state.books}
            />
          )}/>
          <Route path="/search" render={() => (
            <BooksSearch
              addTo={this.addTo}
              books={this.state.books}
            />
          )}/>
        </div>
      </div>
    )
  }
}

export default App;
