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
            <div>
                <nav>
                    <div className="logoBurgerMenu">
                        <Link to="/">
                            <img src={logo} className="logo" />
                        </Link>
                    </div>
                    <div className="burgerMenu" onClick={updateMenu}>
                        <div className="burgerLines" ></div>
                        <div className="burgerLines" ></div>
                        <div className="burgerLines" ></div>
                    </div>
                </nav>
                {burgerMenuClicked && (
                    <div className="menu visible">
                        <button className="closeBurgerButton" onClick={updateMenu}>x</button>
                        <Link className="burgerLink" to="/" onClick={updateMenu}>Home</Link>
                        <Link className="burgerLink" to="/about" onClick={updateMenu}>About</Link>
                        <Link className="burgerLink" to="/lavatories/create/:id" onClick={updateMenu}>Create</Link>
                    </div>
                )}
            </div>
        </>
    )
}

export default BurgerMenu