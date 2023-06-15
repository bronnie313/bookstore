import PropTypes from 'prop-types';

const Book = ({ categories, title, author }) => (
  <article className="book">
    <div className="book_item">
      <div>
        <h3>{categories}</h3>
        <h2>{title}</h2>
        <h6>{author}</h6>
        <div className="book_btns">
          <p>Comment</p>
          <line className="vl" />
          <p>Remove</p>
          <line className="vl" />
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
        <vline className="vline" />
        <div className="updates">
          <p>Current Chapter</p>
          <p>Chapter 12</p>
          <button type="button"> UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  </article>
);

Book.propTypes = {
  categories: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
