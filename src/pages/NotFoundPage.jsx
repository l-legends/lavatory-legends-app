import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
//import Pauline from '../img/pauline-about.png';
//import Simona from '../img/simona-about.png';
import GitHub from '../img/github-logo.png';

function NotFound() {

    const [clickCountPauline, setClickCountPauline] = useState(0)
    const [clickCountSimona, setclickCountSimona] = useState(0)

    const handlePaulineClick = (e) => {
        e.preventDefault();
        setClickCountPauline(clickCountPauline + 1);
    };

    const handleSimonaClick = (e) => {
        e.preventDefault();
        setclickCountSimona(clickCountSimona + 1);
    };


    return (
        <div className="NotFoundPage">
                <h1>We messed up, meow!</h1>
                <p>Blame who's in charge. The other one gets a free beer.</p>
                <div className="NotFoundConatiner">
                    <div className="Pauline404">
                        <img src={GitHub} alt="Pauline" onClick={handlePaulineClick} />
                        <p>Pauline owes Simona {clickCountPauline} beer(s).</p>
                    </div>
                    <div className="Simona404">
                        <img src={GitHub} alt="Simona" onClick={handleSimonaClick} />
                        <p>Simona owes Pauline {clickCountSimona} beer(s).</p>
                    </div>
                </div>   
                <Link to="/">Let's go back to discover all lavatories</Link>
        </div>
    );
}

export default NotFound;