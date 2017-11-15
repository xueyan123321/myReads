import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookShelfChanger extends Component {
    render(){
        return (
            <div className="book-shelf-changer">
                <form>
                    <select onChange={(e)=>{ this.props.changeBookShelf(e.target.value, this.props.id)} } value={this.props.status}>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </form>
            </div>
        )
    }
}

BookShelfChanger.propTypes = {
    changeBookShelf: PropTypes.func.isRequired,
    status: PropTypes.string.isRequired
}

export default BookShelfChanger;