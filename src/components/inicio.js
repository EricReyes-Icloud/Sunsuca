import React from 'react';
import hoja from '../img/hoja.png'; 
import tec from '../img/tec.png';
import s from '../img/s.png';
import '../index.css';

function inicio() {
    return (
      <div className="App">
        <div>
        <h1>El hogar de la madre naturaleza</h1>
      </div>
      <div className="container">
        <div className="image-section">
          <img src={hoja} alt="" />
        </div>
        <div className="info-section">
          <h2>Naturaleza y Agro</h2>
          <p>
            Todo el sector agroalimentario va representado en la hoja, esta representa los alimentos y 
            su exelente produccion.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="image-section">
          <img src={tec} alt="" />
        </div>
        <div className="info-section">
          <h2>Tecnologia y sistematizacion</h2>
          <p>
            La cocreacion ayuda a la implementacion de la Tecnologia garantizando un desarrollo constante, 
            estable y permanente en sus estandares de calidad, representado con un circulo y sus puntos terminales.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="image-section">
          <img src={s} alt="" />
        </div>
        <div className="info-section">
          <h2>Sunsuca</h2>
          <p>
            SUNSUCA, que esta representado por la "S", lleva en su interior los nutrientes tecnologicos   
            para el adecuado desarrollo agroalimentario mejorandolo y manteniendolo activo en el mercado.
          </p>
        </div>
      </div>
    </div>
        
    );
  }

  export default inicio;
