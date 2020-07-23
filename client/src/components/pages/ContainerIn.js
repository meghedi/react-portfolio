import React from "react";

function ContainerIn(props) {
  return (
    <div
      className="containerIn"
    >
      <div>{props.children}</div>
    </div>
  );
}

export default ContainerIn;
