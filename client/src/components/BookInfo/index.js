import React from "react";

function BookInfo(props) {
    console.log(props);
    return (
        <div className="card mt-4 mb-4 book-card">
            <button
                onClick={props.handleAddBook}
                className="add-button btn btn-success"
            >
                Add
            </button>
            <img
                alt={props.title}
                className="card-img-top img-fluid p-3"
                src={props.image}
            />
            <div className="card-body d-inline">
                <h5 className="card-title">Title: {props.title}</h5>
                <p className="card-title">Author: {props.authors}</p>
                <p className="card-text">{props.description}</p>
            </div>
        </div>
    );
}

export default BookInfo;
