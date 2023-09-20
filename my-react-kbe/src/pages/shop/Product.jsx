import React, { useContext, useState } from 'react';
import { ShopContext } from '../../context/ShopContext';
import './shop.css';
import './popUp.css';

export const Product = (props) => {
    const { id, productName, productDescription, price, productImage } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemCount = cartItems[id] || 0;

    return (
        <div className="product">
            <img src={productImage} alt={productName} />
            <div className="description">
                <p> <b>{productName}</b> </p>
                <p>{productDescription}</p>
                <p> <b> {price}</b> </p>
                <button className="adminDeletButton">delete Picture</button>
                {/* ToDo bitte hier Backend anbinden, Bild löschen */}
            </div>
            <button className="addToCartButton" onClick={() => addToCart(id)}>
                Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
            </button>
        </div>
    );
};
