import './styles/Form.css';

const Form = () => (
  <div>
    <div className="form_title">ADD NEW BOOK</div>
    <form action="">
      <input type="text" className="book_title" placeholder="Book title" />
      <input type="text" className="category_entry" placeholder="Categories" />
      <button type="submit">ADD BOOK</button>
    </form>
  </div>
);

export default Form;
