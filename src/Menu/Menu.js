import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav
      role="navigation"
      aria-label="Main menu"
      itemScope
      itemType="https://schema.org/SiteNavigationElement">

      <div className="heading">

        <h4>Network Based Application development</h4>

      </div>

      <ul className="nav-links">
        <li><Link to="/">Homepage</Link></li>
        <li><Link to="about" itemProp="url">About</Link></li>
        <li><Link to="login" itemProp="url">Login</Link></li>
      </ul>

    </nav>
  );
}

export default Menu;
