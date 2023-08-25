import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User } from 'phosphor-react';
import { ShopContext } from '../context/ShopContext'; // Import your ShopContext
import './navbar.css';
export const NavBar = () => {
    const { cartItems } = React.useContext(ShopContext);

    const totalCartItems = Object.values(cartItems).reduce((total, count) => total + count, 0);

    return (
        <div className="navbar">
            <div className="links">
                <Link to="/"> Shop </Link>
                <Link to="/contact"> Contact </Link>
                <Link to="/login">
                    <User size={32} />
                </Link>
                <Link to="/cart">
                    <ShoppingCart size={25}/>
                    {totalCartItems > 0 && <span className="cart-item-count">{totalCartItems}</span>}
                </Link>
            </div>
        </div>
    );
};