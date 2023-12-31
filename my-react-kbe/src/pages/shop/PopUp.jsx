import React, { useState, useContext } from "react";
import "./popUp.css";
import CloseIcon from '../../components/CloseIcon';
import staticImage from "../../assets/1.jpg"

import { createProduct, getImage } from "../../api/APICaller";

import { APIContext } from "../../context/APIContext";



const PopUp = ({ togglePopup }) => {


    const [name, setName] = useState(""); 
    const [description, setDescription] = useState(""); 
    const [price, setPrice] = useState(""); 
   
    const [imagePrompt, setImagePrompt] = useState(""); 
    
    const {createOneProduct} = useContext(APIContext);


    
    const fetchImage = async () => {
        try{
            const response = await getImage(imagePrompt);
            return response;
        } catch(error) {
            console.log("WORKED NICHT")
        }
    };

    
    async function closeAndAdd() {
        
        let productToBeCreated = {
            name: name,
            description: description,
            price: price,
            image: await fetchImage(),
        }
        console.log(productToBeCreated)
        await createOneProduct(productToBeCreated); 
        togglePopup();  
    }
    

    return (
        <div className="popup">
            <CloseIcon onClick={togglePopup} />
            <h2>Add Picture</h2>
            <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Name Your Art" />
            <input value={description} onChange={e => setDescription(e.target.value)} type="text" placeholder="Description" />
            <input value={price} onChange={e => setPrice(e.target.value)} type="number" placeholder="Price" />
            <input value={imagePrompt} onChange={e => setImagePrompt(e.target.value)} type="text" placeholder="generate random image or write down a theme" />
            {/* ToDo bitte hier Backend anbinden, neues Bild generieren und hinzufügen */}
            <button className="addButton" onClick={closeAndAdd}>Add</button>
        </div>
    );
};

export default PopUp;
