import React from "react";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">
                grindBooks
            </a>
            <div className="navbar-nav">
                <a className="nav-item nav-link" href="/">
                    Search
                </a>
                <a className="nav-item nav-link" href="/saved">
                    Saved
                </a>
            </div>
        </nav>
    );
}

export default Nav;
