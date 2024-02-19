import React from "react";
import { Link } from "react-router-dom";
import ListAll from "../components/ListAll";
import FilterByTags from "../components/FilterByTags";

function HomePage() {

    return (
        <>
            <h1> Welcome to the Lavatory Parade </h1>
            <p>Discover the legendary lavatories</p>
            <p>Search for the most special ones</p>
            <p>Rate your favorites</p>
            <p>Add your own legend</p>
            <ListAll />
        </>
    );
}

export default HomePage;