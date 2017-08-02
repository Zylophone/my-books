import React, {Component} from 'react'
import PropTypes from 'prop-types'
import BooksList from '../components/BooksList'
import * as BooksAPI from '../utils/BooksAPI';

class BooksSearch extends Component {
	static propTypes = {
		addTo: PropTypes.func.isRequired
	}

	state = {
		query: '',
		searchedBooks: []
	}

	updateQuery = (query) => {
		this.setState({ query: query.trim() })

    BooksAPI.search(query, 30).then((result) => {
      if (result && !result.error) this.setState({ result })
    })
	}

	clearQuery = () => {
		this.setState({ query: '' })
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
							  <div className="control has-icons-left has-icons-right">
							    <input className="input" type="text" placeholder="Search a book..." value={query} onChange={(event) => this.updateQuery(event.target.value)}/>
							    <span className="icon is-small is-right">
							      <i className="fa fa-search"></i>
							    </span>
							  </div>
							</div>
	          </div>
	        </div>
	      </section>

	      <BooksList moveTo={addTo} books={searchedBooks} shelf="none"/>
			</div>
    )
	}
}

export default BooksSearch