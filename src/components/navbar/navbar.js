import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <a href="#" className="link navbar__logo-link">
          <h1>Weather App</h1>
        </a>
      </div>
      <div className="navbar__links">
        <a href="#" className="link navbar__link">
          Сегодня
        </a>
        <a href="#" className="link navbar__link">
          Завтра
        </a>
        <a href="#" className="link navbar__link">
          Три дня
        </a>
      </div>
      <button className="button navbar__button">Login</button>
    </div>
  );
}

export default Navbar;
