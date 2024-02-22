import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SearchIcon from "../img/search-icon.png";

function SearchBar() {

    const database = "https://lavatory-legends.adaptable.app/lavatories"

    const [lavatories, setLavatories] = useState(null);
    const [filteredLavatories, setFilteredLavatories] = useState([]);
    const [search, setSearch] = useState("");

    //update the seach variable onChange
    const handleSearch = (e) => {
        setSearch(e.target.value);
    };


    // Filter all lavatories by search // Called 
    const filteredBySearch = () => {
        if (lavatories) {
            const searchLC = search.toLowerCase();
            const searchLavatories = lavatories.filter(lavatory => {

                const titleLC = lavatory.title.toLowerCase();
                const descriptionLC = lavatory.description.toLowerCase();
                const tagsLC = lavatory.tags.map(tag => tag.toLowerCase());
                const placeLC = lavatory.location.place.toLowerCase();
                const cityLC = lavatory.location.city.toLowerCase();
                const countryLC = lavatory.location.country.toLowerCase();


                return (
                    titleLC.includes(searchLC) ||
                    descriptionLC.includes(searchLC) ||
                    tagsLC.includes(searchLC) ||
                    placeLC.includes(searchLC) ||
                    cityLC.includes(searchLC) ||
                    countryLC.includes(searchLC)
                );
            });
            setFilteredLavatories(searchLavatories);
            console.log(searchLavatories);
        }
    };


    const handleSearchButton = (e) => {
        if (e.key === 'Enter') {
            filteredBySearch();
        } else if (search === "") {
            emptySearch();
        }
        else {
            filteredBySearch();
        }
    }

    function emptySearch() {
        setSearch("");
        return (
            <div>
                <h1> Empty </h1>
            </div>
        )
    }

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




    // useEffects
    useEffect(() => {
        getLavatories();
    }, [search]);

    useEffect(() => {
        filteredBySearch();
    }, [search]);

    return (
        <div>
            <div className="flex justify-center">
                <div className="flex justify-center items-center p-2 w-1/2 bg-white text-md text-gray-900 border border-gray-300 rounded-lg">
                    <input
                        type="text"
                        placeholder="Search for a legend..."
                        onChange={handleSearch}
                        onKeyPress={handleSearchButton}
                        className="block p-1 text-sm text-gray-900"
                    />
                    <button onClick={handleSearchButton}>
                        <img className="size-5 ml-2 bg-white" src={SearchIcon} alt="Search Icon" />
                    </button>
                    <br />
                </div>
            </div>

            <div className="search-results flex justify-center">
                {search === "" // empty search
                    ? null
                    :
                    filteredLavatories.map((filteredLavatory) => (

                        <div key={filteredLavatory.id} className="lavatory-search-result bg-white p-2 rounded-lg">
                            <p className="text-xs font-sanchez py-1">"{search}"</p>
                            <Link to={`/lavatories/${filteredLavatory.id}`}>
                                <img className="object-cover h-24 rounded-lg" src={filteredLavatory.imageURL} alt="{filteredLavatory.title}"/>
                                <h3 className="text-xs text-grey font-league py-1">{filteredLavatory.title}</h3>
                                <p className="text-xs font-sanchez py-1">{filteredLavatory.location.country}</p>
                            </Link>
                        </div>

                    ))

                }
            </div>


        </div>

    )

};

export default SearchBar;