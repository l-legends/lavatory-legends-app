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
    const [imageURL, setImageURL] = useState("");
    const navigate = useNavigate();


    // Handler function for the form
    const handleTitle = (e) => setTitle(e.target.value)
    const handleDescription = (e) => setDescription(e.target.value)
    const handleLocationPlace = (e) => setLocationPlace(e.target.value)
    const handleLocationCity = (e) => setLocationCity(e.target.value)
    const handleLocationCountry = (e) => setLocationCountry(e.target.value)
    const handleTags = (e) => setTags(e.target.value)
    const handleImageURL = (e) => setImageURL(e.target.value)


    // Base URL & Navigate
    const database = "https://lavatory-legends.adaptable.app/lavatories"



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
            imageURL: imageURL
        }

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
                    <div>
                        <label>Name
                            <input
                                type="text"
                                name="title"
                                placeholder="Add a descriptive title"
                                value={title}
                                onChange={handleTitle}
                            />
                        </label>
                    </div>
                    <div>
                        <label>Description
                            <input
                                type="text"
                                name="description"
                                placeholder="Add a description ~ 100 words"
                                value={description}
                                onChange={handleDescription}
                            />
                        </label>
                    </div>
                    <div>
                        <label>Place
                            <input
                                type="text"
                                name="locationPlace"
                                placeholder="Add the name of the place/bar/restaurant here"
                                value={locationPlace}
                                onChange={handleLocationPlace}
                            />
                        </label>
                    </div>
                    <div>
                        <label>City
                            <input
                                type="text"
                                name="locationCity"
                                placeholder="Add the city here"
                                value={locationCity}
                                onChange={handleLocationCity}
                            />
                        </label>
                    </div>
                    <div>
                        <label>Country
                            <input
                                type="text"
                                name="locationCountry"
                                placeholder="Add the country here"
                                value={locationCountry}
                                onChange={handleLocationCountry}
                            />
                        </label>
                    </div>
                    <div>
                        <label>Tags
                            <input
                                type="text"
                                name="tags"
                                placeholder="Add tags, separated by comma"
                                value={tags}
                                onChange={handleTags}
                            />
                        </label>
                    </div>
                    <div>
                        <label>Image
                            <input
                                type="text"
                                name="imageURL"
                                placeholder="Add the image URL here"
                                value={imageURL}
                                onChange={handleImageURL}
                            />
                        </label>
                    </div>
                    <button type="submit">Add new lavatory</button>
                </form>
            </div>
        </>

    );
}

export default AddToiletForm;
