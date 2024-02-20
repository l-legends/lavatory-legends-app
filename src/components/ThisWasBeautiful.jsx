import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ListAll from "../components/ListAll";


function FilterByTags() {

    const database = "https://lavatory-legends.adaptable.app/lavatories"

    const [lavatories, setLavatories] = useState(null);
    const [filteredLavatories, setFilteredLavatories] = useState([]); // we need an array here > Later: to use map, filter .length
    let tagToFilter = "clean";  // Place the tag you want to filter after here.


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


    // Filter all lavatories by tag.
    const filteredByTag = () => {
        if (lavatories) {
            const filteredLavatories = lavatories.filter(lavatory => lavatory.tags.includes(tagToFilter))
            setFilteredLavatories(filteredLavatories);
            console.log(filteredLavatories)
        }
    }

    // useEffects
    useEffect(() => {
        getLavatories();
    }, []);

    /*

    // If we use this one, the list is directly filtered without clicking on a button
    useEffect(() => {
        filteredByTagClean();
    }, [lavatories]);

    */

    return (
        <>
            <div className="lavatory-body">
                <button onClick={filteredByTag}>{tagToFilter}</button>
                <br />
                filteredLavatories.length === 0                                    // To check if there is any lavatory with that tag
                ? <p>There are no {tagToFilter} lavatories to discover. </p>    // If there are no lavatories with this tag, this message gets displayed.
                : {filteredLavatories.map((filteredLavatory) => (
                    <div key={filteredLavatory.id} className="lavatory-card-filtered">
                        <Link to={`/lavatories/${filteredLavatory.id}`}>
                            <img src={filteredLavatory.imageURL} />
                            <h2>{filteredLavatory.title}</h2>
                            <p>{filteredLavatory.description}</p>
                            <p>{filteredLavatory.location.country}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export default FilterByTags;