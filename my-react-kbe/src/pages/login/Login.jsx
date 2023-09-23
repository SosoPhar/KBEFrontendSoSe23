import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './login.css';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleLogin = () => {
        {/* ToDo Skander bitte hier Backend anbinden, IAM Intergartion hier  */}
        if (username === 'user' && password === 'password') {
            setLoggedIn(true);
            navigate('/');
        } else {
            alert('Please try again, maybe check your spelling');
        }
    };

    return (
        <div className="login-container">
            <h1 className="login-title">Login Page</h1>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="input-field"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-field"
                />
            </div>
            <button onClick={handleLogin} className="login-button">
                Login
            </button>
            {/* ToDo Sopha bitte noch Logout Button umsetzten wenn login geklappt hat */}
        </div>
    );
};

export default LoginPage;
