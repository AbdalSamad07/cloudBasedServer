import React, { useState } from 'react';
import '../gameStyles.css';

import Game1 from '../components/Games/game1';
import Game2 from '../components/Games/game2';
import Game3 from '../components/Games/game3';
import Game4 from '../components/Games/game4';
import Game5 from '../components/Games/game5';
import Game6 from '../components/Games/game6';

import diamond from '../images/diamond.jpg';
import freekick from '../images/freekick.jpg';
import omnom from '../images/omnom.jpg';
import solitaire from '../images/solitaire.jpg';
import tabletennis from '../images/tabletennis.jpg';
import truck from '../images/truck.jpg';

const headerWrapperStyle = {
    marginRight: '-140px', // Adjust this value to move the header text to the right
};

const headerStyle = {
    fontFamily: 'SF Pro Display, sans-serif',
    fontSize: '36px',
};

const GamesPage = () => {
    const [activeGame, setActiveGame] = useState(null);

    const handleGameClick = (gameName) => {
        setActiveGame(gameName);
    };

    const gamePreviews = [
        { name: 'Game1', image: diamond },
        { name: 'Game2', image: freekick },
        { name: 'Game3', image: omnom },
        { name: 'Game4', image: solitaire },
        { name: 'Game5', image: tabletennis },
        { name: 'Game6', image: truck },
        // Add other games here
    ];

    return (
        <div className="games-container">
            <div className="header-container" style={headerWrapperStyle}>
                <h1 style={headerStyle}>Games</h1>
            </div>
            <div className="game-previews">
                {gamePreviews.map((game, index) => (
                    <div
                        key={index}
                        className={`game-preview ${activeGame === game.name ? 'active' : ''}`}
                        onClick={() => handleGameClick(game.name)}
                    >
                        <img src={game.image} alt={`Game ${index + 1}`} />
                    </div>
                ))}
            </div>

            <div className="game-iframe-container">
                <div className={`game-iframe ${activeGame ? 'active' : ''}`}>
                    {activeGame === 'Game1' && <Game1 />}
                    {activeGame === 'Game2' && <Game2 />}
                    {activeGame === 'Game3' && <Game3 />}
                    {activeGame === 'Game4' && <Game4 />}
                    {activeGame === 'Game5' && <Game5 />}
                    {activeGame === 'Game6' && <Game6 />}
                    {/* Add other games similarly */}
                </div>
            </div>
        </div>
    );
};

export default GamesPage;
