import { NavLink } from 'react-router-dom';

const Header = () => (
  <nav>
    <div className="logo">Bookstore</div>
    <ul className="navlinks">
      <li><NavLink className="link" to="/">Book</NavLink></li>
      <li><NavLink className="link" to="/Categories">Categories</NavLink></li>
    </ul>
  </nav>
);

export default Header;
