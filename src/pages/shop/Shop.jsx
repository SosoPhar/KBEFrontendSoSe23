import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./Product";
import "./shop.css";

import {useEffect, useState } from "react";

import { getAllProducts, getOneProduct, getRandomImage } from "../../api/APICaller";

//todo -> load products with hook? useEffect? 

const product = {
    id: 1,
    productName: "FirstArt",
    price: 999.0,
    productImage: "",
};
const product2 = {
    id: 1,
    productName: "FirstArt",
    price: 999.0,
    productImage: "",
};

const products = []; 




export const Shop = () => {
    /*const [apiData, setApiData] = useState(null);


    useEffect(() => {
        const apiUrl = "http://localhost:8080/api/pexels/";

        //fetch(apiUrl, { mode : "no-cors"})
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Fehler beim API-Aufruf");
                }
                console.log("we heree");

                return response.json();
            })
            .then(data => {
                setApiData(data);
                console.log(data);
                product.productImage = apiData.photos[0].src.medium; 
                product2.productImage = apiData.photos[0].src.medium; 

                products.push(product);
                products.push(product2);
            })
            .catch(error => {
                console.log("we heree 22");

                console.error(error); 
            });
    }, []);*/
    
    
    useEffect(() => {
        //const [apiData, setApiData] = useState(null);
        /*
        try {
            const data = await getAllProducts(); 
            //setApiData(data) 
        } catch(error) {
            console.error(error); 
        }  */

        //console.log(getAllProducts());
        //console.log(getOneProduct(2));
        console.log(getRandomImage());
        PRODUCTS.

    }, [])


    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>Your ArtLOVE</h1>
            </div>
            <div className="products">
                {PRODUCTS.map((x) => (
                    <Product data={x} />
                ))}
            </div>
        </div>
    );
};