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
        tags: "",
        imageURL: ""
    });

     //const handleChange = (event) => {
     //   const name = event.target.name;
     //   const value = event.target.value;
     //   setEditLavatory(values => ({...values, [name]: value}))
     //   console.log(name, value)
    //}

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
    
     /* const [lavatory, setLavatory] = useState({
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
*/

    useEffect(() => {
        const getLavatory = async () => {
            try {
                const response = await axios.get(`${database}/${id}`);
                setEditLavatory(response.data);
            } catch (error) {
                console.error("Error fetching lavatory data:", error);
            }
        };
        getLavatory();
    }, [database, id]);


/*


   
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

    */

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

