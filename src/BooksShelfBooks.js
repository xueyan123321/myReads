import React, { Component } from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

class BooksShelfBooks extends Component {
    render() {
        return (
            <div className="bookshelf-books">
                <ol className="books-grid">

                    {this.props.books.map((book)=>(
                        <li key={book.id}>
                            <Book book={book} changeBookShelf={this.props.changeBookShelf}></Book>
                        </li>
                    ))}
                </ol>
            </div>
        )
    }
}

BooksShelfBooks.propTypes = {
    books: PropTypes.array.isRequired,
    changeBookShelf: PropTypes.func.isRequired
}

export default BooksShelfBooks;
