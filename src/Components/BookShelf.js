import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookShelf = ({title, books, onChangeShelf}) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {/* TODO check on myreads API */}
                    {books.map((book, idx) => {
                        return <Book key={`book_${idx}`} book={book} onChangeShelf={onChangeShelf} />
                    })}
                </ol>
            </div>
        </div>
    );
};

BookShelf.prototype = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
}

export default BookShelf;