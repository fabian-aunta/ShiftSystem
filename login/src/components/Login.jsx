import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import facebook from "../icons/facebook.png";
import git from "../icons/github.png";
import twiter from "../icons/gorjeo.png";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const data = {
          email: email,
          password: password
        };
      
        fetch('https://8eaa-2800-e2-ba80-cc5-2808-dd64-13a5-2493.ngrok-free.app/api/auth/login', {
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
              navigate('/listTurn'); 
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
