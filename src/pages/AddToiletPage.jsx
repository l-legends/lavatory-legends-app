import React from "react";
import { Link } from "react-router-dom";
import AddToiletForm from "../components/AddToilet";


function AddToilet() {

    return (
        <>
            <h1>Add a new legendary lavatory</h1>
            <AddToiletForm />
        </>
    );
}

export default AddToilet;
