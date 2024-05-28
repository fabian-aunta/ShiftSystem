import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PassTurn.css';

const PassTurn = () => {
    const [currentShift, setCurrentShift] = useState(null);
    const navigate = useNavigate();

    const fetchCurrentShift = async () => {
        try {
            const response = await fetch('http://localhost:2000/api/shifts/queue', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('login')}`
                }
            });
            const result = await response.json();
            if (result.shifts && result.shifts.length > 0) {
                setCurrentShift(result.shifts[0]);
            } else {
                setCurrentShift(null);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handlePassTurn = async () => {
        try {
            const response = await fetch('http://localhost:2000/api/shifts/pass', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('login')}`
                }
            });
            if (response.ok) {
                const result = await response.json();
                setCurrentShift(result.nextShift);
            } else {
                alert('Error al pasar turno');
            }
        } catch (error) {
            console.error(error);
            alert('Error al pasar turno');
        }
    };

    useEffect(() => {
        fetchCurrentShift();
    }, []);

    return (
        <div className="pass-turn-container">
            <h1>Turno Actual</h1>
            {currentShift ? (
                <div className="shift-details">
                    <p>ID del Turno: {currentShift.turnNumber}</p>
                    <p>Empleado: {currentShift.assignedTo.fullName}</p>
                    <p>Prioridad: {currentShift.priority}</p>
                    <button onClick={handlePassTurn}>Pasar Turno</button>
                </div>
            ) : (
                <p>No hay turnos pendientes</p>
            )}
        </div>
    );
};

export default PassTurn;
