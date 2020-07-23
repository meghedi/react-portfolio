import React from "react";
import { Link } from "react-router-dom";

import Header from "../Header/Header";
import "./style.css";




function Navigation() {
  return (
    <Header>
      <div className="logo">
        <Link to="/">
          Meghedi <span className="secondLogo">Hacopi</span>
        </Link>
      </div>
      <div className="top-menu">
          <Link to="/about"> about </Link>
          <Link to="/portfolio">portfolio</Link>
          <Link to="/contact">contact</Link>
      </div>
      <hr/>
    </Header>
  );
}

export default Navigation;
