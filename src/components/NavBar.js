import React  from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <Link to="/page">Go to Page</Link>
      <Link to="/page1">Go to Page 2</Link>
    </>
  );
};

export default NavBar;
