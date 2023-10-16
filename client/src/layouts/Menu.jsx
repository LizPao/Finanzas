import React from 'react'
import { Link } from 'react-router-dom'
import Logout from '../Components/logout/Logout'
import { AiFillHome } from 'react-icons/ai';

const Menu = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark p-2 bg-primary py-4">
                <div className="container fs-4">
                    <Link className="navbar-brand" to="/" data-toggle="tooltip" data-placement="bottom" title="Gestor De Finanza Personal"><AiFillHome size={"35px"} /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav ms-auto ">
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle me-3 text-white btn btn-primary border border-0" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-toggle="tooltip" data-placement="bottom" title="Finanzas">
                                    Administrar Finanzas
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <Link className="dropdown-item " to="gestor/ingreso">Agregar Ingreso</Link>
                                    <Link className="dropdown-item" to="gestor/gasto">Agregar Gasto</Link>

                                    <div className="dropdown-divider"></div>
                                    <Logout />
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link me-3 text-white btn btn-primary border border-0" to="gestor/transacciones" data-toggle="tooltip" data-placement="bottom" title="Transacciones">Transacciones</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link me-3 text-white btn btn-primary border border-0" to="/login" data-toggle="tooltip" data-placement="bottom" title="Login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link btn-primary-hover text-white btn btn-primary border border-0" to="/register" data-toggle="tooltip" data-placement="bottom" title="Register">Register</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Menu