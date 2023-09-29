import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext.jsx";
//import { PRODUCTS } from "../shop/products";
import { CartItem } from "./CartItem";
import { useNavigate } from "react-router-dom";
import "./cart.css";
import { APIContext } from "../../context/APIContext.jsx";

export const Cart = () => {
    const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);

    const {products} = useContext(APIContext);

    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();

    return (
        <div className="cart">
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className="cart">
                {products.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product} />;
                    }
                })}
            </div>

            {totalAmount > 0 ? (
                <div >
                    <h3> Subtotal: ${totalAmount} </h3>
                    <button className="continueShoppingButton" onClick={() => navigate("/")}> Continue Shopping </button>
                    <button className= "checkoutButton"
                        onClick={() => {
                            checkout();
                            navigate("/checkout");
                        }}
                    >
                        {" "}
                        Checkout{" "}
                    </button>
                </div>
            ) : (
                <h3 style={{ color:"olivedrab"}}> sadly your shopping cart is empty,
                    klick the Shop above and add the pictures that you like via the add to cart button. Enjoy</h3>
            )}
        </div>
    );
};