import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <span className="col-md-6 delete-btn btn btn-sm btn-danger" role="button" tabIndex="0">
      Delete
    </span>
  );
}

export default DeleteBtn;
