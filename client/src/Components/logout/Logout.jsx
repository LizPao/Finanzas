import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function Logout() {
    const navigate = useNavigate();

    const toastOptions = {
        position: "bottom-right",
        autoClose: 3000,
        pauseOnHover: true,
        draggable: true,
        
    };

    const handleClick = async () => {
        if (!(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY))) {
            toast.info("Debes iniciar sesion.", toastOptions);
        } else {
            await JSON.parse(
                localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
            )._id;

            localStorage.clear();
            navigate("/login");
        }
    };
    return (
        <>
        <Link className="dropdown-item" onClick={handleClick}>
            Logout
        </Link>
        <ToastContainer />
        </>
    );
}

