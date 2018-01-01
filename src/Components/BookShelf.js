import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';


class BookShelf extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired
    }
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {/* TODO check on myreads API */}
                        {this.props.books.map((book, idx) => {
                           return <Book key={idx} book={book}/>
                        })}
                    </ol>
                </div>
            </div>
        );
    }
}

export default BookShelf;