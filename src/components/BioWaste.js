import React from 'react';
import './BioWaste.css'; // Importamos los estilos

const BioWaste = () => {
  return (
    <div className="BioWaste">
      <header className="BioWaste-header">
        <h1>Procesamiento de Residuos Biológicos</h1>
        <p>Descubre cómo manejar residuos biológicos de manera responsable y sostenible.</p>
      </header>

      <section className="intro">
        <h2>¿Qué es el procesamiento de residuos biológicos?</h2>
        <p>
          El procesamiento de residuos biológicos consiste en el manejo adecuado de desechos orgánicos,
          como restos de alimentos, residuos agrícolas o desechos sanitarios, para minimizar su impacto
          en el medio ambiente y aprovecharlos como recursos.
        </p>
      </section>

      <section className="benefits">
        <h2>Beneficios del procesamiento de residuos biológicos</h2>
        <ul>
          <li><strong>Reducción de contaminación:</strong> Evita que los residuos terminen en vertederos, donde generan gases de efecto invernadero.</li>
          <li><strong>Producción de abonos:</strong> Los desechos orgánicos procesados pueden convertirse en compost o fertilizantes naturales.</li>
          <li><strong>Energía renovable:</strong> A través del biogás, se pueden generar energía y calor a partir de los residuos.</li>
          <li><strong>Mejora de la salud pública:</strong> El manejo adecuado de desechos sanitarios reduce riesgos de enfermedades.</li>
        </ul>
      </section>

      <section className="methods">
        <h2>Métodos utilizados en el procesamiento de residuos biológicos</h2>
        <p>
          Existen diferentes técnicas para procesar los residuos biológicos, adaptadas al tipo y volumen
          de los desechos. Entre las más comunes están:
        </p>
        <ul>
          <li><strong>Compostaje:</strong> Conversión de residuos orgánicos en abono mediante procesos de descomposición controlados.</li>
          <li><strong>Digestión anaerobia:</strong> Transformación de residuos en biogás y fertilizantes en ausencia de oxígeno.</li>
          <li><strong>Vermicompostaje:</strong> Uso de lombrices para descomponer materia orgánica y producir humus rico en nutrientes.</li>
        </ul>
      </section>

      <section className="how-to-help">
        <h2>¿Cómo puedes contribuir al procesamiento de residuos biológicos?</h2>
        <p>
          Tú también puedes marcar la diferencia al manejar tus desechos de forma sostenible:
        </p>
        <ul>
          <li>Separar los residuos orgánicos de otros tipos de desechos para facilitar su reciclaje.</li>
          <li>Crear tu propio compost en casa utilizando restos de alimentos y residuos de jardín.</li>
          <li>Apoyar iniciativas locales de reciclaje y programas de tratamiento de residuos.</li>
        </ul>
      </section>
    </div>
  );
};

export default BioWaste;
