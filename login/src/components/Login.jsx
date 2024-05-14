import React from "react";
import "./Login.css"

const Login = () => {
    return(
        <div class = "login">
            <form>
                <h1>Iniciar Sesión</h1>
                <label htmlFor="">Usuario:</label>
                <input type="text" />
                <label htmlFor="">Contraseña:</label>
                <input type="password" />
                <button>Continuar</button>
            </form>
        </div>
    )
};

export default Login;