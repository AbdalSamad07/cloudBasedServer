import React, { useState } from 'react';
import './loginStyles.css';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Submitting form...');
        console.log({ username, password });
        try {
            console.log('Sending request to server...');
            const response = await fetch('http://localhost/login.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Response received:', data); 

            if (data.status === 'success') {
                alert('Login successful. Redirecting...');
                onLogin(username); // Pass the username to the callback
            } else {
                console.warn('Login failed. Check your credentials.');
                alert('Login failed. Check your credentials.');
            }
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error.message);
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h2>Login</h2>
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
