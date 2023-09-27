import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import './shop.css';
import './popUp.css';

export const Product = (props) => {
    const { isLogin, userData } = props;

    const { id, productName, productDescription, price, productImage } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemCount = cartItems[id] || 0;
    const isAdmin = isLogin && userData?.username?.includes('admin');

    return (
        <div className="product">
            <img src={productImage} alt={productName} />
            <div className="description">
                <p><b>{productName}</b></p>
                <p>{productDescription}</p>
                <p><b>{price}</b></p>

                {/* Conditionally render the "Delete" button for admin users */}
                {isAdmin && (
                    <button className="addToCartButton">
                        Delete Cart
                    </button>
                )}
            </div>

            <button className="addToCartButton" onClick={() => addToCart(id)}>
                Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
            </button>
        </div>
    );
};