import React from 'react';
import './Sunsuca.css'; // Importamos los estilos

const I_uso_publico = () => {
  return (
    <div className="Sunsuca">
      <header className="Sunsuca-header">
        <h1>Bienvenido a Sunsuca</h1>
        <p>Soluciones Agropecuarias Sostenibles al Alcance de Todos.</p>
      </header>

      <section className="about">
        <h2>¿Quiénes somos?</h2>
        <p>
          Sunsuca es una empresa dedicada a brindar soluciones innovadoras y sostenibles para
          el sector agropecuario. Nuestro compromiso es ayudar a los agricultores a maximizar
          su productividad, preservar el medio ambiente y mejorar la calidad de vida de las comunidades rurales.
        </p>
      </section>

      <section className="services">
        <h2>Nuestras Soluciones</h2>
        <ul>
          <li><strong>Asesoría Técnica:</strong> Ofrecemos consultoría especializada para mejorar las prácticas agrícolas y ganaderas.</li>
          <li><strong>Productos Agropecuarios:</strong> Insumos de calidad como fertilizantes, semillas certificadas y alimentos para ganado.</li>
          <li><strong>Tecnología para el Campo:</strong> Implementación de herramientas tecnológicas como sistemas de riego y monitoreo.</li>
          <li><strong>Capacitación:</strong> Cursos y talleres para agricultores interesados en prácticas sostenibles.</li>
        </ul>
      </section>

      <section className="public-info">
        <h2>Información de Uso Público</h2>
        <p>
          Sunsuca se preocupa por la transparencia y el acceso a la información. A continuación, te
          ofrecemos datos relevantes para nuestros clientes y aliados:
        </p>
        <ul>
          <li><strong>Ubicación:</strong> Oficinas principales en Bogota. Atención de lunes a viernes, 8:00 AM a 5:00 PM.</li>
          <li><strong>Contacto:</strong> Teléfono: +52 123 456 7890 | Correo: contacto@sunsuca.com</li>
          <li><strong>Programas Sociales:</strong> Apoyo a pequeños productores mediante subsidios y equipos.</li>
          <li><strong>Políticas de Calidad:</strong> Todos nuestros productos están certificados bajo estándares internacionales.</li>
        </ul>
      </section>

      <section className="sustainability">
        <h2>Compromiso con la Sostenibilidad</h2>
        <p>
          En Sunsuca, entendemos que el futuro del sector agropecuario depende de prácticas responsables.
          Por ello, integramos soluciones que respetan los ecosistemas y fomentamos la innovación sostenible.
        </p>
      </section>
    </div>
  );
};

export default I_uso_publico;
