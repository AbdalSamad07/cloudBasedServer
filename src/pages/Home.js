import React from 'react';
import '../homeStyles.css'; // Our CSS for the Home page.
import Layout from '../Layout';

const Home = () => {
    return (
        <Layout>
            <div className="home-container">
                <header className="home-header">
                    <h1>Your Cloud</h1>
                    <nav className="main-navigation">
                        <ul>
                            <li><a href="/chat">Chat</a></li>
                            <li><a href="/documents">Documents</a></li>
                            <li><a href="/fileupload">File Upload</a></li>
                            <li><a href="/games">Games</a></li>
                        </ul>
                    </nav>
                </header>

                <div className="home-content">
                    <section className="module photos">
                        <h2>Photos</h2>
                        {/* Image or icon here */}
                        <p>View and upload your photos.</p>
                    </section>

                    <section className="module games">
                        <h2>Games</h2>
                        {/* Image or icon here */}
                        <p>Play and explore top games.</p>
                    </section>

                    {/* Add more modules as needed */}
                </div>
            </div>
        </Layout>
    );
};

export default Home;
