/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';

const Book = ({
  item_id, category, title, author,
}) => {
  const dispatch = useDispatch();

  return (
    <article className="book">
      <div className="book_item">
        <div>
          <h3 className="categories">{category}</h3>
          <h2 className="title">{title}</h2>
          <h6 className="author">{author}</h6>
          <div className="book_btns">
            <p>Comment</p>
            <div className="vl" />
            <button className="remove-btn" type="button" onClick={() => { dispatch(deleteBook(item_id)); }}>remove</button>
            <div className="vl" />
            <p>Edit</p>
          </div>
        </div>
        <div className="books_updates">
          <div className="progress">
            <img src="./progress.png" alt="progress" />
            <div className="completed">
              <p className="percent">64%</p>
              <p className="complete">completed</p>
            </div>
          </div>
          <div className="vline" />
          <div className="updates">
            <p className="current-chapter">Current Chapter</p>
            <p className="chapter">Chapter 12</p>
            <button className="update-progress" type="button"> UPDATE PROGRESS</button>
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
