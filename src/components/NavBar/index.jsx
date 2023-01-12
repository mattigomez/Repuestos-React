import React from "react";
import CartWidget from "../CartWidget";
import './styles.css';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Home</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/category/termos">Termos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/mate">Mates</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/accesorios">Accesorios</Link>
          </li>
        </ul>
        <CartWidget/>
        <span className="navbar-text">
          2
        </span>
      </div>
    </div>
  </nav>
  );
};

export default NavBar;
