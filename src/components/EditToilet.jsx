import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";



function EditToilet() {

    const { id } = useParams();

    // useful const
    const database = "https://lavatory-legends.adaptable.app/lavatories"
    const navigate = useNavigate();
    // const [lavatories, setLavatories] = useState(null); // set state
    const [lavatory, setLavatory] = useState({
        title: "",
        description: "",
        location: {
            place: "",
            city: "",
            country: ""
        },
        tags: "",
        imageURL: ""
    });


    useEffect(() => {
        const getLavatory = async () => {
            try {
                const response = await axios.get(`${database}/${id}`);
                setLavatory(response.data);
            } catch (error) {
                console.error("Error fetching lavatory data:", error);
            }
        };
        getLavatory();
    }, [database, id]);

    // Edit title
    const handleTitleChange = (e) => {
        setLavatory((prevLavatory) => ({
            ...prevLavatory,
            title: e.target.value
        }));
    };
    // Edit description
    const handleDescriptionChange = (e) => {
        setLavatory((prevLavatory) => ({
            ...prevLavatory,
            description: e.target.value
        }));
    };
    // Edit location: place
    const handleLocPlaceChange = (e) => {
        const newLoc = {...lavatory.location, place: e.target.value}
        setLavatory((prevLavatory) => ({
            ...prevLavatory,
            location: newLoc
        }));
    };
    // Edit location: city
    const handleLocCityChange = (e) => {
        const newLoc = {...lavatory.location, city: e.target.value}
        setLavatory((prevLavatory) => ({
            ...prevLavatory,
            location: newLoc
        }));
    }; 
    // Edit location: country
    const handleLocCountryChange = (e) => {
        const newLoc = {...lavatory.location, country: e.target.value}
        setLavatory((prevLavatory) => ({
            ...prevLavatory,
            location: newLoc
        }));
    };
    // Edit tags
    const handleTagsChange = (e) => {
        setLavatory((prevLavatory) => ({
            ...prevLavatory,
            tags: e.target.value
        }));
    };
    // Edit image
    const handleImgChange = (e) => {
        setLavatory((prevLavatory) => ({
            ...prevLavatory,
            imageURL: e.target.value
        }));
    };



    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`${database}/${id}`, lavatory);
            navigate(`/lavatories/${id}`);
            console.log(lavatory)
        }
        catch (e) {
            console.log(e)
        }
    };

    return (
        <div className="editToiletForm">
            <form onSubmit={handleSubmit}>
                <div className="editToiletFormElements">
                    <div className="addToiletFormElements">
                        <label>Name
                            <br />
                            <input
                                type="text"
                                name="title"
                                value={lavatory.title}
                                onChange={handleTitleChange}
                            />
                        </label>
                    </div>
                    <div className="editToiletFormElements">
                        <div className="addToiletFormElements"></div>
                        <label>Description
                            <br />
                            <input
                                type="text"
                                name="description"
                                value={lavatory.description}
                                onChange={handleDescriptionChange}
                            />
                        </label>
                    </div>
                    <div className="editToiletFormElements">
                        <label>Place
                            <br />
                            <input
                                type="text"
                                name="locationPlace"
                                value={lavatory.location.place}
                                onChange={handleLocPlaceChange}
                            />
                        </label>
                    </div>
                    <div className="editToiletFormElements">
                        <label>City
                            <br />
                            <input
                                type="text"
                                name="locationCity"
                                value={lavatory.location.city}
                                onChange={handleLocCityChange}
                            />
                        </label>
                    </div>
                    <div className="editToiletFormElements">
                        <label>Country
                            <br />
                            <input
                                type="text"
                                name="locationCountry"
                                value={lavatory.location.country}
                                onChange={handleLocCountryChange}
                            />
                        </label>
                    </div>
                    <div className="editToiletFormElements">
                        <label>Tags
                            <br />
                            <input
                                type="text"
                                name="tags"
                                value={lavatory.tags}
                                onChange={handleTagsChange}
                            />
                        </label>
                    </div>
                    <div className="editToiletFormElements">
                        <label>Image
                            <br />
                            <input
                                type="text"
                                name="imageURL"
                                value={lavatory.imageURL}
                                onChange={handleImgChange}
                            />
                        </label>
                    </div>
                </div >
                <button type="submit">Save Changes</button>
            </form >
        </div >
    );

};

export default EditToilet;

