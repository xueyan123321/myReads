import React from 'react';
import { Link } from 'react-router-dom';

function Search() {
    return (
        <div className="open-search">
            <Link to="/searchBooks">Add a book</Link>
        </div>
    );
}

export default Search