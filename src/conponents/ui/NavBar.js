import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">

            <div className="container-fluid">
                <Link to='/' className="navbar-brand" >
                    Navbar
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <NavLink to='/productoras' className="nav-link " >
                            Entrada vehiculo
                        </NavLink>
                        <NavLink to='/Salida-vehiculo' className="nav-link " >
                            Salida vehiculo
                        </NavLink>
                        <NavLink to='Consulta-Disponibilidad' className="nav-link " >
                            Consulta de Disponibilidad
                        </NavLink>
                        <NavLink to='/' className="nav-link " >
                            Gestión de Usuarios
                        </NavLink>
                        <NavLink to='/Reportes-Novedades' className="nav-link " >
                            Reportes y Novedades
                        </NavLink>
                        <NavLink to='/Configuración' className="nav-link " >
                            Configuración
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}