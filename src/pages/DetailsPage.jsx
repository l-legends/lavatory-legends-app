import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import editbtn from "../img/edit-btn.png";
import EditToilet from "../components/EditToilet";
import FilterByTags from "../components/FilterByTags";
import BackIcon from "../img/back-btn.png";
import DeleteIcon from "../img/trash-btn.png";
import LocationIcon from "../img/location-icon.png";
import PlaceIcon from "../img/place-icon.png";


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
                            <button className="flex justify-items-start">
                            <Link to={'/'}>
                                <img className="flex size-10" src={BackIcon} />
                            </Link>
                            </button>

                            <img src={lavatory.imageURL} />
                            <br />
                            {lavatory.tags.map((tag, index) => (
                                <Link key={index} to={`/lavatories/tag/${tag}`}>
                                    <label className="tagsOnDetailPage">{tag}</label>
                                </Link>
                            ))}
                            <h1>{lavatory.title}</h1>
                            <p>{lavatory.description}</p>
                            <div className="flex gap-3">
                            <img src={PlaceIcon} className="h-6 w-6" /> <p> {lavatory.location.place}</p>
                            </div>
                            <div className="flex gap-3">
                            <img src={LocationIcon} className="h-6 w-5" /> <p> {lavatory.location.city}, {lavatory.location.country}</p>
                            </div>
                            <Link to={`/lavatories/edit/${lavatory.id}`}>
                                <button>
                                    <img className="edit-btn" src={editbtn} />
                                </button>
                            </ Link>
                            <button className="size-10" onClick={handleDelete}>
                                <img src={DeleteIcon} />
                            </button>
                        </>
                    )
                }



            </div >
        </>

    );
}

export default DetailsPage;