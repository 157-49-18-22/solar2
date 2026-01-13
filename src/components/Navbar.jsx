import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <a href="#" className="logo">
          <img src="/logo-main.svg" alt="Grid Zero" />
          <span>Grid Zero</span>
        </a>
        <ul className="nav-links">
          <li><a href="#benefits">Why Solar?</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#reviews">Reviews</a></li>
        </ul>
        <button className="btn btn-primary">Get a Quote</button>
      </div>
    </nav>
  );
};

export default Navbar;
