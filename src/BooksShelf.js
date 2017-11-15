import React, { Component } from 'react';
import BooksShelfTitle from './BooksShelfTitle';
import BooksShelfBooks from './BooksShelfBooks';
import PropTypes from 'prop-types';

class BooksShelf extends Component {
    render() {
        return (
            <div className="bookshelf">
                <BooksShelfTitle title={this.props.booksShelfTitle}></BooksShelfTitle>
                <BooksShelfBooks books={this.props.books} changeBookShelf={this.props.changeBookShelf}></BooksShelfBooks>
            </div>
        )
    }
}

BooksShelf.propTypes = {
    booksShelfTitle: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired
}

export default BooksShelf;
