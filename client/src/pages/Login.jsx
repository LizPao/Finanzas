import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/stylesheet.css";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import user from "../styles/user.gif";


const Login = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({ username: "", password: "" });
    
    const toastOptions = {
        position: "bottom-right",
        autoClose: 3000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };
    useEffect(() => {
        if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
            navigate("/");
        }
    }, []);

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

const validateForm = () => {
        const { username, password } = values;
        if (username === "") {
            toast.warning("Nombre de Usuario es requiredo.", toastOptions);
            return false;
        } else if (password === "") {
            toast.warning("Contraseña es requireda.", toastOptions);
            return false;
        }
        return true;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateForm()) {
            const { username, password } = values;
            const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, {
                username,
                password,
            });
            if (data.status === false) {
                toast.error(data.msg, toastOptions);
            }
            if (data.status === true) {
                localStorage.setItem(
                    process.env.REACT_APP_LOCALHOST_KEY,
                    JSON.stringify(data.user)
                );

                navigate("/");
            }
        }
    };

    return (
        <>
            <div className="formContainer">
                <form className="form-user" onSubmit={(event) => handleSubmit(event)}>
                    <div className="brand">
                        <img className="shadow-lg p-3 mb-5 bg-white rounded w-25" src={user} alt='User'/>
                    </div>
                    <input className="input-user border border-primary" type="text" placeholder="Nombre de Usuario" name="username" onChange={(e) => handleChange(e)} min="3" />
                    <input className="input-user border border-primary" type="password" placeholder="Contraseña" name="password" onChange={(e) => handleChange(e)} />
                    <button className="btn btn-primary p-2" type="submit">Iniciar Sesion</button>
                    <span className="span-user">
                        ¿No tienes una cuenta? <Link className=" btn btn-success" to="/register">Crear Cuenta</Link>
                    </span>
                </form>
            </div>
            <ToastContainer />
        </>
    );
}
export default Login

