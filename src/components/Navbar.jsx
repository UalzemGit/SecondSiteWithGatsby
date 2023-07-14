import React from "react";
import { Link } from "gatsby";

import {FiAlignJustify} from 'react-icons/fi'
import logo from '../assets/images/logo.svg'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
       <div className="nav-header">
        <Link to="/">
          <img src={logo} alt="Logo Site"/>
        </Link>
        <button className="nav-btn">
          <FiAlignJustify/>
        </button>
       </div>
       <div className="nav-links show-links">
        <Link to="/" className="nav-link" activeClassName="active-link">Home</Link>
        <Link to="/about" className="nav-link" activeClassName="active-link">About</Link>
        <Link to="/recipes" className="nav-link" activeClassName="active-link">Recipes</Link>
        <Link to="/tags" className="nav-link" activeClassName="active-link">Tags</Link>
       </div>
      </div>
    </nav>
    
   
   
   
  );
};
export default Navbar;