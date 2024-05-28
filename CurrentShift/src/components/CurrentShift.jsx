import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./CurrentShift.css";

const CurrentShift = () => {
  const [priority, setPriority] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("login");
      if (!token) {
        return;
      }
      const payload = JSON.parse(atob(token.split(".")[1]));
      setUser(payload);
      setIsAdmin(payload.role === "admin");
    };

    fetchUser();
  }, []);

  const handleAssignShift = async (e) => {
    e.preventDefault();
    const endpoint = isAdmin ? "admin-assign" : "assign";
    const body = isAdmin ? { email: user.email, priority } : { priority };

    try {
      const response = await fetch(`http://localhost:2000/api/shifts/${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("login")}`,
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error("Error assigning shift");
      }

      const result = await response.json();
      navigate('/welcome', { state: { userName: result.shift.assignedTo.fullName, turnNumber: result.shift.turnNumber } });
    } catch (error) {
      console.error(error);
      alert("Error assigning shift");
    }
  };

  return (
    <div className="current-shift-container">
      <h1>{isAdmin ? "Asignar Turno (Administrador)" : "Asignar Turno"}</h1>
      <form onSubmit={handleAssignShift} className="assign-shift-form">
        <label>
          Prioridad:
          <select value={priority} onChange={(e) => setPriority(e.target.value)} required>
            <option value="" disabled>
              Seleccionar prioridad
            </option>
            <option value="regular">Regular</option>
            <option value="senior">Senior</option>
            <option value="pregnant">Pregnant</option>
            <option value="special">Special</option>
          </select>
        </label>
        {isAdmin && (
          <label>
            Correo Electrónico del Usuario:
            <input type="email" value={user?.email || ''} readOnly />
          </label>
        )}
        <button type="submit">Asignar Turno</button>
      </form>
    </div>
  );
};

export default CurrentShift;
