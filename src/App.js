import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import ListBooksTitle from './ListBooksTitle';
import SearchBooksBar from './SearchBooksBar';
import SearchBooksResults from './SearchBooksResults';
import BooksShelf from './BooksShelf';
import Search from './Search';
import './App.css';

const title = 'myReads';
const current = 'Currently Reading';
const want = 'Want to Read';
const read = 'Read';


class BooksApp extends React.Component {
    state = {
        books: [],
        searchResults: []
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({books});
        })
    }

    /**
     * @description change the bookshelf of books and searchResults
     * @param {string} bookshelf - the name of the bookshelf to change
     * @param {string} bookid - the id of the book to change
     */
    changeBookShelf = (bookshelf, bookid) => {
        this.setState((state) => {
            state.books.forEach((book) => {
                if (book.id === bookid) {
                    book.shelf = bookshelf;
                    BooksAPI.update(book, bookshelf);
                }
            });
            state.searchResults.forEach((book) => {
                if (book.id === bookid) {
                    book.shelf = bookshelf;
                    state.books.push(book);
                    BooksAPI.update(book, bookshelf);
                }
            })
        })
    }

    /**
     * @description get the search results of books
     * @param {string} query - the query message that user inputs
     */
    getSearchResults = (query) => {
        BooksAPI.search(query, 15).then((books) => {
            if (books && books.error !== 'empty query') {
                books.map((book) => {
                    book.shelf = 'none';
                    this.state.books.forEach((myShelfBook) => {
                        if (book.id === myShelfBook.id) {
                            book.shelf = myShelfBook.shelf;
                        }
                    });
                })
            } else {
                books = [];
            }
            this.setState({searchResults: books});
        })
    }

    render() {
        return (
            <div className="app">
                <Route path='/searchBooks' render={() =>
                    (<div className="search-books">
                        <SearchBooksBar getSearchResults={this.getSearchResults}></SearchBooksBar>
                        <SearchBooksResults booksResults={this.state.searchResults}
                                            changeBookShelf={this.changeBookShelf}></SearchBooksResults>
                    </div>)
                }/>
                <Route path='/' exact render={() => (
                    <div className="list-books">
                        <ListBooksTitle title={title}></ListBooksTitle>
                        <div className="list-books-content">
                            <div>
                                <BooksShelf booksShelfTitle={current}
                                            books={this.state.books.filter(book => book.shelf === 'currentlyReading')}
                                            changeBookShelf={this.changeBookShelf}></BooksShelf>
                                <BooksShelf booksShelfTitle={want}
                                            books={this.state.books.filter(book => book.shelf === 'wantToRead')}
                                            changeBookShelf={this.changeBookShelf}></BooksShelf>
                                <BooksShelf booksShelfTitle={read}
                                            books={this.state.books.filter(book => book.shelf === 'read')}
                                            changeBookShelf={this.changeBookShelf}></BooksShelf>
                            </div>
                        </div>
                        <Search></Search>
                    </div>
                )
                }/>
            </div>
        )
    }
}

export default BooksApp;
