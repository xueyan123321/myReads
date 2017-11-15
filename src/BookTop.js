import React, { Component } from 'react';
import BookCover from './BookCover';
import BookShelfChanger from './BookShelfChanger';
import PropTypes from 'prop-types';

class BookTop extends Component {
    render(){
        return (
            <div className="book-top">
                <BookCover image={this.props.image}></BookCover>
                <BookShelfChanger status={this.props.status} id={this.props.id} changeBookShelf={this.props.changeBookShelf}></BookShelfChanger>
            </div>
        )
    }
}

BookTop.propTypes ={
    image:PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    changBookShelf: PropTypes.func.isRequired
}
export default BookTop;