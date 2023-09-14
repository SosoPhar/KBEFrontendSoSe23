import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User } from 'phosphor-react';
import { ShopContext } from '../context/ShopContext'; // Import your ShopContext
import './navbar.css';

export const NavBar = () => {
    const { cartItems } = React.useContext(ShopContext);
    const totalCartItems = Object.values(cartItems).reduce((total, count) => total + count, 0);

    // ToDo Replace 'isUserAuthenticated' with your actual logic to check if the user is authenticated
    const isUserAuthenticated = true; // Change this based on your authentication state

    // ToDo Replace 'username' with the actual username obtained from Keycloak
    const username = isUserAuthenticated ? 'Sopha' : null; // Set to null if not authenticated

    return (
        <div className="navbar">
            <div className="links">
                <Link to="/"> Shop </Link>
                <Link to="/contact"> Contact </Link>
                <Link to="/login">
                    <User size={32} />
                    {username && <span className="user-username">{username}</span>}
                </Link>
                <Link to="/cart">
                    <ShoppingCart size={25} />
                    {totalCartItems > 0 && <span className="cart-item-count">{totalCartItems}</span>}
                </Link>
            </div>
        </div>
    );
};