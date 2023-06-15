import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./cart.css";

export const Cart = () => {

    const navigate = useNavigate();

    return (
        <div className="cart">
            <div>
                <h1>Your Cart Items</h1>
            </div>
        </div>
    );
};