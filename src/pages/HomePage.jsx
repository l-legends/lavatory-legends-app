import React from "react";
import { Link } from "react-router-dom";
import ListAll from "../components/ListAll";
import FilterByTags from "../components/FilterByTags";

function HomePage() {

    return (
        <>
            <h1>All Lavatories </h1>
            <ListAll />
        </>
    );
}

export default HomePage;