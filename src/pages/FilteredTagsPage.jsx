import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ListAll from "../components/ListAll";
import DetailsPage from '../pages/DetailsPage';




function FilterByTagPage() {

    const { tag } = useParams();
    const tagToFilter = tag;

    const [lavatoriesWithTag, setLavatoriesWithTag] = useState(null);
    const database = "https://lavatory-legends.adaptable.app/lavatories";

    useEffect(() => {
        axios.get(database)
            .then((response) => {
                setLavatoriesWithTag(response.data.filter(lavatory => lavatory.tags.includes(tagToFilter)));
            })
            .catch((error) => {
                console.log(error);
            });
    }, [tagToFilter]);
    

    return (
        <>
            <h1>Discover all {tag} lavatories</h1>
            {lavatoriesWithTag === null
                ? <p>Lavatories loading</p>
                : lavatoriesWithTag.map((lavatory) => {
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
        </>
    );
}

export default FilterByTagPage;
