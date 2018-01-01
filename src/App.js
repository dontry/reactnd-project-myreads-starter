import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import SearchBar from './Components/SearchBar'
import BookList from './Components/BookList'
import * as BooksAPI from './BooksAPI';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    });
  }

  handleChangeShelf(bookId, shelf) {
    console.log(`shelf: ${shelf}, id: ${bookId}`)
    BooksAPI.update({ id: bookId }, shelf).then(() => {
      BooksAPI.getAll().then(books => {
        this.setState({ books })
      })
    })
  }

  render() {
    const books = this.state.books;

    return (
      <div className="app">
        <Route exact path="/" render={({ history }) => (
          <BookList onOpenSearchBar={() => {
            history.push('/search')
          }} books={books} onChangeShelf={this.handleChangeShelf.bind(this)} />
        )} />
        <Route exact path="/search" render={({ history }) => (
          <SearchBar onChangeShelf={this.handleChangeShelf.bind(this)}
            onCloseSearch={() => { history.push('/') }} />
        )} />
      </div>
    )
  }
}

export default BooksApp
