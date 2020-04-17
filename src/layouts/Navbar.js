import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">

    <Link className="navbar-brand" to="/breeds">Breeds <span className="sr-only">(current)</span></Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/breeds">Home <span className="sr-only">(current)</span></Link>
        </li>
      </ul>
      
    </div>
    </div>
  </nav>
  );
}

export default Navbar;