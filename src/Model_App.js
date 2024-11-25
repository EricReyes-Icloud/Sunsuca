import React, { useState } from 'react';
import Login from './Login';
import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';

const Model_App = () => {
    const [userRole, setUserRole] = useState(localStorage.getItem('role')); // Verifica el rol desde localStorage
  
    const handleLogin = (role) => {
      setUserRole(role);
      localStorage.setItem('role', role); // Guarda el rol en localStorage
    };
  
    const handleLogout = () => {
      setUserRole(null);
      localStorage.removeItem('role'); // Elimina el rol de localStorage
    };
  
    return (
      <div>
        {!userRole && <Login onLogin={handleLogin} />}
        {userRole === 'user' && <UserDashboard onLogout={handleLogout} />}
        {userRole === 'admin' && <AdminDashboard onLogout={handleLogout} />}
      </div>
    );
  };

  export default Model_App;