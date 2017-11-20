import React, { Component } from 'react';
import BookTop from './BookTop';
import BookTitle from './BookTitle';
import BookAuthors from './BookAuthors';
import PropTypes from 'prop-types';

class BooksShelfBooks extends Component {
    render() {
        return (
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {this.props.books.map((book)=>(
                        <li key={book.id}>
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

BooksShelfBooks.propTypes = {
    books: PropTypes.array.isRequired,
    changeBookShelf: PropTypes.func.isRequired
}

export default BooksShelfBooks;
