import React from "react";

function Wrapper(props) {
  return (
    <div
      className="wrapper"
    >
      <div>{props.children}</div>
    </div>
  );
}

export default Wrapper;
