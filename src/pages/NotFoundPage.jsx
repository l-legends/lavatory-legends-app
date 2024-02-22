import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Pauline from '../img/pauline-about.png';
import Simona from '../img/simona-about.png';
import BackIcon from '../img/back-btn.png';

function NotFound({ beerCount, setBeerCount }) {

    const [clickCountPauline, setClickCountPauline] = useState(0)
    const [clickCountSimona, setclickCountSimona] = useState(0)

    const handlePaulineClick = (e) => {
        e.preventDefault();
        setClickCountPauline(clickCountPauline + 1);
        setBeerCount(prevCount => ({ ...prevCount, pauline: prevCount.pauline + 1 }));
    };


    const handleSimonaClick = (e) => {
        e.preventDefault();
        setclickCountSimona(clickCountSimona + 1);
        setBeerCount(prevCount => ({ ...prevCount, simona: prevCount.simona + 1 }));
    };


    return (
        <div className=' flex flex-col '>
            <button className="mt-8 hover:bg-onyx hover:bg-opacity-5 border-none size-10 m-2">
                <Link to={'/'}>
                    <img src={BackIcon} className="size-8" />
                </Link>
            </button>
            <div className="flex flex-col justify-start pb-4">
                <h1 className="text-5xl text-blue font-league">We messed up, meow!</h1>
                <br/>
                <p className='text-3xl text-blue font-league'>Blame who's in charge. The other one gets a free toilet roll.</p>
            </div>

            <br />
            <br/>
            <div className="flex justify-center gap-6">

                <div className="flex flex-col flex-wrap w-2/5 h-auto items-center">
                    <img src={Pauline} alt="Pauline" onClick={handlePaulineClick} className='flex size-48' />
                    <p className='text-onyx text-xl'>Pauline owes Simona {clickCountPauline} toilet roll(s).</p>
                </div>

                <div className="flex flex-col justify-center flex-wrap w-2/5 h-auto items-center">
                    <img src={Simona} alt="Simona" onClick={handleSimonaClick} className='flex size-48' />
                    <p className='text-onyx text-xl'>Simona owes Pauline {clickCountSimona} toilet roll(s).</p>
                </div>

            </div>
            <br />
            <div className='flex justify-center'>
            <button className="mt-8 hover:bg-onyx hover:bg-opacity-5 border-none m-4 p-4">
                <Link to="/about">
                    <p className='font-league text-blue text-xl'>Score</p>
                    </Link>
            </button>
            </div>
            <br />


        </div>
    );
}

export default NotFound;