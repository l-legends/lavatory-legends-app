import React from "react";
import { Link } from "react-router-dom";
import EditToiletForm from "../components/EditToilet";


function EditToilet() {

    return (
        <>
            <h1>Edit this lavatory</h1>
            <EditToiletForm />
        </>
    );
}

export default EditToilet;
