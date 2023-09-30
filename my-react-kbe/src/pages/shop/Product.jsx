import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../../context/ShopContext';
import './shop.css';
import './popUp.css';

import { APIContext } from '../../context/APIContext';


export const Product = (props) => {
    const { id, name, description, price, image } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemCount = cartItems[id] || 0;

    const {deleteOneProduct} = useContext(APIContext);
  
    const { isLogin, userData } = props;


    const isAdmin = isLogin && userData?.username?.includes('admin');

    return (
        <div className="product">
            <img src={image} alt={name} />
            <div className="description">
                <p><b>{name}</b></p>
                <p>{description}</p>
                <p><b>${price}</b></p>

                {isAdmin && (
                    <button className="adminDeletButton" onClick={() => deleteOneProduct(id)}>Delete Picture</button>
                )}
            </div>

            <button className="addToCartButton" onClick={() => addToCart(id)}>
                Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
            </button>
        </div>
    );
};