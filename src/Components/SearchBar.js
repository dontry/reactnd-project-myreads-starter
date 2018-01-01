import React from 'react';
import * as BooksAPI from '../BooksAPI'
import Book from '../Components/Book'

class SearchBar extends React.Component {
    state = {
        query: '',
        books: []
    }
    updateQuery = (query) => {
        this.setState({ query});
        this.search(query);
    }
    search(query) {
        BooksAPI.search(query).then(books => {
            console.log('books:', books);
            this.setState({ books: books.error ? books.items : books });
        });
    }
    render() {
        const { query, books } = this.state;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <div className="search-books-input-wrapper">
                        <input 
                        type="text" 
                        placeholder="Search by title or author" 
                        value={query}
                        onChange={event => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {books.map((book, idx) => <Book key={idx} book={book} />)}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBar;