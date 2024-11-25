import React from 'react';
import './About.css'; // Importa los estilos personalizados

const About = () => {
  return (
    <div className="About">
      <header className="About-header">
        <h1>Sobre Nosotros</h1>
        <p>Conoce más sobre Sunsuca y nuestro compromiso con las soluciones agropecuarias sostenibles.</p>
      </header>

      <section className="About-section">
        <h2>¿Quiénes somos?</h2>
        <p>
          Sunsuca es una empresa líder en soluciones agropecuarias que trabaja para transformar la forma en que se 
          cultivan y gestionan los recursos agrícolas. Con años de experiencia, nos dedicamos a implementar 
          tecnologías innovadoras que promuevan la sostenibilidad y el respeto por el medio ambiente.
        </p>
      </section>

      <section className="About-section">
        <h2>Nuestra misión</h2>
        <p>
          Proveer soluciones integrales que impulsen la sostenibilidad en la agricultura, maximizando los recursos 
          naturales y mejorando la productividad de nuestros clientes.
        </p>
      </section>

      <section className="About-section">
        <h2>Nuestra visión</h2>
        <p>
          Convertirnos en el principal referente en soluciones agropecuarias sostenibles a nivel global, ayudando 
          a construir un futuro más verde y saludable para las próximas generaciones.
        </p>
      </section>

      <section className="About-section">
        <h2>Nuestros valores</h2>
        <ul>
          <li><strong>Innovación:</strong> Adoptamos tecnologías de vanguardia para ofrecer soluciones efectivas.</li>
          <li><strong>Sostenibilidad:</strong> Nos enfocamos en prácticas que preservan los recursos naturales.</li>
          <li><strong>Calidad:</strong> Garantizamos productos y servicios que cumplen con los más altos estándares.</li>
          <li><strong>Compromiso:</strong> Trabajamos de la mano con agricultores para entender y satisfacer sus necesidades.</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
