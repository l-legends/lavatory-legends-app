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
        <div className='grid grid-flow-col gap-9 mx-5'>
        <div className="box-border h-70 w-3/5 p-4 border-black border-2 rounded-md">
            <img className='size-80' src={pauline}/>
            <div className='font-'>
            <h2>Pauline Cvt </h2> 
            <br/>
            <a href="https://github.com/Paulinecvt">
                <img className="github-logo" src={github} />
            </a>
            </div>
            <h5>The one who breaks the code</h5>
            <p>Social Sciences Uni Student, UX/UI Designer, Web Developer, Meme Queen</p>
            <p>Pauline owes Simona {beerCount.pauline} toilet roll(s).</p>
            <br/>
            
        </div>
        <div className='box-border h-70 w-3/5 p-4 border-black border-2 rounded-md'>
            <img className='size-80' src={simona}/>
            <div className="about-name">
            <h2>Simona Wurst</h2>
            <br/>
            <a href="https://github.com/sicawu">
                <img className="github-logo" src={github} />
            </a>
            </div>
            <h5>The one who fixes the code</h5>
            <p>Marketing & SEO Specialist, Web Developer, Yoga Teacher, Kombucha Addict</p>
            <p>Simona owes Pauline {beerCount.simona} toilet roll(s).</p>
            <br/>
            
        </div>
        </div>
        </>

    );
}

export default AboutPage;
