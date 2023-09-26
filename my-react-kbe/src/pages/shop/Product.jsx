import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import './shop.css';
import './popUp.css';

export const Product = (props) => {
    const { id, name, description, price, image } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemCount = cartItems[id] || 0;

    // Skander Assuming you have a userRole variable to determine the user's role
    const userRole = 'admin'; // Replace with your actual user role check

    return (
        <div className="product">
            <img src={image} alt={name} />
            <div className="description">
                <p><b>{name}</b></p>
                <p>{description}</p>
                <p><b>${price}</b></p>

                {/* Skander Conditionally render the "Delete" button for admin users */}
                {userRole === 'admin' && (
                    <button className="adminDeletButton">Delete Picture</button>
                    // ToDo: Skander Add functionality to delete the picture when the button is clicked
                )}
            </div>

            <button className="addToCartButton" onClick={() => addToCart(id)}>
                Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
            </button>
        </div>
    );
};
