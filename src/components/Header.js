import { NavLink } from 'react-router-dom';
import './styles/Header.css';

const Header = () => (
  <nav>
    <div className="logo-navigation">
      <div className="logo">Bookstore CMS</div>
      <ul className="navlinks">
        <li><NavLink className="link" to="/">Book</NavLink></li>
        <li><NavLink className="link" to="/Categories">Categories</NavLink></li>
      </ul>
    </div>
    <img className="profile" src="./profile.jpg" alt="profile" />
  </nav>
);

export default Header;
