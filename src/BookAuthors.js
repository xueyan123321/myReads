import React from 'react';
import PropTypes from 'prop-types';

function BookAuthors(props){
    return (
        <div className="book-authors">{props.authors}</div>
    );
}

BookAuthors.propTypes = {
    authors: PropTypes.string.isRequired
}


export default BookAuthors;