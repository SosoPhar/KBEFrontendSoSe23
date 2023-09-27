import React, { useState } from "react";
import { PRODUCTS } from "./products";
import { Product } from "./Product";
import "./shop.css";
import PopUp from "./PopUp";

export const Shop = ({ isLogin, userData }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

     const isAdmin = isLogin && userData?.username?.includes('admin');

    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>Your ArtLOVE</h1>
                {isAdmin && (
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
                    <Product data={product} isLogin={isLogin} userData={userData} />
                ))}
            </div>
        </div>
    );
};