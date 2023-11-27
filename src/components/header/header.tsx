'use client'
import './header.css';
import React from "react";
import logo from "../../imagen/logo.png"
function BasicExample() {
    return (
        <header>
            <a href="#">
                <div className="logo">
                    <img src={logo} alt="" width="150"/>
                </div>
            </a>
        <div className="navbar">
            <div className="nav-links">
                <strong><a href="#">Inicio</a></strong>
                <strong> <a href="#">Servicios</a></strong>
                <strong> <a href="#">Acerca de Nosotros</a></strong>
                <strong><a href="#">Contactos</a></strong>
            </div>
            <div className="cart">
                <box-icon name="cart"></box-icon>
                <span className="item_total">0</span>
            </div>

        </div>
        </header>
    );
}

export default BasicExample;