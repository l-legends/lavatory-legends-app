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
        <SearchBar />
        <FilterByTags />
        
        <div className="lavatory-body">

            {lavatories === null
                ? <p>Lavatories loading</p>
                : lavatories.map((lavatory) => {
                    return (
                        <div key={lavatory.id} className="lavatory-card">
                            <Link to={`/lavatories/${lavatory.id}`}>
                                <img src={lavatory.imageURL} />
                                <h2>{lavatory.title}</h2>
                                <p>{lavatory.description}</p>
                                <p>{lavatory.location.country}</p>
                            </Link>
                        </div>

                    )
                })
            }




        </div>
        </>
    )
}

export default ListAll;