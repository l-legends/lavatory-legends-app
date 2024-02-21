import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddToiletForm() {

    // Setting up useState for every lavatory prop

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [locationPlace, setLocationPlace] = useState("");
    const [locationCity, setLocationCity] = useState("");
    const [locationCountry, setLocationCountry] = useState("");
    const [tags, setTags] = useState("");
    //  const [imageURL, setImageURL] = useState("");
    const [imageUrl, setImageUrl] = useState(null);   // IMG Upload
    const [waitingForImageUrl, setWaitingForImageUrl] = useState(false);   // IMG Upload

    const navigate = useNavigate();


    // Handler function for the form
    const handleTitle = (e) => setTitle(e.target.value)
    const handleDescription = (e) => setDescription(e.target.value)
    const handleLocationPlace = (e) => setLocationPlace(e.target.value)
    const handleLocationCity = (e) => setLocationCity(e.target.value)
    const handleLocationCountry = (e) => setLocationCountry(e.target.value)
    const handleTags = (e) => setTags(e.target.value)
    //  const handleImageURL = (e) => setImageURL(e.target.value)


    // Base URL & Navigate
    const database = "https://lavatory-legends.adaptable.app/lavatories";

    // IMG Upload
    const handleFileUpload = (e) => {
        setWaitingForImageUrl(true);
        console.log("The file to be uploaded is: ", e.target.files[0]);
        const url = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_NAME}/upload`;
        const dataToUpload = new FormData();
        dataToUpload.append("file", e.target.files[0]);
        dataToUpload.append("upload_preset", import.meta.env.VITE_UNSIGNED_UPLOAD_PRESET);
        axios
            .post(url, dataToUpload)
            .then((response) => {
                console.log('RESPONSE ', response.data);
                setImageUrl(response.data.secure_url);
                setWaitingForImageUrl(false);
                console.log(waitingForImageUrl);
            })
            .catch((e) => {
                console.error(e);
            });

    };


    // Setting up handle Submit + Variable newLavatory

    const handleSubmit = (e) => {
        e.preventDefault();

        const newLavatory = {
            title: title,
            description: description,
            location: {
                place: locationPlace,     //from const useState
                city: locationCity,       //from const useState
                country: locationCountry  //from const useState
            },
            tags: tags.split(","),    // We've got an input string. Tags should be separated by comma. This converts the string to our array. Maybe we'll find a better solution with preselected?
            imageURL: imageUrl
        }


        // Axios.post for the whole Details
        axios.post(`${database}`, newLavatory)
            .then((response) => {
                console.log(response)
                navigate(`/lavatories/${response.data.id}`) // After clicking the submit button, this navigates you to the new Detailpage
            })
            .catch((e) => {
                console.log(e)
            })
    }


    return (
        <>
            <div className="addToiletForm">
                <form onSubmit={handleSubmit}>
                    <div className="addToiletFormElements">
                        <label>Name
                            <br />
                            <input
                                type="text"
                                name="title"
                                placeholder="Add a title, e.g. comfy toilet"
                                value={title}
                                onChange={handleTitle}
                            />
                        </label>
                    </div>
                    <div className="addToiletFormElements">
                        <label>Description
                            <br />
                            <input
                                type="textarea"
                                name="description"
                                placeholder="Add a description ~ 100 words"
                                value={description}
                                onChange={handleDescription}
                            />
                        </label>
                    </div>
                    <div className="addToiletFormElements">
                        <label>Place
                            <br />
                            <input
                                type="text"
                                name="locationPlace"
                                placeholder="In which bar/restaurant/place is this toilet?"
                                value={locationPlace}
                                onChange={handleLocationPlace}
                            />
                        </label>
                    </div>
                    <div className="addToiletFormElements">
                        <label>City
                            <br />
                            <input
                                type="text"
                                name="locationCity"
                                placeholder="Add the city here"
                                value={locationCity}
                                onChange={handleLocationCity}
                            />
                        </label>
                    </div>
                    <div className="addToiletFormElements">
                        <label>Country
                            <br />
                            <input
                                type="text"
                                name="locationCountry"
                                placeholder="Add the country here"
                                value={locationCountry}
                                onChange={handleLocationCountry}
                            />
                        </label>
                    </div>
                    <div className="addToiletFormElements">
                        <label>Tags
                            <br />
                            <input
                                type="text"
                                name="tags"
                                placeholder="Add tags, separated by comma"
                                value={tags}
                                onChange={handleTags}
                            />
                        </label>
                    </div>
                    <div className="addToiletFormElements">
                        <label>Image
                            <br />
                            <input
                                type="file"
                                name="imageURL"
                                onChange={(e) => handleFileUpload(e)}
                            />
                        </label>
                    </div>
                    {/*} <div className="addToiletFormElements">
                        <label>Image
                            <br />
                            <input
                                type="text"
                                name="imageURL"
                                placeholder="Place the URL here, e.g.https://my-foto.com"
                                value={imageURL}
                                onChange={handleImageURL}
                            />
                        </label>
    </div> */}
                    <br />
                    <button type="submit" disabled={waitingForImageUrl} >Add new lavatory</button>
                </form>
            </div>
        </>

    );
}

export default AddToiletForm;
