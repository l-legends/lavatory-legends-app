import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


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
            <input 
            type="text" 
            placeholder="Search for a legend..." 
            onChange={handleSearch} 
            onKeyPress={handleSearchButton}
            />
            <button onClick={handleSearchButton}> Search </button>
            <br />
            <div className="search-results">
                {search === "" // empty search
                    ?  null
                    :   
                        filteredLavatories.map((filteredLavatory) => (
                        
                        <div key={filteredLavatory.id} className="lavatory-search-result">
                            <p>Legendary "{search}"</p>
                                <Link to={`/lavatories/${filteredLavatory.id}`}>
                                    <img src={filteredLavatory.imageURL} />
                                    <h2>{filteredLavatory.title}</h2>
                                    <p>{filteredLavatory.location.country}</p>
                                </Link>
                        </div> 
                        
                    ))
                    
                }
                </div>
                
                
        </div>

    )

};

export default SearchBar;