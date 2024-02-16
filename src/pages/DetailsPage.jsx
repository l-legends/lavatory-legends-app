import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";


function DetailsPage() {
    const database = "https://lavatory-legends.adaptable.app/lavatories"

    const [lavatory, setLavatory] = useState(null);
    const { id } = useParams();

    const getLavatory = () => {
        axios.get(`${database}/${id}`)
            .then((response) => {
                setLavatory(response.data);
            })
            .catch((error) => {
                console.log(error)
            });
    };
    useEffect(() => {
        getLavatory();
    }, [id]);




    return (
        <>
            <div className="ProjectDetailPage">
                {lavatory === null
                    ? <p>Lavatories loading...</p>
                    : (
                        <>
                            <img src={lavatory.imageURL} />
                            <br/>
                            <label>{lavatory.tags[0]} {lavatory.tags[1]} {lavatory.tags[2]} {lavatory.tags[3]}</label>
                            <h1>{lavatory.title}</h1>
                            <p>{lavatory.description}</p>
                            <p>{lavatory.location.place}</p>
                            <p>{lavatory.location.city}</p>
                            <p>{lavatory.location.country}</p>
                        </>
                    )
                }



            </div>
        </>

    );
}

export default DetailsPage;