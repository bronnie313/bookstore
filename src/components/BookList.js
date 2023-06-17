import React, { useEffect } from 'react';
import './styles/Books.css';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { getBookItems } from '../redux/books/booksSlice';

const BookList = () => {
  const { bookItems, isLoading, error } = useSelector((store) => store.books);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookItems());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div>
        <h2>Loading ...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h2>An error occured</h2>
      </div>
    );
  }

  return (
    <section className="booklist">
      <div>
        {
          bookItems.map((book) => (
            <Book
              key={book.item_id}
              id={book.id}
              item_id={book.item_id}
              title={book.title}
              author={book.author}
              category={book.category}
            />
          ))
        }
      </div>
    </section>
  );
};

export default BookList;
