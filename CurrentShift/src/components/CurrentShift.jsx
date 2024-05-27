import React, { useEffect, useState } from "react";
import "./CurrentShift.css";

const CurrentShift = () => {
  const [currentShift, setCurrentShift] = useState(null);

  useEffect(() => {
    const fetchCurrentShift = async () => {
      const data = {
        jwt: localStorage.getItem('login')
    };
      console.log(data);
      fetch('http://localhost:2000/turno',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(response => response.json())
      .then(result => {
        setCurrentShift(result[0]);
      }).catch(error => {
          console.log(error)
      })

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
        <p>ID del Turno: {currentShift.id} </p>
        <p>Empleado: {currentShift.first_name} {currentShift.last_name}</p>
      </div>
    </div>
  );
};

export default CurrentShift;
