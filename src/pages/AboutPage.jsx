import React from "react";
import { Link } from "react-router-dom";
import FilterByTags from "../components/FilterByTags";
import github from "../img/github-logo.png";
import BeerChallenge from "../pages/NotFoundPage";
import simona from "../img/simona-about.png";
import pauline from "../img/pauline-about.png";


function AboutPage({ beerCount }) {

    return (
        <>
            <h1 className="text-5xl text-blue font-league m-4 p-4">The Legends behind the Legends</h1>
            <br />
            <div className='flex items-center flex-row flex-wrap justify-center'>

                <div className="flex flex-col justify-center items-center h-3/5 w-2/5 m-8">
                    <img className='size-3/5' src={pauline} />
                    <div className="flex flex-row gap-4">
                        <h2 className='font-league  text-blue text-4xl'>Pauline Cvt </h2>
                        <a href="https://github.com/Paulinecvt">
                            <img className="size-8" src={github} />
                        </a>
                    </div>
                    <h5 className='text-blue text-lg font-sanchez'>The one who breaks the code</h5>
                    <br/>
                    <p>Social Sciences Uni Student, UX/UI Designer, Web Developer, Meme Queen</p>
                    <p className="text-blue text-2xl font-league">Pauline owes Simona {beerCount.pauline} toilet roll(s).</p>
                    <br />
                </div>

                <div className='flex flex-col justify-center items-center h-3/5 w-2/5 m-8'>
                    <img className='size-3/5' src={simona} />
                    <div className="flex flex-row gap-4">
                        <h2 className='font-league text-blue text-4xl'>Simona W.</h2>
                        <a href="https://github.com/sicawu">
                            <img className="size-8" src={github} />
                        </a>
                    </div>
                    <h5 className='text-blue text-lg font-sanchez'>The one who fixes the code</h5>
                    <br/>
                    <p>Marketing & SEO Specialist, Web Developer, Yoga Teacher, Kombucha Addict</p>
                    <p className="text-blue text-2xl font-league">Simona owes Pauline {beerCount.simona} toilet roll(s).</p>
                    <br />
                </div>
        <br/>
        <br/>
            </div>
        </>

    );
}

export default AboutPage;
