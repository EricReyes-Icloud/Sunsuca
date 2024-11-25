import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Usuarios de prueba
    const users = [
      { username: 'user', password: 'user123', role: 'user' },
      { username: 'admin', password: 'admin123', role: 'admin' },
    ];

    // Verifica las credenciales
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      onLogin(user.role); // Llama al manejador de login con el rol
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="Login">
      <h2>Inicio de Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
