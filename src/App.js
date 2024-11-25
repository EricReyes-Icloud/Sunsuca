// src/App.js
import React from 'react';
import Navbar from './Navbar';  // Asegúrate de que Navbar esté antes de cualquier componente que lo necesite
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sem from './components/sembrado';
import Riego from './components/riego_automatico';
import Environment from './components/Environment';
import BioWaste from './components/BioWaste';
import A_laborales from './components/Actividades_laborales';
import I_uso_publico from './components/I_uso_publico';
import Galeria from './components/Galeria';
import About from './components/Sobre_nosotros';
import Inicio from './components/inicio';
import Ingresar from './Model_App';

<link href="https://blogfonts.com/css/aWQ9MTU3NDI5JnN1Yj00MjkmYz1zJnR0Zj1Cd1NlaWRvUm91bmRERU1PLUJvbGRJdGFsaWMub3RmJm49Ynctc2VpZG8tcm91bmQtZGVtby00/Bw Seido Round DEMO.otf" rel="stylesheet" type="text/css"/>;
<link href="https://db.onlinewebfonts.com/c/45c4b22090a9c3a5e734d40c4423db4e?family=SF+Thonburi" rel="stylesheet"></link>

function App() {
  return (
      <Router>
          <Navbar />  

          <Routes>

          <Route path="/" element={<Inicio />} />
          <Route path="/sembrado-ecologico" element={<Sem />} />
          <Route path="/riego-automatico" element={<Riego />} />
          <Route path="/environment" element={<Environment />} />
          <Route path="/residuos" element={<BioWaste />} />
          <Route path="/a-laborales" element={<A_laborales />} />
          <Route path="/uso_publico" element={<I_uso_publico />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/sobre-nosotros" element={<About />} />
          <Route path="/ingresar" element={<Ingresar />} />

        </Routes>
      </Router>

      
  );
}




export default App;
