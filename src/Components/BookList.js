import React from 'react';
// import PropTypes from 'prop-types';
import BookShelf from './BookShelf';
import * as BooksAPI from '../BooksAPI';

class BookList extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    });
  }

  handleChangeCategory(bookId, shelf) {
   BooksAPI.update(bookId, shelf).then(() => {
     BooksAPI.getAll().then(books => {
       this.setState({ books})
     })
   }) 
  }

  render() {
    const currentlyReadingBooks = this.state.books.filter(book => book.shelf === 'currentlyReading');
    const wantToReadBooks = this.state.books.filter(book => book.shelf === 'wantToRead');
    const readBooks = this.state.books.filter(book => book.shelf === 'read');

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf title="Currently Reading" books={currentlyReadingBooks} onChangeCategory={() => {this.onChangeCategory()}}/>
            <BookShelf title="Want to Read" books={wantToReadBooks} onChangeCategory={() => {this.onChangeCategory()}}/>
            <BookShelf title="Read" books={readBooks} />
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