import React from "react";
import "./popUp.css";
import CloseIcon from '../../components/CloseIcon';
const PopUp = ({ togglePopup }) => {
    return (
        <div className="popup">
            <CloseIcon onClick={togglePopup} />
            <h2>Add Picture</h2>
            <input type="text" placeholder="Name Your Art" />
            <input type="text" placeholder="Description" />
            <input type="number" placeholder="Price" />
            <input type="text" placeholder="generate random image or write down a theme" />
            {/* ToDo bitte hier Backend anbinden, neues Bild generieren und hinzufügen */}
            <button className="addButton" onClick={togglePopup}>Add</button>
        </div>
    );
};

export default PopUp;
