// src/Navbar.js
import React from 'react';
import './Navbar.css'; // Archivo de estilo (CSS)
import logo from './img/Logo.png'; // Importa la imagen


const Navbar = () => {
  return (
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="/">
            <img src={logo} alt="Logo" className="navbar-logo-img" />
          </a>
        </div>
        <ul className="navbar-links">
          <li><a href="/">Ingresar</a></li>

          <li className="dropdown">
            <a href="/">Servicios</a>
            <ul className="dropdown-menu">
              <li><a href="/sembrado-ecologico">Sembrado Ecológico</a></li>
              <li><a href="/servicios/2">Riego automático</a></li>
              <li><a href="/servicios/3">Cuidado del medio ambiente</a></li>
              <li><a href="/servicios/4">Procesamiento de residuos</a></li>
            </ul>
          </li>

          <li className="dropdown">
            <a href="/catalogo">Catálogo</a>
            <ul className="dropdown-menu">
              <li><a href="/catalogo/1">Producto 1</a></li>
              <li><a href="/catalogo/2">Producto 2</a></li>
              <li><a href="/catalogo/3">Producto 3</a></li>
            </ul>
          </li>

          <li><a href="/sobre-nosotros">Sobre Nosotros</a></li>
        </ul>
      </nav>

  );
};

export default Navbar;
