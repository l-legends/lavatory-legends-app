import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import DetailsPage from '../pages/DetailsPage';
import BackIcon from "../img/back-btn.png";


function FilterByTagPage() {

    const { tag } = useParams();
    const tagToFilter = tag;

    const [lavatoriesWithTag, setLavatoriesWithTag] = useState(null);
    const database = "https://lavatory-legends.adaptable.app/lavatories";

    const getLavatories = () => {
        axios.get(database)
            .then((response) => {
                setLavatoriesWithTag(response.data.filter(lavatory => lavatory.tags.includes(tagToFilter)));
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getLavatories();
    }, [tagToFilter]);


    return (
        <>
            <h1 className="text-5xl text-blue font-league m-4 p-4">{tag.charAt(0).toUpperCase() + tag.slice(1)} <br/>is what you need.</h1>
            <p className="text-xs h-12 font-sanchez py-1">No worries, we've got you sorted. Discover all {tag} lavatories.</p>
            <div className="lavatory-body items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {lavatoriesWithTag === null
                    ? <p>Lavatories loading</p>
                    : lavatoriesWithTag.map((lavatory) => {
                        return (
                            <div key={lavatory.id} className="grid py-2 px-1 my-5 bg-onyx bg-opacity-10 hover:border-black hover:border rounded-lg">
                                <Link to={`/lavatories/${lavatory.id}`} className="flex flex-col h-full">
                                    <img className="object-cover h-96 rounded-lg" src={lavatory.imageURL} />
                                    <h3 className="text-2xl h-20 text-grey font-league py-2">{lavatory.title}</h3>
                                    <p className="hidden sm:block text-xs md:h-12 font-sanchez py-1">{lavatory.description}</p>
                                    <p className="text-sm font-sanchez py-1">{lavatory.location.country}</p>
                                </Link>
                            </div>           
                        )
                    })
                }

            </div>
            <div className="flex justify-center flex-row mb-10">
                                <Link to={'/'}>
                                    <button className="flex ml-1/5  items-center hover:bg-onyx hover:bg-opacity-5 hover:border-white">
                                        <img className="flex size-10  hover:text-onyx" src={BackIcon} />
                                        <p className="flex ml-4 color-blue  hover:text-onyx">Back to all Lavatories</p>
                                    </button>
                                </Link>
                            </div>
        </>
    );
}

export default FilterByTagPage;
