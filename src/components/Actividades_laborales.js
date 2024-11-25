import React from 'react';
import './Sunsuca.css'; // Archivo CSS para los estilos

const A_laborales = () => {
  return (
    <div className="Sunsuca">
      <header className="Sunsuca-header">
        <h1>Sunsuca - Soluciones Agropecuarias</h1>
        <p>Comprometidos con el desarrollo agropecuario y el bienestar de la comunidad.</p>
      </header>

      <section className="about-us">
        <h2>¿Quiénes somos?</h2>
        <p>
          Sunsuca es una empresa dedicada a brindar soluciones innovadoras en el sector agropecuario.
          Nuestro enfoque principal es mejorar la productividad, sostenibilidad y calidad de vida de las
          comunidades agrícolas, promoviendo prácticas responsables y tecnológicas.
        </p>
      </section>

      <section className="activities">
        <h2>Nuestras actividades laborales</h2>
        <ul>
          <li>
            <strong>Asesoramiento técnico:</strong> Brindamos consultoría a agricultores y ganaderos sobre
            mejores prácticas y tecnologías modernas.
          </li>
          <li>
            <strong>Suministro de insumos:</strong> Ofrecemos fertilizantes, semillas mejoradas y productos
            fitosanitarios de alta calidad.
          </li>
          <li>
            <strong>Capacitación y educación:</strong> Organizamos talleres y seminarios para educar a las
            comunidades sobre técnicas sostenibles.
          </li>
          <li>
            <strong>Desarrollo de infraestructura:</strong> Implementamos sistemas de riego, almacenamiento
            y soluciones tecnológicas en zonas rurales.
          </li>
        </ul>
      </section>

      <section className="impact">
        <h2>Aportando a la comunidad</h2>
        <p>
          Nuestro trabajo no solo se enfoca en mejorar la producción agropecuaria, sino también en
          contribuir al bienestar de las comunidades rurales. Estas son algunas maneras en las que
          Sunsuca impacta positivamente:
        </p>
        <ul>
          <li><strong>Generación de empleo:</strong> Creamos oportunidades laborales en zonas rurales.</li>
          <li><strong>Sostenibilidad ambiental:</strong> Promovemos prácticas que reducen el impacto ambiental.</li>
          <li><strong>Mejora en la calidad de vida:</strong> Ayudamos a las comunidades a aumentar sus ingresos y acceder a recursos tecnológicos.</li>
          <li><strong>Fomento de la educación:</strong> Trabajamos con escuelas y centros comunitarios para enseñar sobre la agricultura moderna.</li>
        </ul>
      </section>

      <section className="contact">
        <h2>Contáctanos</h2>
        <p>
          ¿Interesado en nuestras soluciones? Escríbenos y forma parte del cambio agropecuario.
        </p>
        <p><strong>Email:</strong> contacto@sunsuca.com</p>
        <p><strong>Teléfono:</strong> +123 456 789</p>
      </section>
    </div>
  );
};

export default A_laborales;
