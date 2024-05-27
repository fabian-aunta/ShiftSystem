import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./ShiftTable.css";

const ShiftTable = () => {
  const [shifts, setShifts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const shiftsPerPage = 5; // Número de turnos por página

  useEffect(() => {
    const fetchShifts = async () => {
      try {
        const response = await fetch("/shifts.json"); // Ajusta la URL según tu API o archivo JSON
        if (!response.ok) {
          throw new Error("Error fetching shifts");
        }
        const data = await response.json();
        setShifts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchShifts();
  }, []);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * shiftsPerPage;
  const currentShifts = shifts.slice(offset, offset + shiftsPerPage);
  const pageCount = Math.ceil(shifts.length / shiftsPerPage);

  return (
    <div className="shift-table-container">
    <div className="header-container">
      <h1>Listado de Turnos</h1>
      <button className="add-button">Agregar</button>
    </div>
    <table className="shift-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Empleado</th>
          <th>Fecha</th>
          <th>Hora de Inicio</th>
          <th>Hora de Fin</th>
        </tr>
      </thead>
      <tbody>
        {currentShifts.map((shift) => (
          <tr key={shift.id}>
            <td>{shift.id}</td>
            <td>{shift.employee}</td>
            <td>{shift.date}</td>
            <td>{shift.startTime}</td>
            <td>{shift.endTime}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <ReactPaginate
      previousLabel={"Anterior"}
      nextLabel={"Siguiente"}
      breakLabel={"..."}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={handlePageClick}
      containerClassName={"pagination"}
      activeClassName={"active"}
    />
  </div>
  );
};

export default ShiftTable;