import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";



function EditToilet() {

    const [imageUrl, setImageUrl] = useState(null);   // IMG Upload
    const [waitingForImageUrl, setWaitingForImageUrl] = useState(false);   // IMG Upload

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

                // Difference to AddToilet: Update the state with the new img URL
                setEditLavatory(prevLavatory => ({
                    ...prevLavatory,
                    imageURL: response.data.secure_url
                }));
                //

                setWaitingForImageUrl(false);
                console.log(waitingForImageUrl);
            })
            .catch((e) => {
                console.error(e);
            });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await axios.put(`${database}/${id}`, editLavatory);
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
        <div className="editToiletForm rounded-lg pb-20 my-20">
            <form onSubmit={handleSubmit}>
                <div className="space-y-5 ">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="editToiletFormElements">
                            <label className="block text-lg font-md text-white p-3">Name

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
                            <label className="block text-lg font-md text-white p-3">Tags
                                <br />
                                <input
                                    type="text"
                                    name="tags"
                                    value={editLavatory.tags || ""}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="editToiletFormElements">
                            <label className="block text-lg font-md text-white p-3">Description
                                <br />
                                <textarea
                                    type="text"
                                    name="description"
                                    value={editLavatory.description || ""}
                                    onChange={handleChange}
                                    className="rounded-lg"
                                />
                            </label>
                        </div>
                        <div className="editToiletFormElements">
                            <label className="block text-lg font-md text-white p-3">Place
                                <br />
                                <input
                                    type="text"
                                    name="location.place"
                                    value={editLavatory.location.place || ""}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="editToiletFormElements">
                            <label className="block text-lg font-md text-white p-3">City
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
                            <label className="block text-lg font-md text-white p-3">Country
                                <br />
                                <input
                                    type="text"
                                    name="location.country"
                                    value={editLavatory.location.country || ""}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="editToiletFormElements flex justify-center">
                        <label className="block text-lg font-md text-white p-3">Upload other image
                            <br />
                            <input
                                type="file"
                                name="imageURL"
                                onChange={(e) => handleFileUpload(e)}
                            />
                        </label>
                    </div>
                    <br />
                </div >
                <button className="text-white border border-orange py-2 px-7 bg-orange" type="submit">Save Changes</button>
            </form >
        </div >
        
    );

};

export default EditToilet;

