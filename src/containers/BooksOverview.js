import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import BooksList from '../components/BooksList'
import * as BooksAPI from '../utils/BooksAPI'

class BooksOverview extends Component {
  state = {
    books : []
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

	render() {
		let { books } = this.state;

		let currentlyReadingBooks, wantToReadBooks, readBooks
		currentlyReadingBooks = books.filter((book) => book.shelf === "currentlyReading")
		wantToReadBooks = books.filter((book) => book.shelf === "wantToRead")
		readBooks = books.filter((book) => book.shelf === "read")

		return (
			<div>
				<section className="hero is-primary">
	        <div className="hero-body">
	          <div className="container">
	            <h1 className="title">
	              Books Overview
	            </h1>
	          </div>
	        </div>
	      </section>

	      <BooksList moveTo={this.moveTo} books={currentlyReadingBooks} shelf="currentlyReading" title="Currently Reading" subtitle="These are the books that you are reading right now."/>
	      <BooksList moveTo={this.moveTo} books={wantToReadBooks} shelf="wantToRead" title="Want to Read" subtitle="These are your pending books. What are you waiting for?"/>
	      <BooksList moveTo={this.moveTo} books={readBooks} shelf="read" title="Read" subtitle="These are the books that you have already read. Good job!"/>
			</div>
    )
	}
}

export default BooksOverview