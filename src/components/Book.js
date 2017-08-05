import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
	static propTypes = {
		book: PropTypes.object.isRequired,
		moveTo: PropTypes.func.isRequired
	}

	render() {
		const { book, moveTo } = this.props;

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
			    <div className="card-footer-item">
				    <button className="button">
				    	Details
				    </button>
					</div>

			    <div className="card-footer-item">
				    <div className="dropdown is-hoverable">
						  <div className="dropdown-trigger">
						    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
						      <span>Move to</span>
						      <span className="icon is-small">
						        <i className="fa fa-angle-down" aria-hidden="true"></i>
						      </span>
						    </button>
						  </div>
						  <div className="dropdown-menu" key="dropdown-menu" role="menu">
						    <div className="dropdown-content">
						      <a onClick={() => moveTo(book, 'currentlyReading')} className={"dropdown-item " + ((book.shelf === 'currentlyReading') ? 'is-active' : '')}>
						        Currently Reading
						      </a>
						      <a onClick={() => moveTo(book, 'wantToRead')} className={"dropdown-item " + ((book.shelf === 'wantToRead') ? 'is-active' : '')}>
						        Want to Read
						      </a>
						      <a onClick={() => moveTo(book, 'read')} className={"dropdown-item " + ((book.shelf === 'read') ? 'is-active' : '')}>
						        Read
						      </a>
						    </div>
						  </div>
						</div>
			    </div>
			  </footer>
			</div>
    )
	}
}

export default Book