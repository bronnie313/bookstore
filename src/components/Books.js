import React from 'react';
import PropTypes from 'prop-types';
import './styles/Books.css';

const books = [
  {
    categories: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    id: 1,
  },
  {
    categories: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbert',
    id: 2,
  },
  {
    categories: 'Economy',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    id: 3,
  },
];

const BookList = () => (
  <section className="booklist">
    {books.map((book) => {
      const { categories, title, author } = book;
      return <Book categories={categories} title={title} author={author} key={book.id} />;
    })}
  </section>
);
const Book = (props) => {
  const { categories, title, author } = props;
  return (
    <article className="book">
      <h3>{categories}</h3>
      <h2>{title}</h2>
      <h6>{author}</h6>
    </article>
  );
};

Book.propTypes = {
  categories: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookList;
