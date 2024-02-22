import React from "react";
import { Link } from "react-router-dom";
import EditToiletForm from "../components/EditToilet";


function EditToilet() {

    return (
        <>
            <h1 className="text-5xl text-blue font-league m-4 p-4">Edit this Lavatory.</h1>
            <EditToiletForm />
        </>
    );
}

export default EditToilet;
