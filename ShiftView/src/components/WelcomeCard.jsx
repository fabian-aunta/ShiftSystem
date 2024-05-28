import React from 'react';
import './WelcomeCard.css';

const WelcomeCard = ({ userName, turnNumber }) => {
    return (
        <div className="card-container welcome-card">
            <h1>Hola {userName}</h1>
            <p>Tu turno es {turnNumber}</p>
        </div>
    );
};

export default WelcomeCard;
