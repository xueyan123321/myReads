import React from 'react';
import PropTypes from 'prop-types';

function BookAuthors(props){
    return (
        <div className="book-authors">
            {props.authors.join(', ')}
        </div>
    );
}

BookAuthors.propTypes = {
    authors: PropTypes.array.isRequired
}

export default BookAuthors;