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
          <li><a href="/ingresar">Ingresar</a></li>

          <li className="dropdown">
            <a href="/">Servicios</a>
            <ul className="dropdown-menu">
              <li><a href="/sembrado-ecologico">Sembrado Ecológico</a></li>
              <li><a href="/riego-automatico">Riego automático</a></li>
              <li><a href="/environment">Cuidado del medio ambiente</a></li>
              <li><a href="/residuos">Procesamiento de residuos</a></li>
            </ul>
          </li>

          <li className="dropdown">
            <a href="/catalogo">Catálogo</a>
            <ul className="dropdown-menu">
              <li><a href="/a-laborales">Actividades laborales</a></li>
              <li><a href="/uso_publico">Informacion de uso publico</a></li>
              <li><a href="/galeria">Galeria de imagenes</a></li>
            </ul>
          </li>

          <li><a href="/sobre-nosotros">Sobre Nosotros</a></li>
        </ul>
      </nav>

  );
};

export default Navbar;
