import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Certifique-se de que o Bootstrap está sendo importado

const Dresses = () => {
  const dresses = [
    { id: 1, src: '/Assets/vestido1.png', alt: 'Vestido 1' },
    { id: 2, src: '/Assets/vestido2.png', alt: 'Vestido 2' },
    { id: 3, src: '/Assets/vestido3.png', alt: 'Vestido 3' },
    { id: 4, src: '/Assets/vestido4.png', alt: 'Vestido 4' },
    { id: 5, src: '/Assets/vestido5.png', alt: 'Vestido 5' }
  ];

  return (
    <section className="container d-flex flex-column flex-lg-row align-items-center justify-content-between py-5">
      <div className="text-left mb-4 mb-lg-0">
        <h2 className="display-6">Explore nossa seleção de vestidos de noiva</h2>
        <p className="lead">Desde o clássico ao moderno, temos o vestido ideal para você.</p>
        <button className="btn btn-outline-danger">Buscar vestidos <span>&#8594;</span></button>
      </div>

      {/* Carrossel de imagens à direita */}
      <div className="carousel-wrapper d-flex flex-nowrap overflow-auto" style={{ gap: '15px', maxWidth: '60%' }}>
        {dresses.map((dress) => (
          <div className="dress-item" key={dress.id} style={{ flex: '0 0 auto', width: '150px', height: '225px' }}>
            <img
              src={dress.src}
              alt={dress.alt}
              className="img-fluid rounded shadow-sm"
              style={{ objectFit: 'cover', height: '100%', width: '100%' }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Dresses;
