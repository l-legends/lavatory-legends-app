import React from "react";
import { Link } from "react-router-dom";
import FilterByTags from "../components/FilterByTags";
import github from "../img/github-logo.png";
import BeerChallenge from "../pages/NotFoundPage";
import simona from "../img/simona-about.png";
import pauline from "../img/pauline-about.png";


function AboutPage ({ beerCount }) {

    return (
        <>
        <h1>The Legends behind the Legends</h1>
        <div class='grid grid-flow-col'>
        <div class="box-border h-32 w-32 p-4 border-4">
            <img src={pauline}/>
            <div className='about-name'>
            <h2>Pauline Cvt </h2> 
            <br/>
            <a href="https://github.com/Paulinecvt">
                <img className="github-logo" src={github} />
            </a>
            </div>
            <h5>The one who breaks the code</h5>
            <p>Social Sciences Uni Student, UX/UI Designer, Web Developer, Meme Queen</p>
            <p>Pauline owes Simona {beerCount.pauline} beer(s).</p>
            <br/>
            
        </div>
        <div class='box-border h-32 w-32 p-4 border-4'>
            <img src={simona}/>
            <div className="about-name">
            <h2>Simona Wurst</h2>
            <br/>
            <a href="https://github.com/sicawu">
                <img className="github-logo" src={github} />
            </a>
            </div>
            <h5>The one who fixes the code</h5>
            <p>Marketing & SEO Specialist, Web Developer, Yoga Teacher, Kombucha Addict</p>
            <p>Simona owes Pauline {beerCount.simona} beer(s).</p>
            <br/>
            
        </div>
        </div>
        </>

    );
}

export default AboutPage;
