import React from "react";
import { Link } from "react-router-dom";
import FilterByTags from "../components/FilterByTags";
import github from "../img/github-logo.png";


function AboutPage () {

    return (
        <>
        <h1>The Legends behind the Legends</h1>
        <div className="about-board">
        <div className="about-card">
            <img />
            <div className="about-name">
            <h2>Pauline Cvt </h2> 
            <br/>
            <a href="https://github.com/Paulinecvt">
                <img className="github-logo" src={github} />
            </a>
            </div>
            <h5>The one who breaks the code</h5>
            <p>Social Sciences Uni Student, UX/UI Designer, Web Developer, Meme Queen</p>
            <br/>
            
        </div>
        <div className="about-card">
            <img />
            <div className="about-name">
            <h2>Simona Wurst</h2>
            <a href="https://github.com/sicawu">
                <img className="github-logo" src={github} />
            </a>
            </div>
            <h5>The one who fix the code</h5>
            <p>SEO, Marketing Specialist, Web Developer, Yoga Teacher, Kambucha Addict</p>
            <br/>
            
        </div>
        </div>
        </>

    );
}

export default AboutPage;
