import React, { useState } from "react";
import "./Login.css";
import facebook from "../icons/facebook.png";
import git from "../icons/github.png";
import twiter from "../icons/gorjeo.png";

const Login = () => {

    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');


    const handdleLogin = (e) => {
        e.preventDefault();
        console.log({
            username: username,
            password: password
        });
    }

    return(
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
    )
};

export default Login;