import React, { useEffect, useState } from "react";
import "./CurrentShift.css";

const CurrentShift = () => {
  const [currentShift, setCurrentShift] = useState(null);

  useEffect(() => {
    const fetchCurrentShift = async () => {
      try {
        const response = await fetch("/current-shift.json"); // Asegúrate de que esta ruta es correcta
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Fetched data:", data); // Añade esta línea para depuración
        setCurrentShift(data);
      } catch (error) {
        console.error("Error fetching current shift:", error);
      }
    };

    fetchCurrentShift();
    const interval = setInterval(fetchCurrentShift, 5000); // Actualiza cada 5 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  console.log("Current shift state:", currentShift); // Añade esta línea para depuración

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
