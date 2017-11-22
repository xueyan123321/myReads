import React, { Component } from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

class SearchBooksResults extends Component {
    render(){
        return (
            <div className="search-books-results">
                <ol className="books-grid">
                    {this.props.booksResults.length !== 0&&this.props.booksResults.map((book, index)=>(
                        <li key={book.id}>
                            <Book book={book} changeBookShelf={this.props.changeBookShelf}></Book>
                        </li>
                    ))}
                </ol>
            </div>
        )
    }
}

SearchBooksResults.propTypes ={
    booksResults: PropTypes.array.isRequired,
    changeBookShelf: PropTypes.func.isRequired
}

export default SearchBooksResults;
