import React from 'react';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';

class BookList extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }
  
  render() {
    const books = this.props.books;
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
            <BookShelf title="Currently Reading" books={currentlyReadingBooks} onChangeShelf={this.props.onChangeShelf}/>
            <BookShelf title="Want to Read" books={wantToReadBooks} onChangeShelf={this.props.onChangeShelf}/>
            <BookShelf title="Read" books={readBooks} onChangeShelf={this.props.onChangeShelf} />
          </div>
        </div>
        <div className="open-search">
          <a onClick={() => this.props.onOpenSearchBar()}>Add a book</a>
        </div>
      </div>
    )
  }
}

export default BookList;