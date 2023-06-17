import './styles/Form.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addNewBook } from '../redux/books/booksSlice';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    const info = [nanoid(), title, author, category];
    e.preventDefault();
    dispatch(addNewBook(info));
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <div>
      <div className="form_title">ADD NEW BOOK</div>
      <form onSubmit={handleSubmit}>
        <input type="text" className="book_title" value={title} placeholder="Book title" onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" className="book_title" value={author} placeholder="Author" onChange={(e) => setAuthor(e.target.value)} required />
        <input type="text" className="category_entry" value={category} placeholder="Categories" onChange={(e) => setCategory(e.target.value)} required />
        <button className="add-btn" type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default Form;
