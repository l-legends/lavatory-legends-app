import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";


function DetailsPage() {

    // USEFUL VARIABLES
    const database = "https://lavatory-legends.adaptable.app/lavatories"
    const [lavatory, setLavatory] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();
    

    // GET LAVATORY
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

    // HANDLE DELETE
    const handleDelete = () => {
        axios.delete(`${database}/${id}`)
            .then((response) => {
                navigate("/")
                console.log(response);
            })
            .catch((error) => {
                console.log(error)
            });
    }; 



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
                            <button className="Delete" onClick={handleDelete}>Delete</button>
                        </>
                    )
                }



            </div>
        </>

    );
}

export default DetailsPage;