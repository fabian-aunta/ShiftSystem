import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./ShiftTable.css";

const ShiftTable = () => {
  const [shifts, setShifts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const shiftsPerPage = 5; // Número de turnos por página

  const fetchShifts = async () => {
    try {
      const response = await fetch("http://localhost:2000/api/shifts/queue", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('login')}`
        }
      });
      if (!response.ok) {
        throw new Error("Error fetching shifts");
      }
      const data = await response.json();
      setShifts(data.shifts);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchShifts();
  }, []);

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
        fetchShifts(); // Refresh the list of shifts
      } else {
        console.error('Error al pasar turno');
      }
    } catch (error) {
      console.error(error);
    }
  };

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
        <button className="pass-turn-button" onClick={handlePassTurn}>Pasar Turno</button>
      </div>
      <table className="shift-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Turno</th>
            <th>Empleado</th>
            <th>Número de Documento</th>
            <th>Prioridad</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {currentShifts.map((shift) => (
            <tr key={shift._id}>
              <td>{shift._id}</td>
              <td>{shift.turnNumber}</td>
              <td>{`${shift.assignedTo.firstName} ${shift.assignedTo.lastName}`}</td>
              <td>{shift.assignedTo.documentNumber}</td>
              <td>{shift.priority}</td>
              <td>{shift.status}</td>
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
