import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";



function ListAll() {

    const database = "https://lavatory-legends.adaptable.app/bathrooms"

    const [lavatories, setLavatories] = useState(null);
    
    const getLavatories = () => {
        axios.get(database)
            .then((response) => {
                setLavatories(response.data);
                console.log(typeof response.data);
            })
            .catch((error) => { 
                console.log(error) });
    };
    useEffect(() => {
        getLavatories();
    }, []);

    if(Array.isArray(lavatories)) {
        console.log('is an array');
    } else {
        console.log('is not an array');
    }

    //handleEdit
    //handleDelete
    //handleReview

    return (

        <div className="lavatory-card">

            { lavatories === null
            ? <p>Loading</p>
            :  lavatories.map((lavatory) => {
                    return (
                        <div key={lavatory.id} className="lavatory-card">
                            <h2>{lavatory.name}</h2>
                            <p>{lavatory.description}</p>
                            <p>{lavatory.location}</p>
                            {/* <div className="btn-lavatory-card">
                            <button onClick={handleEdit}>Edit</button>
                            <button onClick={handleDelete}>Delete</button>
                            <button onClick={handleReview}>Review</button>
                        </div> */}
                        </div>

                    )
                })
            }




        </div>

    )
}

export default ListAll;