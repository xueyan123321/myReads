import React ,{ Component } from 'react';
import PropTypes from 'prop-types';

class BookCover extends Component {
    render() {
        return (
            <div className="book-cover" style={{
                width: 128,
                height: 193,
                backgroundImage:`url('${this.props.image}')`
            }}></div>
        );
    }
}

BookCover.propTypes = {
    image: PropTypes.string.isRequired
}

export default BookCover;
