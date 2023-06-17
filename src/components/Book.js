/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({
  item_id, category, title, author,
}) => {
  const dispatch = useDispatch();

  return (
    <article className="book">
      <div className="book_item">
        <div>
          <h3>{category}</h3>
          <h2>{title}</h2>
          <h6>{author}</h6>
          <div className="book_btns">
            <p>Comment</p>
            <div className="vl" />
            <button type="button" onClick={() => { dispatch(removeBook(item_id)); }}>remove</button>
            <div className="vl" />
            <p>Edit</p>
          </div>
        </div>
        <div className="books_updates">
          <div className="progress">
            <img src="./progress.png" alt="progress" />
            <div className="completed">
              <p className="percent">8%</p>
              <p>completed</p>
            </div>
          </div>
          <div className="vline" />
          <div className="updates">
            <p>Current Chapter</p>
            <p>Chapter 12</p>
            <button type="button"> UPDATE PROGRESS</button>
          </div>
        </div>
      </div>
    </article>
  );
};

Book.propTypes = {
  item_id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
