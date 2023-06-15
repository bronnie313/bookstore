import React from 'react';
import './styles/Books.css';
import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const { bookItems } = useSelector((store) => store.books);

  return (
    <section className="booklist">
      <div>
        {
          bookItems.map((item) => (
            <Book
              key={item.item_id}
              id={item.id}
              item_id={item.item_id}
              title={item.title}
              author={item.author}
              categories={item.categories}
            />
          ))
        }
      </div>
    </section>
  );
};

export default BookList;
