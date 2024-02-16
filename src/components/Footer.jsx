import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";


function Footer() {

    return (
        <>
            <div className="Footer">
                <p>© 2024 Lavatory Legends. All rights reserved.</p>
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
                <Link to="https://github.com/l-legends/lavatory-legends-app">GitHub Repo</Link>
            </div >
        </>

    )
}

export default Footer;