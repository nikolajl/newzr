import React from "react";
import './Header.css';

export default () => 
<header className="header">
  <nav className="pure-menu pure-menu-horizontal">
    <a className="pure-menu-heading" href="">
      NewZr
    </a>

    <ul className="pure-menu-list">
      <li className="pure-menu-item pure-menu-selected">
        <a href="#/Home" className="pure-menu-link">
          Home
        </a>
      </li>
      <li className="pure-menu-item">
        <a href="#/Blog" className="pure-menu-link">
          World news
        </a>
      </li>
      <li className="pure-menu-item">
        <a href="#/About" className="pure-menu-link">
          Finance
        </a>
      </li>
    </ul>
    <a href="#/Login" className="pure-menu-heading header__login" hidden>☰</a>
    <a href="#/Login" className="pure-menu-heading header__login">Login</a>
  </nav>
</header>
