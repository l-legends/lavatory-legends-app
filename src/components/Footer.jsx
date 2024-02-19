import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import github from "../img/github-logo.png";


function Footer() {

    return (
        <>
            <div className="Footer">
                <Link to="/">
                    <img src={logo} alt="Logo" className="logo-footer"/>
                </Link>
                <p className="bathroom-tourism">Bathroom Tourism<br/>© 2024 Lavatory Legends. </p>
                


                <Link to="https://github.com/l-legends/lavatory-legends-app">
                    <img src={github} alt="GitHub Logo" className="github-logo"/>
                </Link>
            </div >
        </>

    )
}

export default Footer;