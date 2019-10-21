import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/page1">Go to Page1</Link>
      </li>
      <li>
        <Link to="/page2">Go to Page 2</Link>
      </li>
    </ul>
  );
};

export default NavBar;
