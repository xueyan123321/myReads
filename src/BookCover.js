import React from 'react';
import PropTypes from 'prop-types';

function BookCover({ image })  {
        return (
            <div className="book-cover" style={{
                width: 128,
                height: 193,
                backgroundImage:`url('${image}')`
            }}></div>
        );
}

BookCover.propTypes = {
    image: PropTypes.string.isRequired
}

export default BookCover;
