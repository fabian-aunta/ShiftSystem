import React from 'react';
import { useLocation } from 'react-router-dom';
import './WelcomeCard.css';

const WelcomeCard = () => {
    const location = useLocation();
    const { userName, turnNumber } = location.state || {};

    return (
        <div className="card-container welcome-card">
            <h1>Hola {userName}</h1>
            <p>Tu turno es {turnNumber}</p>
        </div>
    );
};

export default WelcomeCard;
