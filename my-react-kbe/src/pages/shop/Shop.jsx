import React, { useState } from "react";
import { PRODUCTS } from "./products";
import { Product } from "./Product";
import "./shop.css";
import PopUp from "./PopUp";

export const Shop = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    const userRole = 'none';

    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>Your ArtLOVE</h1>

                {userRole === 'user' && (
                    <button className="AddButton">add Picture</button>
                )}

                {userRole === 'admin' && (
                    <div className="adminButtonsContainer">
                        <button className="AddButton" onClick={togglePopup}>
                            Add Picture
                        </button>
                    </div>
                )}

                {isPopupOpen && (
                    <PopUp togglePopup={togglePopup} />
                )}
            </div>
            <div className="products">
                {PRODUCTS.map((product) => (
                    <Product data={product} />
                ))}
            </div>
        </div>
    );
};

