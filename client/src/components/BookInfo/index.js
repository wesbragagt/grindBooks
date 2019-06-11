import React from "react";
import AddBtn from '../AddBtn';
import DeleteBtn from "../DeleteBtn";
function BookInfo(props) {
  return (
    <div className="card text-center mt-2 mb-2">
        <AddBtn />
        <DeleteBtn/>
      <img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
      <h5>Title: {props.title}</h5>
      <h5>Author: {props.author}</h5>
    </div>
  );
}

export default BookInfo;