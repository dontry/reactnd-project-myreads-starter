import React from 'react';
import PropTypes from 'prop-types';

const coverStyle = (imageLinks) => ({ width: 128, height: 193, backgroundImage: `url(${imageLinks ? imageLinks.thumbnail : ''})` });

class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }

    handleChangeShelf = (event) => {
        event.preventDefault();
        const shelf = event.target.value;
        const { id } = this.props.book;
        this.props.onChangeShelf && this.props.onChangeShelf(id, shelf);
        this.setState({loading: true});
    }

    render() {
        const { title, authors, imageLinks, previewLink, shelf } = this.props.book;
        const { loading } = this.state;
        let changerName = loading ? 'book-shelf-changer loading' : 'book-shelf-changer';
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <a href={previewLink}><div className="book-cover" style={coverStyle(imageLinks)}></div></a>
                        <div className={changerName} >
                            <select value={shelf} onChange={(event) => this.handleChangeShelf(event)}>
                                <option disabled>Move to...</option>
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
            </li >
        );
    }
};

Book.propTypes = {
    book: PropTypes.object.isRequired,
    onChangeShelf: PropTypes.func.isRequired
}

export default Book;