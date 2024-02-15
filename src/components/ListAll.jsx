import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";



function ListAll() {

    const [lavatories, setLavatories] = useState(null);

    //handleEdit
    //handleDelete
    //handleReview

    return (

        <div className="lavatory-card">

            <p>This will be the pictures of the lavatory</p>
            <br />

            <div>
                <h2>This will be the title of the lavatory card</h2>
                <tags>This will be the tags of the lavatory</tags>
            </div>

            <div>
                <p>This will be the location of the lavatory</p>
                <p>This will be the short description of the lavatory if we make one</p>
            </div>

            <div className="btn-lavatory-card">
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
                <button onClick={handleReview}>Review</button>
            </div>

        </div>

    )
}

export default ListAll;