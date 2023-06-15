import './styles/Form.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [categories, setCategories] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({ title, author, categories }));
    setTitle('');
    setAuthor('');
    setCategories('');
  };

  return (
    <div>
      <div className="form_title">ADD NEW BOOK</div>
      <form onSubmit={handleSubmit}>
        <input type="text" className="book_title" value={title} placeholder="Book title" onChange={(e) => setTitle(e.target.value)} />
        <input type="text" className="book_title" value={author} placeholder="Author" onChange={(e) => setAuthor(e.target.value)} />
        <input type="text" className="category_entry" value={categories} placeholder="Categories" onChange={(e) => setCategories(e.target.value)} />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default Form;
