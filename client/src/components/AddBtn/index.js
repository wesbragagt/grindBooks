import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function AddBtn(props) {
  return (
    <span className="col-md-6 add-btn btn btn-sm btn-success" role="button" tabIndex="0">
      Add
    </span>
  );
}

export default AddBtn;
