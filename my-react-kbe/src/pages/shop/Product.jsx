import React, { useContext, useState } from 'react';
import { ShopContext } from '../../context/ShopContext';
import './shop.css';
import './popUp.css';

export const Product = (props) => {
    const { id, productName, productDescription, currency, price, productImage } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemCount = cartItems[id] || 0;

    const userRole = 'admin';

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    return (
        <div className="product">
            <img src={productImage} alt={productName} />
            <div className="description">
                <p> <b>{productName}</b> </p>
                <p>{productDescription}</p>
                <p> <b> {currency} {price}</b> </p>
            </div>

            {userRole === 'user' && (
                <button className="AddButton">add Picture</button>
            )}

            {userRole === 'admin' && (
                <div className="adminButtonsContainer">
                    {/* Step 3: Add onClick to open the popup */}
                    <button className="AddButton" onClick={togglePopup}>
                        Update Picture
                    </button>
                    <button className="adminDeletButton">delete Picture</button>
                </div>
            )}

            {isPopupOpen && (
                <div className="popup">
                    <h2>Add Picture</h2>
                    <input type="text" placeholder="Name Your Art" />
                    <input type="text" placeholder="Description" />
                    <input type="number" placeholder="Price" />
                    <input type="text" placeholder="gernerate random image write down a theme"/>
                    <button onClick={togglePopup}>Add</button>
                </div>
            )}

            <button className="addToCartButton" onClick={() => addToCart(id)}>
                Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
            </button>
        </div>
    );
};
