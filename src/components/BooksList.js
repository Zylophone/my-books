import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import Book from './Book'

class BooksOverview extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired,
		shelf: PropTypes.string.isRequired,
		title: PropTypes.string,
		subtitle: PropTypes.string,
		moveTo: PropTypes.func.isRequired
	}

	render() {
		const { books, shelf, title, subtitle, moveTo } = this.props;

		return (
			<section className="section">
		    <div className="container">
		    	<h1 className="title">
		    		{title}
	    		</h1>
		      <h2 className="subtitle">
		        {subtitle}
		      </h2>
		      <div className="content">	
		      	<div className="columns is-multiline">
							{books.map((book) => (
								<div key={book.id} className="column is-4">
									<Book book={book} moveTo={moveTo}/>
								</div>
	          	))}
	          </div>
			    </div>
		    </div>
		  </section>
    )
	}
}

export default BooksOverview