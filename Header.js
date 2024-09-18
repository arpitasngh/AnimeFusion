// src/components/Header.js
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>AnimeMangaToon</h1>
      <nav>
        <ul>
          <li>Featured</li>
          <li>What to Watch</li>
          <li>Latest News and Reviews</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
