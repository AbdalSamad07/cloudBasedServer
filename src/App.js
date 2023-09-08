import React, { useState } from 'react';

import Navbar from './components/Navbar';
import Games from './pages/Games';
import Chat from './pages/Chat';
import FileSharing from './pages/FileSharing';

import WelcomeMessage from './components/WelcomeMessage';
import Calendar from './components/Calendar';
import PhotoGallery from './components/PhotoGallery';
import SharedFiles from './components/SharedFiles';

import Login from './Login';
import Layout from './Layout'; // Import the Layout component

import './appStyles.css';

function App() {
    const [currentPage, setCurrentPage] = useState('Home');
    const [isLoggedIn, setIsLoggedIn] = useState(false);  
    const [currentUser, setCurrentUser] = useState(''); // New state to store the logged-in user's name

    const handleLoginSuccess = (username) => { // Accept a username parameter
        setIsLoggedIn(true);
        setCurrentUser(username); // Set the current user
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setCurrentPage('Home');  
    };

    if (!isLoggedIn) {
        return <Login onLogin={handleLoginSuccess} />;
    }

    return (
        <div className="App">
            {currentPage === 'Home' && (
                <Layout setCurrentPage={setCurrentPage}>
                    <div className="home-content">
                        <WelcomeMessage username={currentUser} />
                        <Calendar />
                        <PhotoGallery photos={[]} />
                        <SharedFiles files={[]} />
                    </div>
                </Layout>
            )}
            {currentPage === 'Games' && (
                <Layout setCurrentPage={setCurrentPage}>
                    <Games />
                </Layout>
            )}
            {currentPage === 'FileSharing' && (
                <Layout setCurrentPage={setCurrentPage}>
                    <FileSharing />
                </Layout>
            )}
            {currentPage === 'Chat' && (
                <Layout setCurrentPage={setCurrentPage}>
                    <Chat />
                </Layout>
            )}
        </div>
    );
}

export default App;
