import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import './shop.css';

export const Product = (props) => {
    const { id, productName, productDescription, currency, price, productImage } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemCount = cartItems[id] || 0;

    // Define the userRole (assuming it's a string)
    const userRole = 'none'; // Change this to 'admin' to test admin role, ur guest to see no other button

    return (
        <div className="product">
            <img src={productImage} alt={productName} />
            <div className="description">
                <p> <b>{productName}</b> </p>
                <p>{productDescription}</p>
                <p> <b> {currency} {price}</b> </p>
            </div>

            {userRole === 'user' && (
                <button className="userButton">add Picture</button>
            )}

            {userRole === 'admin' && (
                <div className="adminButtonsContainer">
                    <button className="adminAddButton">add Picture</button>
                    <button className="adminDeletButton">delete Picture</button>
                </div>
            )}

            <button className="addToCartButton" onClick={() => addToCart(id)}>
                Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
            </button>
        </div>
    );
};
