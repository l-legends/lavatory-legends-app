import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import SearchBar from "./Searchbar";
import FilterByTags from "../components/FilterByTags";


function ListAll() {

    const database = "https://lavatory-legends.adaptable.app/lavatories"

    const [lavatories, setLavatories] = useState(null);

    const getLavatories = () => {
        axios.get(database)
            .then((response) => {
                setLavatories(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error)
            });
    };
    useEffect(() => {
        getLavatories();
    }, []);


    return (
        <>

            <div className="lavatory-body items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">

                {lavatories === null
                    ? <p>Lavatories loading</p>
                    : lavatories.map((lavatory) => {
                        return (
                            <div key={lavatory.id} >
                                <div className="grid py-2 px-1 my-5 bg-greyish hover:border-black hover:border rounded-lg">
                                    <Link to={`/lavatories/${lavatory.id}`}className="flex flex-col h-full">
                                        <img className="object-cover h-96 rounded-lg" src={lavatory.imageURL} alt="{lavatory.title}"/>  
                                        <h3 className="text-2xl h-20 text-grey font-league py-2">{lavatory.title}</h3>
                                        <p className="hidden sm:block text-xs md:h-12 font-sanchez py-1">{lavatory.description}</p>
                                        <p className="text-sm font-sanchez py-1">{lavatory.location.country}</p>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }




            </div>
        </>
    )
}

export default ListAll;