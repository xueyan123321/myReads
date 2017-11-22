import React from 'react';
import BookTop from './BookTop';
import ProTypes from 'prop-types';

const Book = (props) => {
    const { id, imageLinks, shelf, title, authors = '' } = props.book;
    return (
        <div className="book">
            <BookTop image={imageLinks.thumbnail} status={shelf} id={id}
                     changeBookShelf={props.changeBookShelf}></BookTop>
            <div className="book-title">{title}</div>
            <div className="book-authors">{authors.join(', ')}</div>
        </div>
    )
}

Book.proTypes = {
    book: ProTypes.object.isRequired,
    changeBookShelf: ProTypes.func.isRequired
}

export default Book

