import React, { useState } from "react";
import "./Register.css";

const Register = () => {
    const [formData, setFormData] = useState({
        org: "",
        firstName: "",
        lastName: "",
        documentNumber: "",
        password: "",
        email: "",
        address: "",
        termsAccepted: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();  
        fetch('http://localhost:2000/api/auth/register', { // Asegúrate de que esta URL coincida con tu backend
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(response => response.json())
        .then(result => {
            if(result.message) {
                alert(result.message);
                // Redirigir a la página de login o limpiar el formulario
                setFormData({
                    org: "",
                    firstName: "",
                    lastName: "",
                    documentNumber: "",
                    password: "",
                    email: "",
                    address: "",
                    termsAccepted: false,
                });
            } else {
                alert("Error al registrar usuario");
            }
        }).catch(error => {
            console.error("Error:", error);
            alert("Error al registrar usuario");
        });
    };

    return (
        <div className="register">
            <form onSubmit={handleSubmit} className="register-form">
                <h1>Registrarse</h1>
                <label htmlFor="org">Organización:</label>
                <input type="text" name="org" value={formData.org} onChange={handleChange} required />

                <label htmlFor="firstName">Nombres:</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />

                <label htmlFor="lastName">Apellidos:</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />

                <label htmlFor="documentNumber">Número de documento:</label>
                <input type="text" name="documentNumber" value={formData.documentNumber} onChange={handleChange} required />

                <label htmlFor="password">Contraseña:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required />

                <label htmlFor="email">Correo Electrónico:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />

                <label htmlFor="address">Dirección:</label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} required />

                <label htmlFor="termsAccepted">
                    <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} required />
                    Acepto los Términos y Condiciones
                </label>

                <button type="submit">Registrarme</button>
            </form>
        </div>
    );
};

export default Register;
