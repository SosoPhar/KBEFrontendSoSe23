import React, { useState } from 'react';
import './checkout.css';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');

    const handleCheckout = () => {
        // Replace this with your actual checkout logic
        // For this example, let's just show an alert
        alert('Order placed successfully! Thank you for your order.');
        navigate('/');
    };

    const navigate = useNavigate();

    return (
        <div className="checkout-container">
            <h1 className="checkout-title">Checkout</h1>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="input-field"
                />
                <input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="input-field"
                />
                <input
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="input-field"
                />
                <input
                    type="text"
                    placeholder="Postal Code"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    className="input-field"
                />
            </div>
            {/* Replace 'YOUR_PAYPAL_LINK_HERE' with your actual PayPal payment URL */}
            <a href="YOUR_PAYPAL_LINK_HERE" className="paypal-button">
                <img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_100x26.png" alt="PayPal" />
            </a>
            <button className="checkout-button" onClick={() => handleCheckout()}>
                Checkout
            </button>
        </div>
    );
};

export default CheckoutPage;
