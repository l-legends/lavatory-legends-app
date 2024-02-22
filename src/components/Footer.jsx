import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import github from "../img/github-logo.png";


function Footer() {

    return (
        <>
            <div className="w-full flex justify-between items-center bottom-0 flex-row border-t-onyx border-opacity-10 border-t-2 h-24 static">
                
                
                <Link to="/">
                    <img src={logo} alt="Logo" className="flex flex-start h-16 hover:animate-pulse"/>
                </Link>
                

                <div className="flex">
                <p className="text-orange text uppercase text-lg">Bathroom Tourism<br/>© 2024 Lavatory Legends. </p>
                </div>
                

                <div className="flex flex-end">
                <Link to="https://github.com/l-legends/lavatory-legends-app">
                    <img src={github} alt="GitHub Logo" className="size-10"/>
                </Link>
                </div>
            </div >
        </>

    )
}

export default Footer;