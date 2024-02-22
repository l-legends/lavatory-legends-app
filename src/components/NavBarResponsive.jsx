import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../BurgerMenu.css'
import logo from "../img/logo.png";


function BurgerMenu() {

    const [burgerMenuClicked, setBurgerMenuClicked] = useState(false);
    const updateMenu = () => {
        setBurgerMenuClicked(!burgerMenuClicked);
    }

    return (
        <>
            <div className="mobileNavigation">
                <nav>
                    <div className="logoBurgerMenu">
                        <Link to="/">
                            <img src={logo} className="logo" />
                        </Link>
                    </div>
                    <div className="hidden sm:block">
                        <div className="topNavigation">
                            <Link className="NavLink" to="/">Home</Link>
                            <Link className="NavLink" to="/about">About</Link>
                            <Link className="NavLinkEnd" to="/lavatories/create">Create</Link>
                        </div>
                    </div>
                    <div className="block sm:hidden">
                        <div className="burgerMenu" onClick={updateMenu}>
                            <div className="burgerLines" ></div>
                            <div className="burgerLines" ></div>
                            <div className="burgerLines" ></div>
                        </div>
                    </div>
                </nav>
                {burgerMenuClicked && (
                    <div className="menu visible">
                        <button className="bg-blue font-sanchez p-2 rounded text-lg text-white mt-6 hover:bg-black hover:text-orange" onClick={updateMenu}>X</button>
                        <Link className="flex items-center justify-center my-5 color-blue hover:text-onyx" to="/" onClick={updateMenu}>Home</Link>
                        <Link className="flex items-center justify-center my-5 color-blue hover:text-onyx" to="/about" onClick={updateMenu}>About</Link>
                        <Link className="flex items-center justify-center my-5 color-blue hover:text-onyx" to="/lavatories/create" onClick={updateMenu}>Create</Link>
                    </div>
                )}
            </div>
        </>
    )
}

export default BurgerMenu