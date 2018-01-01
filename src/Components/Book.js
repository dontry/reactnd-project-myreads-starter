import React from 'react';
import PropTypes from 'prop-types';

class Book extends React.Component {
    static propTypes = {
       book: PropTypes.object.isRequired
    }
    render() {
        const {title, authors, imageLinks, previewLink } = this.props.book;
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <a href={previewLink}><div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks ? imageLinks.thumbnail : ''})` }}></div></a>
                        <div className="book-shelf-changer">
                            <select>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{title}</div>
                    <div className="book-authors">{authors}</div>
                </div>
            </li>
        );
    }
}

export default Book;