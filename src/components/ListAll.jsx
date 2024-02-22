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

            <div className="lavatory-body grid-cols-1 md:grid-cols-3">

                {lavatories === null
                    ? <p>Lavatories loading</p>
                    : lavatories.map((lavatory) => {
                        return (
                            <div>
                                <div key={lavatory.id} className="grid py-2 m-4 bg-onyx bg-opacity-5 hover:border-black hover:border rounded-lg">
                                    <Link to={`/lavatories/${lavatory.id}`}>
                                        <img src={lavatory.imageURL} />
                                        <h2 className="text-2xl text-grey font-league py-2">{lavatory.title}</h2>
                                        <p className="hidden sm:block">{lavatory.description}</p>
                                        <p className="text-sm font-sanchez py-1 italic">{lavatory.location.country}</p>
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