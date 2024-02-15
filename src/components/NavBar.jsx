import React from "react";
import { Link } from "react-router-dom";
import logo from './img/logo.png';

function NavBar() {

    return (
        <>
        <div className="navbar">
             <div className="logo">
                <Link to="/">
                    <img src={logo} />
                </Link>
            </div>
        </div>

        <div className="navigation">
            <Link to="/about">About</Link>
            <Link to="/lavatories/create/:id">Submit your Lavatory</Link>
        </div>

        </>
    )
}

export default NavBar;