import React, { Component } from 'react';
import BookTop from './BookTop'
import BookTitle from './BookTitle'
import BookAuthors from './BookAuthors'
import PropTypes from 'prop-types'

class SearchBooksResults extends Component {
    render(){
        return (
            <div className="search-books-results">
                <ol className="books-grid">
                    {this.props.booksResults.length !== 0&&this.props.booksResults.map((book, index)=>(
                        <li key={index}>
                            <div className="book">
                                <BookTop image={book.imageLinks.thumbnail} status={book.shelf} id={book.id} changeBookShelf={this.props.changeBookShelf}></BookTop>
                                <BookTitle title={book.title}></BookTitle>
                                <BookAuthors authors={book.authors}></BookAuthors>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        )
    }
}

SearchBooksResults.propTypes ={
    booksResults: PropTypes.array.isRequired
}

export default SearchBooksResults
