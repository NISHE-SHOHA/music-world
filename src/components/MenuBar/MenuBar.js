import React from 'react';
import { Link } from 'react-router-dom';

const MenuBar = () => {
    return (        
        <nav className="navbar navbar-expand-lg navbar-light fw-bold border border-warning" style={{backgroundColor: 'lightsalmon'}}>
        <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">Wellcome to <br />Music World</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-end" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact Us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
};

export default MenuBar;