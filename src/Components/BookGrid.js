import React from 'react';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';

const BookGrid = ({ books, onChangeShelf, onOpenSearchBar }) => {
    const currentlyReadingBooks = books.filter(book => book.shelf === 'currentlyReading');
    const wantToReadBooks = books.filter(book => book.shelf === 'wantToRead');
    const readBooks = books.filter(book => book.shelf === 'read');

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf title="Currently Reading" books={currentlyReadingBooks} onChangeShelf={onChangeShelf} />
            <BookShelf title="Want to Read" books={wantToReadBooks} onChangeShelf={onChangeShelf} />
            <BookShelf title="Read" books={readBooks} onChangeShelf={onChangeShelf} />
          </div>
        </div>
        <div className="open-search">
          <a onClick={() => onOpenSearchBar()}>Add a book</a>
        </div>
      </div>
    )
}

BookGrid.PropTypes = {
  books: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
  onOpenSearchBar: PropTypes.func.isRequired
}

export default BookGrid;