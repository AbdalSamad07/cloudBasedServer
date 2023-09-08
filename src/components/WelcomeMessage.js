import React from 'react';

const WelcomeMessage = ({ username }) => {
    const greeting = new Date().getHours() < 12 ? "Good Morning" : new Date().getHours() < 18 ? "Good Afternoon" : "Good Evening";
    return (
        <div className="welcome-message">
            <h1>{greeting}, {username}!</h1>
        </div>
    );
};

export default WelcomeMessage;
