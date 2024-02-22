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
            <div className="flex justify-items-center flex-col">
                {lavatory === null
                    ? <p>Lavatories loading...</p>
                    : (
                        <>
                        <br/>
                                <Link to={'/'}>
                                <button  className="flex justify-items-start">
                                <img className="flex size-10  ml-1/5" src={BackIcon} />
                                </button>
                                </Link>
                                
                            
                            <div className="flex justify-center">
                            <img className="size-2/5" src={lavatory.imageURL} />
                            </div>
                            <br />
                            <div className="flex justify-center gap-5">
                            {lavatory.tags.map((tag, index) => (
                                
                                <Link key={index} to={`/lavatories/tag/${tag}`}>
                                    <label className="bg-blue font-sanchez mx-3 ">{tag}</label>
                                </Link>
                                
                            ))}
                            </div>
                            <br/>
                            <br/>
                            <div className="justify-items-center">
                            <h1 className="font-league text-4xl color-blue ">{lavatory.title}</h1>
                            <br/>
                            <p className="text-xl">{lavatory.description}</p>
                            <br/>
                            
                            <div className="flex justify-center gap-3">
                            <img src={PlaceIcon} className="h-6 w-6" /> <p> {lavatory.location.place}</p>
                            </div>
                            
                            <div className="flex justify-center gap-3">
                            <img src={LocationIcon} className="h-6 w-5" /> <p> {lavatory.location.city}, {lavatory.location.country}</p>
                            </div>
                            </div>
                            <br/>
                            <div className="justify-items-center">
                            <Link to={`/lavatories/edit/${lavatory.id}`}>
                                <button>
                                    <img className="edit-btn" src={editbtn} />
                                </button>
                            </ Link>
                            <button className="size-10" onClick={handleDelete}>
                                <img src={DeleteIcon} />
                            </button>
                            </div>
                            <br/>
                            <br/>
                        </>
                    )
                }



            </div >
        </>

    );
}

export default DetailsPage;