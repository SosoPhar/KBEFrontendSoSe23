import React, { useState, useEffect } from 'react';

import './login.css';
import keycloak from "../../keycloak";

const LoginPage = () => {
    const [loggedIn, setLoggedIn] = useState(false);



    useEffect(() => {
        // Check if Keycloak is already initialized
        if (keycloak.authenticated) {
            setLoggedIn(true);
        } else {
            // Initialize Keycloak
            keycloak
                .init({ onLoad: 'login-required' })
                .then((authenticated) => {
                    setLoggedIn(authenticated);
                })
                .catch((error) => {
                    console.error('Keycloak initialization error:', error);
                });
        }
    }, []);

    // Handle logout using Keycloak
    const handleLogout = () => {
        keycloak.logout();
    };

    if (loggedIn) {
        return (
            <div className="login-container">
                <h1 className="welcome-message">Welcome, {keycloak.tokenParsed.preferred_username}!</h1>
                <button onClick={handleLogout} className="logout-button">
                    Logout
                </button>
            </div>
        );
    }

    return (
        <div className="login-container">
            <h1 className="login-title">Login Page</h1>
            <p>Please wait while we redirect you to the Keycloak login page...</p>
        </div>
    );
};

export default LoginPage;