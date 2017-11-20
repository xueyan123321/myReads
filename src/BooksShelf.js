import React from 'react';
import BooksShelfTitle from './BooksShelfTitle';
import BooksShelfBooks from './BooksShelfBooks';
import PropTypes from 'prop-types';

function BooksShelf ({booksShelfTitle, books, changeBookShelf}){
        return (
            <div className="bookshelf">
                <BooksShelfTitle title={booksShelfTitle}></BooksShelfTitle>
                <BooksShelfBooks books={books} changeBookShelf={changeBookShelf}></BooksShelfBooks>
            </div>
        )
}

BooksShelf.propTypes = {
    booksShelfTitle: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    changeBookShelf: PropTypes.func.isRequired
}

export default BooksShelf;
