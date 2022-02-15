import React from 'react'
import { Link } from 'gatsby';
import { FaAlignJustify } from 'react-icons/fa'
import logo from './../assets/images/logo.svg';


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <img src={logo} alt="simply recipes"/>
                    </Link>
                    <button className="nav-btn">
                        <FaAlignJustify/>
                    </button>
                </div>
                <div className="nav-links show-links">
                    <Link to="/" className="nav-links" activeClassName="active-link">Home</Link>
                    <Link to="/recipes" className="nav-links" activeClassName="active-link">Recipes</Link>
                    <Link to="/tags" className="nav-links" activeClassName="active-link">Tags</Link>
                    <Link to="/about" className="nav-links" activeClassName="active-link">About</Link>
                    <div className="nav-link contact-link">
                        <Link to="/contact" className="btn"> contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar


