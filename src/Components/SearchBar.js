import React from 'react';
import * as BooksAPI from '../BooksAPI'
import Book from '../Components/Book'
import PropTypes from "prop-types";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            books: []
        }
    }
    updateQuery = (query) => {
        this.setState({ query });
        this.search(query);
    }
    search = (query) => {
        BooksAPI.search(query).then(books => {
            this.setState({ books: books.error ? books.items : books });
        });
    }
    syncBookState = (books) => {
        const { booksOnShelf } = this.props;
        return books.map((book, idx) => {
            for (let i = 0; i < booksOnShelf.length; i++) {
                if (booksOnShelf[i].id === book.id) {
                    book.shelf = booksOnShelf[i].shelf
                    return <Book key={idx} book={book} onChangeShelf={this.props.onChangeShelf} />
                }
            }
            book.shelf = 'none'
            return <Book key={idx} book={book} onChangeShelf={this.props.onChangeShelf} />
        });
    }
    render() {
        const { query, books } = this.state;
        // const { booksOnShelf } = this.props.booksOnShelf;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <span className="close-search" onClick={this.props.onCloseSearch} />
                    <div className="search-books-input-wrapper">
                        <input autofocus
                            type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={event => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.syncBookState(books)}
                    </ol>
                </div>
            </div>
        )
    }
}

SearchBar.propTypes = {
    booksOnShelf: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
    onCloseSearch: PropTypes.func.isRequired
}


export default SearchBar;