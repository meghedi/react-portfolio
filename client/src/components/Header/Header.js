import React from "react";
import "./style.css";

function Header(props) {
  return (
    <>
      <header className="containerIn">
        <div>{props.children}</div>
      </header>
    </>
  );
}

export default Header;
