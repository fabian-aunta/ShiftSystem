import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CloseButton from 'react-bootstrap/CloseButton';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

const handleLogout = () => {
  localStorage.removeItem('login'); // Eliminar el token del almacenamiento local
  window.location.href = '/login'; // Redirigir a la página de inicio de sesión y recargar la página
};

function NavbarComponent() {
  const navigate = useNavigate();

  return (
    <Navbar collapseOnSelect expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home" className="custom-text">Sistema Turnos</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" className="custom-text">Features</Nav.Link>
            <Nav.Link href="#pricing" className="custom-text">Pricing</Nav.Link>
            <NavDropdown title={<span style={{ color: 'white' }}>Turnos</span>} id="collapsible-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/turn">Mis Turnos</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/listTurn">Lista de Turnos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Cancelar Turno
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <div className="close-button-container" onClick={handleLogout}>
              <span className="close-button-text">Cerrar Sesión </span>
              <CloseButton aria-label="Hide" className="bg-white" />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
