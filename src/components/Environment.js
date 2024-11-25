// src/App.js
import React from 'react';
import './Environment.css'; // Importamos los estilos

const Environment = () => {
  return (
    <div className="Environment">
      <header className="Environment-header">
        <h1>Cuidado del Medio Ambiente</h1>
        <p>
          Aprende cómo puedes ayudar a proteger el medio ambiente y contribuir a un futuro más sostenible.
        </p>
      </header>

      <section className="importance">
        <h2>¿Por qué es importante cuidar el medio ambiente?</h2>
        <p>
          El medio ambiente es fundamental para nuestra supervivencia y la de futuras generaciones. 
          Conservar los recursos naturales, reducir la contaminación y proteger la biodiversidad son 
          pasos clave para garantizar un planeta saludable.
        </p>
      </section>

      <section className="actions">
        <h2>Acciones para cuidar el medio ambiente</h2>
        <ul>
          <li><strong>Reducir el uso de plástico:</strong> Usa alternativas reutilizables como bolsas de tela y botellas de agua.</li>
          <li><strong>Ahorrar agua y energía:</strong> Cierra los grifos cuando no los uses y apaga luces innecesarias.</li>
          <li><strong>Reciclar y compostar:</strong> Clasifica los residuos para reciclar materiales y transforma los desechos orgánicos en compost.</li>
          <li><strong>Plantar árboles:</strong> Ayuda a mejorar la calidad del aire y protege la biodiversidad.</li>
        </ul>
      </section>

      <section className="tips">
        <h2>Consejos para un estilo de vida sostenible</h2>
        <p>
          Pequeños cambios en tu vida diaria pueden marcar una gran diferencia en el cuidado del medio ambiente:
        </p>
        <ul>
          <li>Elige el transporte público, bicicleta o camina en lugar de usar vehículos privados.</li>
          <li>Compra productos locales y de temporada para reducir la huella de carbono.</li>
          <li>Evita el desperdicio de alimentos y consume conscientemente.</li>
          <li>Participa en limpiezas comunitarias y eventos de reforestación.</li>
        </ul>
      </section>

      <section className="how-to-help">
        <h2>¿Cómo puedes involucrarte?</h2>
        <p>
          Todos podemos hacer nuestra parte. Aquí algunas maneras de ayudar:
        </p>
        <ul>
          <li>Apoya organizaciones ambientales y únete a sus proyectos.</li>
          <li>Educa a otros sobre la importancia del cuidado del medio ambiente.</li>
          <li>Promueve prácticas sostenibles en tu comunidad.</li>
        </ul>
      </section>
    </div>
  );
};

export default Environment;
