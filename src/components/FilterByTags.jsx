import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ListAll from "../components/ListAll";


function FilterByTags() {

    const database = "https://lavatory-legends.adaptable.app/lavatories"

    const [lavatories, setLavatories] = useState(null);
    const [filteredLavatories, setFilteredLavatories] = useState([]); // we need an array here > Later: to use map, filter
    let tagToFilter = ["clean", "accessible", "design", "spacious"];  // Place the tags you want to filter after in the array.


    // Get all lavatories first
    const getLavatories = () => {
        axios.get(database)
            .then((response) => {
                setLavatories(response.data);
            })
            .catch((error) => {
                console.log(error)
            });
    };

    // Filter through all lavatories based on the tagToFilter array that is given in line 13. 
    const filteredByTags = () => {
        for (let i = 0; i < tagToFilter.length; i++) {
            const filteredLavatories = lavatories.filter(lavatory => lavatory.tags.includes(tagToFilter[i]))
            setFilteredLavatories(filteredLavatories);
        }
    }

    // useEffects
    useEffect(() => {
        getLavatories();
    }, []);


    return (
        <>
            <div className="lavatory-body">
                {tagToFilter.map((tag, index) => (
                    <Link key={index} to={`/lavatories/tag/${tag}`}>
                        <label className="tagsOnDetailPage">{tag}</label>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default FilterByTags;