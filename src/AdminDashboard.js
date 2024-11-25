import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar_admin from './Navbar_admin'; // Asegúrate de que la ruta al archivo es correcta

const AdminDashboard = ({ onLogout }) => {
  return (
    <Router>
      <div>
        <Navbar_admin /> {/* Utiliza el componente importado */}
        <h1>Bienvenido, Administrador</h1>
        <p>Esta es la sección para administradores de Sunsuca.</p>
        <button onClick={onLogout}>Cerrar Sesión</button>
      </div>
    </Router>
  );
};

export default AdminDashboard;

