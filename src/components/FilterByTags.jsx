import React { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

/*
function FilterByTags(){

    const database = "https://lavatory-legends.adaptable.app/lavatories"

    // useStates for all, filtered List & selected Tag
    const [lavatories, setLavatories] = useState(null);
    const [filteredLavatories, setFilteredLavatories] = useState(null)
    const [selectedTag, setSelectedTag] = useState("clean")

    const cleanLavatories = lavatories.filter(lavatories => lavatories.tags.includes('clean'));


    // useEffect
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

    const handleTagFiltering =() => {
        // filter lavatories by selected tag
    }

    return (
        //
    )
}

export default FilterByTags;
*/