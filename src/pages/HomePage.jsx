import React from "react";
import { Link } from "react-router-dom";
import ListAll from "../components/ListAll";
import FilterByTags from "../components/FilterByTags";

function HomePage() {

    return (
        <>
            <h1> Welcome to the Lavatory Parade </h1>
            <p>Discover the legendary lavatories
            <br/>Search for the most special ones
            <br/>Rate your favorites
            <br/>Add your own legend</p>
            <ListAll />
            <FilterByTags />
        </>
    );
}

export default HomePage;