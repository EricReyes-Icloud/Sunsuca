// src/App.js
import React from 'react';
import './Sem.css';  // Importamos los estilos

const Sem = () => {
  return (
    <div className="Sem">
      <header className="Sem-header">
        <h1>Sembrado Ecológico</h1>
        <p>Conoce todo sobre el sembrado ecológico y cómo puedes contribuir a la salud del planeta.</p>
      </header>

      <section className="intro">
        <h2>¿Qué es el sembrado ecológico?</h2>
        <p>
          El sembrado ecológico es una práctica agrícola que busca preservar el medio ambiente
          a través de la agricultura sostenible. Se enfoca en el uso de métodos naturales
          para cultivar, sin el uso de químicos que puedan afectar la biodiversidad y los ecosistemas.
        </p>
      </section>

      <section className="benefits">
        <h2>Beneficios del sembrado ecológico</h2>
        <ul>
          <li><strong>Conservación del agua:</strong> El sembrado ecológico utiliza técnicas que optimizan el uso del agua.</li>
          <li><strong>Mejora de la calidad del suelo:</strong> Reduce la erosión y mejora la fertilidad del suelo de manera natural.</li>
          <li><strong>Mayor biodiversidad:</strong> Ayuda a conservar especies animales y vegetales al evitar el uso de pesticidas.</li>
          <li><strong>Alimentos más saludables:</strong> Los productos ecológicos son más nutritivos y libres de químicos tóxicos.</li>
        </ul>
      </section>

      <section className="methods">
        <h2>Métodos utilizados en el sembrado ecológico</h2>
        <p>
          Los métodos ecológicos incluyen prácticas como la rotación de cultivos, el compostaje
          y el uso de abonos orgánicos. A continuación, te explicamos algunos de ellos:
        </p>
        <ul>
          <li><strong>Rotación de cultivos:</strong> Alternar diferentes tipos de cultivos en el mismo terreno para evitar la sobreexplotación del suelo.</li>
          <li><strong>Uso de abonos orgánicos:</strong> En lugar de fertilizantes químicos, se utilizan abonos naturales como el compost.</li>
          <li><strong>Control biológico de plagas:</strong> Se emplean insectos o microorganismos para controlar las plagas, evitando pesticidas.</li>
        </ul>
      </section>

      <section className="how-to-help">
        <h2>¿Cómo puedes contribuir al sembrado ecológico?</h2>
        <p>
          Existen varias formas en las que puedes ayudar al crecimiento de la agricultura ecológica:
        </p>
        <ul>
          <li>Comprar productos orgánicos y apoyar a los agricultores locales que practican el sembrado ecológico.</li>
          <li>Iniciar tu propio huerto ecológico en casa, utilizando compost y métodos sostenibles.</li>
          <li>Promover la educación sobre prácticas agrícolas ecológicas en tu comunidad.</li>
        </ul>
      </section>
    </div>
  );
};

export default Sem;
