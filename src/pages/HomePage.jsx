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
                    <h1 className="text-5xl text-white font-league"> Welcome to the Lavatory Parade </h1>
                    <br />
                    <p className="text-white bg-orange bg-opacity-70">
                        Discover the legendary lavatories.
                        <br />Search for the most special ones.
                    </p>
                    <br />
                </div>
                <SearchBar />
            </section>
            <section>
                <h2 className="text-3xl text-grey font-league py-9">Discover your favorite</h2>
                <FilterByTags />
                <ListAll />
            </section>
        </>
    );
}

export default HomePage;