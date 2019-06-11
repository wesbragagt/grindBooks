import React from "react";
import AddBtn from "../AddBtn";
import DeleteBtn from "../DeleteBtn";
function BookInfo(props) {
    return (
        <div className="card mt-2 mb-2 p-5">
            <div class="col-md-4 inline-block">
                <img
                    alt={props.title}
                    className="img-fluid float-left m-1"
                    src={props.src}
                />
                <h5 className="float-left">Title: {props.title}</h5>
                <h5 className="float-left">Author: {props.author}</h5>
            </div>
            <span className="float-left">{props.children}</span>
        </div>
    );
}

export default BookInfo;
