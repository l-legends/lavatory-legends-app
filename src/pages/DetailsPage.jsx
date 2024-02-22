import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import editbtn from "../img/edit-btn.png";
import EditToilet from "../components/EditToilet";
import FilterByTags from "../components/FilterByTags";
import BackIcon from "../img/back-btn.png";
import DeleteIcon from "../img/trash-btn.png";


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
                            <button className="back-btn">
                            <Link to={'/'}>
                                <img src={BackIcon} />
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
                            <p>{lavatory.location.place}</p>
                            <p>{lavatory.location.city}</p>
                            <p>{lavatory.location.country}</p>
                            <Link to={`/lavatories/edit/${lavatory.id}`}>
                                <button>
                                    <img className="edit-btn" src={editbtn} />
                                </button>
                            </ Link>
                            <button className="Delete" onClick={handleDelete}>
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