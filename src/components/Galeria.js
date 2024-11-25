import React from 'react';
import './Galeria.css';

// Importa imágenes (asegúrate de tener estas imágenes en la carpeta public o src/assets)
import sembradoImg from '../img/sembrado.png';
import riegoImg from '../img/riego.png';
import medioAmbienteImg from '../img/medioAmbiente.png';
import residuosImg from '../img/residuos.png';

const services = [
    
  {
    title: 'Sembrado Ecológico',
    description:
      'Promovemos la agricultura sostenible mediante técnicas que preservan el medio ambiente y optimizan los recursos naturales.',
    image: sembradoImg,
  },
  {
    title: 'Riego Automático',
    description:
      'Ofrecemos soluciones de riego inteligentes para maximizar la eficiencia del agua en tus cultivos.',
    image: riegoImg,
  },
  {
    title: 'Cuidado del Medio Ambiente',
    description:
      'Nos enfocamos en soluciones que protejan la biodiversidad y reduzcan la huella ecológica.',
    image: medioAmbienteImg,
  },
  {
    title: 'Procesamiento de Residuos Biológicos',
    description:
      'Convertimos residuos orgánicos en recursos útiles como compost y biogás, cuidando del medio ambiente.',
    image: residuosImg,
  },
];

const Gallery = () => {
  return (
    <div className="Gallery">
        <p className="Title">Nuestros sembrados inteligentes</p>
        {services.map((service, index) => (
            <div className="Gallery-item" key={index}>
            <div className="Gallery-image">
                <img src={service.image} alt={service.title} />
            </div>
            <div className="Gallery-info">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
            </div>
            </div>
        ))}
    </div>

  );
};

export default Gallery;
