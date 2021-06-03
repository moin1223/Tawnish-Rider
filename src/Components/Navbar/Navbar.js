import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { UserContext } from '../../App';
import  { useContext } from 'react';

const Navbar = () => {
  const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    return (
    <nav className="navbar">
      <h3 className="logo">Townish Rider</h3>
      <ul className="nav-links">
        <Link to="/" className="home">
          <li>Home</li>
        </Link>
        <Link to="/search/1" className="destinstion">
          <li>Destination</li>
        </Link>
        <Link to="/" className="blogs">
          <li>Blogs</li>
        </Link>
        <Link to="/login" className="login">
          <li>Login</li>
        </Link>
        <Link to="/" className="aboutUs">
          <li>{loggedInUser.name}</li>
        </Link>
      </ul>
    </nav>
    );
};

export default Navbar;