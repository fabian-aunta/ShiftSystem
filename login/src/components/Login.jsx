import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import facebook from "../icons/facebook.png";
import git from "../icons/github.png";
import twiter from "../icons/gorjeo.png";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();  // Añadido useNavigate

    const handleLogin = (e) => {
        e.preventDefault();
        const data = {
          email: email,
          password: password
        };
      
        fetch('http://localhost:2000/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then(response => response.json())
          .then(result => {
            if (result.token) {
              console.log(result.token);
              localStorage.setItem('login', result.token);
              navigate('/navbar');  // Redirigir al usuario a la ruta que solo contiene el Navbar
            }
          }).catch(error => {
            console.log(error);
          });
      };

    return (
        <div className="login">
            <form onSubmit={handleLogin}>
                <h1>Iniciar Sesión</h1>
                <label htmlFor="email">Correo Electrónico:</label>
                <input onChange={(e) => { setEmail(e.target.value) }} type="email" required />
                <label htmlFor="password">Contraseña:</label>
                <input onChange={(e) => { setPassword(e.target.value) }} type="password" required />
                <button type="submit">Continuar</button>
                <div className="login-link">
                    <p>¿No tienes cuenta? <a href="#" onClick={() => navigate('/register')}>Regístrate</a></p>
                    <img src={facebook} alt="Facebook" />
                    <img src={twiter} alt="Twitter" />
                    <img src={git} alt="Github" />
                </div>
            </form>
        </div>
    );
};

export default Login;
