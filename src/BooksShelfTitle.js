import React from 'react';
import PropTypes from 'prop-types';

function BooksShelfTitle(props) {
    return (
        <h2 className="bookshelf-title">{props.title}</h2>
    )
}

BooksShelfTitle.propTypes = {
    title: PropTypes.string.isRequired
}

export default BooksShelfTitle;
