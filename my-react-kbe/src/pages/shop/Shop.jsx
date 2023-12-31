import React, { useContext, useEffect, useState } from "react";
//import { PRODUCTS } from "./products";
import { Product } from "./Product";
import "./shop.css";
import PopUp from "./PopUp";

import { APIContext } from "../../context/APIContext";






export const Shop = ({ isLogin, userData }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);


    const {products, fetchAllProducts, ping} = useContext(APIContext);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    useEffect(() => {
        fetchAllProducts();
    }, [ping, isPopupOpen]);


    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>Your ArtLOVE</h1>
                {isLogin && (
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
                {products.map((product) => (
                    <Product data={product} isLogin={isLogin} userData={userData} />
                ))}
            </div>
        </div>
    );
};