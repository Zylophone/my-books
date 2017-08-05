import React, {Component} from 'react'
import PropTypes from 'prop-types'
import BooksList from '../components/BooksList'
import * as BooksAPI from '../utils/BooksAPI';

class BooksSearch extends Component {
	static propTypes = {
		addTo: PropTypes.func.isRequired,
		books: PropTypes.array.isRequired
	}

	state = {
		query: '',
		searchedBooks: []
	}

	updateQuery = (query) => {
		this.setState({ query });

    BooksAPI.search(query, 20).then((result) => {
      if (result && !result.error) { 
      	this.setState({
        	searchedBooks : result.map((searchedBook) => {
        		this.props.books.forEach((b, key) => {
	        		if (b.id === searchedBook.id) {
	        			searchedBook.shelf = b.shelf
	        		}
        		});
        		return searchedBook
        	})
        })
      }
      else this.setState({ searchedBooks: [] });
    })
	}

	render() {
		let { addTo } = this.props
			, { query, searchedBooks } = this.state;

		return (
			<div>
				<section className="hero is-primary">
	        <div className="hero-body">
	          <div className="container">
	            <h1 className="title">
	              Books Search
	            </h1>

							<div className="field">
							  <div className="control has-icons-right">
							    <input 
							    	className="is-medium input" 
							    	type="text" 
							    	placeholder="Search books" 
							    	value={query} 
							    	onChange={(event) => this.updateQuery(event.target.value)}
							    	/>
							    <span className="icon is-small is-right">
							      <i className="fa fa-search"></i>
							    </span>
							  </div>
							</div>
	          </div>
	        </div>
	      </section>

	      <BooksList moveTo={addTo} books={searchedBooks} title="Searched Books"/>
			</div>
    )
	}
}

export default BooksSearch