import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar_user from './Navbar_user'; // Asegúrate de que la ruta al archivo es correcta

const AdminDashboard = ({ onLogout }) => {
  return (
    <Router>
      <div>
        <Navbar_user /> {/* Utiliza el componente importado */}
        <h1>Bienvenido, usuario</h1>
        <p>Esta es la sección para administradores de Sunsuca.</p>
        <button onClick={onLogout}>Cerrar Sesión</button>
      </div>
    </Router>
  );
};

export default AdminDashboard;

