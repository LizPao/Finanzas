import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/stylesheet.css";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import user from "../styles/user.gif";

const Register =() =>{
    const navigate = useNavigate();
    const toastOptions = {
        position: "bottom-right",
        autoClose: 3000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    useEffect(() => {
        if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
            navigate("/");
        }
    }, []);
    
    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleValidation = () => {
        const { password, confirmPassword, username, email } = values;
        if (password !== confirmPassword) {
            toast.error("Las contraseñas no coinciden",toastOptions);
            return false;
        } else if (username.length < 3) {
            toast.error("Nombre de Usuario debe tener más de 3 caracteres.",toastOptions);
            return false;
        } else if (password.length < 8) {
            toast.error("La contraseña debe tener al menos 8 caracteres.",toastOptions);
            return false;
        } else if (email === "") {
            toast.error("Email es requiredo.", toastOptions);
            return false;
        }

        return true;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (handleValidation()) {
            const { email, username, password } = values;
            const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, {
                username,
                email,
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
                    <input className="input-user border border-primary" type="text" placeholder="Nombre de usuario" name="username" onChange={(e) => handleChange(e)} />
                    <input className="input-user border border-primary" type="email" placeholder="Email" name="email" onChange={(e) => handleChange(e)} />
                    <input className="input-user border border-primary" type="password" placeholder="Contraseña" name="password" onChange={(e) => handleChange(e)} />
                    <input className="input-user border border-primary" type="password" placeholder="Confirmar Contraseña" name="confirmPassword" onChange={(e) => handleChange(e)} />
                    <button className="btn btn-primary p-2" type="submit">Crear Cuenta</button>
                    <span className="span-user">
                        ¿Ya tienes una cuenta? <Link className="btn btn-primary p-2 ps-4 pe-4 ms-2" to="/login">Iniciar Sesion</Link>
                    </span>
                </form>
            </div>
            <ToastContainer />
        </>
    );
}

export default Register

