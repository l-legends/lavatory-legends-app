import React from "react";
import { Link } from "react-router-dom";
import ListAll from "../components/ListAll";
import SearchBar from "../components/Searchbar";
import FilterByTags from "../components/FilterByTags";

function HomePage() {

    return (
        <>
            <section className="hero">
                <div>
                    <h1 className="text-5xl text-white font-league mx-5"> Welcome to the Lavatory Parade </h1>
                    <br />
                    <p className="text-white my-4 py-3 bg-orange bg-opacity-70">The Place to Pee.
                    </p>
                    <br />
                </div>
                <SearchBar />
            </section>
            <section>
                <h2 className="text-3xl text-grey font-league pt-14 pb-10">Find pees. Set priorities.</h2>
                <FilterByTags />
                <ListAll />
            </section>
        </>
    );
}

export default HomePage;