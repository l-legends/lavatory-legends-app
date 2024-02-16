import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";



function ListAll() {

    const database = "https://lavatory-legends.adaptable.app/lavatories"

    const [lavatories, setLavatories] = useState(null);

    const getLavatories = () => {
        axios.get(database)
            .then((response) => {
                setLavatories(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error)
            });
    };
    useEffect(() => {
        getLavatories();
    }, []);



    //handleEdit
    //handleDelete
    //handleReview

    return (

        <div className="lavatory-card">

            {lavatories === null
                ? <p>Lavatories loading</p>
                : lavatories.map((lavatory) => {
                    return (
                        <div key={lavatory.id} className="lavatory-card">
                            <Link to={`/lavatories/${lavatory.id}`}>
                                <img src={lavatory.imageURL} />
                                <h2>{lavatory.title}</h2>
                                <p>{lavatory.description}</p>
                                <p>{lavatory.location.country}</p>
                            </Link>

                            {/*<p>{lavatory.tags[1]}</p>
                              <div className="btn-lavatory-card">
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