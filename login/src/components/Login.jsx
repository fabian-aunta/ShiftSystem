import React, { useState } from "react";
import "./Login.css";
import facebook from "../icons/facebook.png";
import git from "../icons/github.png";
import twiter from "../icons/gorjeo.png";
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const Navbar = React.lazy(() => import("navbar/Navbar"));

function parseJwt (token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  
    return JSON.parse(jsonPayload);
}
  

const Login = () => {

    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [loginSuccessfull, setLoginSuccessfull] = useState(false);



    const handdleLogin = (e) => {
        e.preventDefault();
        const data = {
            username: username,
            password: password
        };
        
        fetch('http://localhost:2000/login',{
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
                setLoginSuccessfull(true);
            }
        }).catch(error => {
            console.log(error)
        })
    }

    return(
        <>{loginSuccessfull ? <Nav.Link as = {NavLink} to = {"/register"}></Nav.Link>:
        <div className = "login">
            <form>
                <h1>Iniciar Sesión</h1>
                <label htmlFor="">Usuario:</label>
                <input onChange={(e) => {setUsername(e.target.value)}} type="text" />
                <label htmlFor="">Contraseña:</label>
                <input onChange={(e) => {setPassword(e.target.value)}} type="password" />
                <button onClick={handdleLogin}>Continuar</button>
                <div className="login-link">
                    <p>¿No tienes cuenta? <a href="">Registrate</a></p>
                    <img src= {facebook} alt="" />
                    <img src= {twiter} alt="" />
                    <img src= {git} alt="" />
                </div>
            </form>
        </div>
}</>)
};

export default Login;