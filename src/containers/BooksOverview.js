import React, {Component} from 'react'
import PropTypes from 'prop-types'
import BooksList from '../components/BooksList'

class BooksOverview extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired,
		moveTo: PropTypes.func.isRequired
	}

	render() {
		let { books, moveTo } = this.props;

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

	      <BooksList moveTo={moveTo} books={currentlyReadingBooks} shelf="currentlyReading" title="Currently Reading" subtitle="These are the books that you are reading right now."/>
	      <BooksList moveTo={moveTo} books={wantToReadBooks} shelf="wantToRead" title="Want to Read" subtitle="These are your pending books. What are you waiting for?"/>
	      <BooksList moveTo={moveTo} books={readBooks} shelf="read" title="Read" subtitle="These are the books that you have already read. Good job!"/>
			</div>
    )
	}
}

export default BooksOverview