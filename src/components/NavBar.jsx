import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

function NavBar() {

    return (
        <>
            <div className="header">
                <div className="logo-div">
                    <Link to="/">
                        <img src={logo}  className="logo" />
                    </Link>
                </div>
                <div className="topNavigation">
                    <Link className="NavLink" to="/">Home</Link>
                    <Link className="NavLink" to="/about">About</Link>
                    <Link className="NavLinkEnd" to="/lavatories/create">Create</Link>
                </div>
            </div>
        </>
    )
}

export default NavBar;