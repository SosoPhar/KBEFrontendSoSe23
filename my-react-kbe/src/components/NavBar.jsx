import React from "react";
import { Link } from "react-router-dom";
import {ShoppingCart, SignOut, User} from "phosphor-react";
import { ShopContext } from "../context/ShopContext"; // Import your ShopContext

import "./navbar.css";

export const NavBar = ({isLogin, userData, login, logout}) => {
    const { cartItems } = React.useContext(ShopContext);

    const totalCartItems = Object.values(cartItems).reduce(
        (total, count) => total + count,
        0
    );

    return (
        <div className="navbar">
            <div className="links">
                <Link to="/"> Shop </Link>
                <Link to="/contact"> Contact </Link>
                <Link to="/cart">
                    <ShoppingCart size={25} />
                    {totalCartItems > 0 && (
                        <span className="cart-item-count">{totalCartItems}</span>
                    )}
                </Link>
                <Link to="/secured"> Secured Page </Link>

                <div className="hover:text-gray-200">
                    {!isLogin && (
                        <Link to="/login" onClick={login}>
                            <User size={32} />
                        </Link>
                    )}
                    {isLogin && (
                        <button type="button" className="text-blue-800" onClick={logout}>
                            <div>
                                <SignOut size={32} />
                                <span style={{ marginBottom: '-55px' }}>
                                {`${userData?.firstName} ${userData?.lastName}`}
                                </span>
                            </div>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};



