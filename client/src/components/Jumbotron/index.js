import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ maxHeight: 200, clear: "both", paddingTop: 30, textAlign: "center" }}
      className="jumbotron display-4"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
