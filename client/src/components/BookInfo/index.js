import React from "react";
import AddBtn from "../AddBtn";
import DeleteBtn from "../DeleteBtn";

function BookInfo(props) {
    console.log(props);
    return (
        
        <div  className="card mt-4 mb-4 book-card">
            <button {...props} onClick={props.onClick} className="add-button btn btn-success">Add</button>
            <img
                alt={props.title}
                className="card-img-top img-fluid p-3"
                src={props.src}
            />
            <div className="card-body d-inline">
                <h5 className="card-title">Title: {props.title}</h5>
                <p className="card-title">Author: {props.author}</p>
                <p className="card-text">{props.description}</p>
            </div>
        </div>
    );
}

export default BookInfo;
