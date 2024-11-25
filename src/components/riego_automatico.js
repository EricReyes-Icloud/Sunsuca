
import React from 'react';
import './Riego.css'; // Importamos los estilos

const Riego = () => {
  return (
    <div className="Riego">
      <header className="Riego-header">
        <h1>Sistemas de Riego Automático</h1>
      </header>

      <section className="intro">
        <h2>¿Qué es el riego automático?</h2>
        <p>
          El riego automático es una tecnología diseñada para suministrar agua a las plantas de manera eficiente y programada, sin necesidad de intervención manual constante. 
          Es ideal para jardines, campos agrícolas y huertos urbanos.
        </p>
      </section>

      <section className="benefits">
        <h2>Beneficios del riego automático</h2>
        <ul>
          <li><strong>Optimización del uso del agua:</strong> Reduce el desperdicio de agua al proporcionar la cantidad justa que las plantas necesitan.</li>
          <li><strong>Ahorro de tiempo:</strong> Permite programar los horarios de riego, liberándote de la tarea manual.</li>
          <li><strong>Mejora del crecimiento de las plantas:</strong> Garantiza una hidratación uniforme, promoviendo un desarrollo saludable.</li>
          <li><strong>Sostenibilidad:</strong> Es una solución ecológica al disminuir el consumo excesivo de recursos hídricos.</li>
        </ul>
      </section>

      <section className="methods">
        <h2>Tipos de sistemas de riego automático</h2>
        <p>
          Existen varios tipos de sistemas de riego que se pueden adaptar a diferentes necesidades. Entre los más comunes están:
        </p>
        <ul>
          <li><strong>Riego por goteo:</strong> Suministra agua directamente a las raíces de las plantas, reduciendo el desperdicio.</li>
          <li><strong>Riego por aspersión:</strong> Imita la lluvia, cubriendo áreas amplias de manera uniforme.</li>
          <li><strong>Riego subterráneo:</strong> Proporciona agua directamente a las raíces a través de tuberías enterradas.</li>
        </ul>
      </section>

      <section className="how-to-help">
        <h2>¿Cómo implementar un sistema de riego automático?</h2>
        <p>
          Puedes instalar un sistema de riego automático en tu hogar o jardín siguiendo estos pasos básicos:
        </p>
        <ul>
          <li>Evalúa las necesidades hídricas de tus plantas y el área que deseas cubrir.</li>
          <li>Selecciona el sistema de riego adecuado (goteo, aspersión, subterráneo, etc.).</li>
          <li>Instala un temporizador o controlador para programar los horarios de riego.</li>
          <li>Realiza un mantenimiento regular para garantizar su funcionamiento eficiente.</li>
        </ul>
      </section>
    </div>
  );
};

export default Riego;
