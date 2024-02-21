import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";



function EditToilet() {

    const [editLavatory, setEditLavatory] = useState({
        title: "",
        description: "",
        location: {
            place: "",
            city: "",
            country: ""
        },
        tags: [],
        imageURL: ""
    });

    const [tagsString, setTagsString] = useState("");  // We need this one when we convert our tags back into a string

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEditLavatory((prevLavatory) => {

            if (name.includes('.')) {
                const [parent, child] = name.split('.');
                    return {
                        ...prevLavatory,
    
                    [parent]: {
                        ...prevLavatory[parent],
                        [child]: value
                    }
                };
            } else {
                return { ...prevLavatory, [name]: value };
            }
        });

        if (name === "tags") {
            setTagsString(value);
            setEditLavatory((prevLavatory) => ({
                ...prevLavatory,
                tags: value.split(",").map(tag => tag.trim()).join(', ')
              }));
            }
    };
    

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await axios.put (`${database}/${id}`, editLavatory);
            navigate(`/lavatories/${id}`);
        }
        catch (e) {
            console.log(e)
        }
    }
    

    const { id } = useParams();

    // useful const
    const database = "https://lavatory-legends.adaptable.app/lavatories"
    const navigate = useNavigate();

    useEffect(() => {
        const getLavatory = async () => {
            try {
                const response = await axios.get(`${database}/${id}`);
                setEditLavatory(response.data);
                setTagsString(response.data.tags.join(", "));
            } catch (error) {
                console.error("Error fetching lavatory data:", error);
            }
        };
        getLavatory();
    }, [database, id]);

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
                                value={editLavatory.title}
                                onChange={handleChange}
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
                                value={editLavatory.description || ""}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className="editToiletFormElements">
                        <label>Place
                            <br />
                            <input
                                type="text"
                                name="location.place"
                                value={editLavatory.location.place || ""}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className="editToiletFormElements">
                        <label>City
                            <br />
                            <input
                                type="text"
                                name="location.city"
                                value={editLavatory.location.city || ""}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className="editToiletFormElements">
                        <label>Country
                            <br />
                            <input
                                type="text"
                                name="location.country"
                                value={editLavatory.location.country|| ""}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className="editToiletFormElements">
                        <label>Tags
                            <br />
                            <input
                                type="text"
                                name="tags"
                                value={editLavatory.tags|| ""}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className="editToiletFormElements">
                        <label>Image
                            <br />
                            <input
                                type="text"
                                name="imageURL"
                                value={editLavatory.imageURL || ""}
                                onChange={handleChange}
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

