import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
    return (
        <div className="form-group">
            <input
                className="form-control"
                onChange={props.handleInputChange}
                value={props.value}
                name="search"
                type="text"
                placeholder="Search For a book"
                id="search"
            />
        </div>
    );
}

export function FormBtn(props) {
    return (
        <button
            onClick={props.handleFormSubmit}
            style={{ float: "right", marginBottom: 10 }}
            className="m-auto btn btn-success"
        >
            {props.children}
        </button>
    );
}
