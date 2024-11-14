// src/App.js
import React from 'react';
import Navbar from './Navbar';  // Asegúrate de que Navbar esté antes de cualquier componente que lo necesite
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sem from './components/sembrado';
import Inicio from './components/inicio';
<link href="https://blogfonts.com/css/aWQ9MTU3NDI5JnN1Yj00MjkmYz1zJnR0Zj1Cd1NlaWRvUm91bmRERU1PLUJvbGRJdGFsaWMub3RmJm49Ynctc2VpZG8tcm91bmQtZGVtby00/Bw Seido Round DEMO.otf" rel="stylesheet" type="text/css"/>;
<link href="https://db.onlinewebfonts.com/c/45c4b22090a9c3a5e734d40c4423db4e?family=SF+Thonburi" rel="stylesheet"></link>

function App() {
  return (
      <Router>
          <Navbar />  

          <Routes>

          <Route path="/" element={<Inicio />} />
          <Route path="/sembrado-ecologico" element={<Sem />} />

        </Routes>
      </Router>

      
  );
}

export default App;
