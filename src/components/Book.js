import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class Book extends Component {
	static propTypes = {
		book: PropTypes.object.isRequired,
	}

	render() {
		const { book } = this.props;

		return (
			<div className="card">
				<header className="card-header">
			    <p className="card-header-title">
			      {book.title}
			    </p>
			  </header>
			  <div className="card-content">
	        <figure>
						<img 
			      	src={book.imageLinks.thumbnail}
			      	alt={book.title}
			      	title={book.title}
	      		/>			        
	      	</figure>
			  </div>
			  <footer className="card-footer">
			    <a className="card-footer-item">Details</a>
			    <a className="card-footer-item">Move</a>
			  </footer>
			</div>
    )
	}
}

export default Book