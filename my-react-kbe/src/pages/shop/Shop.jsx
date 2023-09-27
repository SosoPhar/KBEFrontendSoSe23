import React, { useContext, useEffect, useState } from "react";
//import { PRODUCTS } from "./products";
import { Product } from "./Product";
import "./shop.css";
import PopUp from "./PopUp";

import { APIContext } from "../../context/APIContext";

//import {getAllProducts} from "./../../api/APICaller"; 





export const Shop = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);


    const {products, fetchAllProducts, ping} = useContext(APIContext);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };


    useEffect(() => {
        fetchAllProducts();
    }, [ping, isPopupOpen]);

    /*
    useEffect(() => {
        async function fetchAllProducts() {
            try {
                const data = await getAllProducts(); 
                console.log(data);
                setProducts(data); 
            } catch(error) {
                console.error("")
            }

        }

        fetchAllProducts(); 

    }, [isPopupOpen]);*/




    const userRole = 'admin';

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
                {products.map((product) => (
                    <Product data={product} />
                ))}
            </div>
        </div>
    );
};

