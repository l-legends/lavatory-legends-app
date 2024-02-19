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

   // After edition
   const [editedTitle, setEditedTitle] = useState("");
   //const [editedDescription, setEditedDescription] = useState("");
   //const [editedLocationPlace, setEditedLocationPlace] = useState("");
   //const [editedLocationCity, setEditedLocationCity] = useState("");
   //const [editedLocationCountry, setEditedLocationCountry] = useState("");
   ///const [editedTags, setEditedTags] = useState("");
   //const [editedImageURL, setEditedImageURL] = useState("");


   // Handler function for the form
   const editTitle = (e) => setEditedTitle(e.target.value)
  // const editDescription = (e) => setEditedDescription(e.target.value)
  // const editLocationPlace = (e) => setEditedLocationPlace(e.target.value)
  // const editLocationCity = (e) => setEditedLocationCity(e.target.value)
  // const editLocationCountry = (e) => setEditedLocationCountry(e.target.value)
  // const editTags = (e) => setEditedTags(e.target.value)
  // const editImageURL = (e) => setEditedImageURL(e.target.value)


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

    // TEST
const handleTitleChange = (e) => {
    setLavatory((prevLavatory) => ({
        ...prevLavatory,
        title: e.target.value
    }));
};

   const handleSubmit = async (e) => {
       e.preventDefault();

       try {
        await axios.put(`${database}/${id}`, lavatory);
        navigate(`/lavatories/${id}`);
        console.log(lavatory)
 /* 
       const editedLavatory = {
           title: editedTitle,
         description: editedDescription,
           location: {
               place: editLocationPlace,     //from const useState
               city: editLocationCity,       //from const useState
               country: editLocationCountry  //from const useState
           },
           tags: editedTags.split(","),    // We've got an input string. Tags should be separated by comma. This converts the string to our array. Maybe we'll find a better solution with preselected?
           imageURL: editedImageURL*/
       }
       catch (e) {
        console.log(e)
    }

     //  setEditedTitle(editTitle);
     //  navigate(`/lavatories/${id}`)
   };

   return (
    <div className="editToiletForm">
            <form onSubmit={handleSubmit}>
                <div className="editToiletFormElement">
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
                <button type="submit">Save Changes</button>
            </form>
    </div>
);

};

export default EditToilet;

