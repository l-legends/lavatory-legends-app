import React from "react";
import { Link } from "react-router-dom";
import AddToiletForm from "../components/AddToilet";


function AddToilet() {

    return (
        <>
            <h1 className="text-5xl text-blue font-league m-4 p-4">Add a new Lavatory. Become a Legend.</h1>
            <AddToiletForm />
        </>
    );
}

export default AddToilet;
