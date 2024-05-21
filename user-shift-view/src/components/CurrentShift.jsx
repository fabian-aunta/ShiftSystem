import React, { useEffect, useState } from "react";
import "./CurrentShift.css";

const CurrentShift = () => {
  const [currentShift, setCurrentShift] = useState(null);

  useEffect(() => {
    const fetchCurrentShift = async () => {
      const response = await fetch("/current-shift.json");
      const data = await response.json();
      setCurrentShift(data);
    };

    fetchCurrentShift();
    const interval = setInterval(fetchCurrentShift, 5000); // Actualiza cada 5 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  if (!currentShift) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="current-shift-container">
      <h1>Turno Actual</h1>
      <div className="shift-details">
        <p>ID del Turno: {currentShift.id}</p>
        <p>Empleado: {currentShift.employee}</p>
      </div>
    </div>
  );
};

export default CurrentShift;