import React from "react";

function BookInfo(props) {
  return (
    <div className="card text-center mt-2 mb-2">
      <img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
      <h5>Title: {props.title}</h5>
      <h5>Author: {props.author}</h5>
    </div>
  );
}

export default BookInfo;