import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import './shop.css';
import './popUp.css';

export const Product = (props) => {
    const { id, productName, productDescription, price, productImage } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemCount = cartItems[id] || 0;

    // Skander Assuming you have a userRole variable to determine the user's role
    const userRole = 'none'; // Replace with your actual user role check

    return (
        <div className="product">
            <img src={productImage} alt={productName} />
            <div className="description">
                <p><b>{productName}</b></p>
                <p>{productDescription}</p>
                <p><b>{price}</b></p>

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
