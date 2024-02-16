import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

function NavBar() {

    return (
        <>
            <div className="header">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} />
                    </Link>
                </div>
                <div className="topNavigation">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/lavatories/create/:id">Create</Link>
                </div>
            </div>
        </>
    )
}

export default NavBar;