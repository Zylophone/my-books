import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BooksOverview extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired,
		title: PropTypes.string,
		subtitle: PropTypes.string,
		moveTo: PropTypes.func.isRequired
	}

	render() {
		const { books, title, subtitle, moveTo } = this.props;

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
							{books.map((book, key) => (
								<div key={book.id + '-' + key} className="column is-4">
									<Book book={book} moveTo={moveTo}/>
								</div>
	          	))}
	          </div>
	          {books.length === 0 && (
							<span className="books-list-empty-state">No books available to display</span>
						)}
			    </div>
		    </div>
		  </section>
    )
	}
}

export default BooksOverview