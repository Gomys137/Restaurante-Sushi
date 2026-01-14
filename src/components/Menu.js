export default function Menu() {
  const menuItems = [
    {
      id: 1,
      image: '/sushi.jpg',
      title: 'Sushi & Sashimi',
      description: 'Seleção de peças preparadas com peixe fresco e cortes precisos',
      color: '#e63946'
    },
    {
      id: 2,
      image: '/temaki.jpg',
      title: 'Temakis',
      description: 'Preparados no momento, com combinações equilibradas e frescas',
      color: '#4e6cff'
    },
    {
      id: 3,
      image: '/gyosa.jpg',
      title: 'Entradas & Quentes',
      description: 'Entradas japonesas, pratos quentes e acompanhamentos variados',
      color: '#34c759'
    },
    {
      id: 4,
      image: '/combinados.jpg',
      title: 'Combinados',
      description: 'Seleções pensadas para partilhar ou desfrutar individualmente',
      color: '#f5b700'
    }
  ];

  return (
    <section id="menu" className="menu-section" aria-labelledby="menu-heading">
      <div className="menu-container">
        <header className="menu-header">
          <h2 id="menu-heading" className="menu-title">
            O Nosso <span className="highlight">Menu</span>
          </h2>
          <p className="menu-subtitle">
            Sushi preparado no momento, ideal para take away ou entrega
          </p>
        </header>

        <div className="menu-grid" role="list" aria-label="Categorias do menu">
          {menuItems.map((item) => (
            <article 
              key={item.id} 
              className="menu-card"
              role="listitem"
              aria-label={`Categoria: ${item.title}`}
            >
              <div className="menu-image-container">
                <div 
                  className="menu-img" 
                  style={{ backgroundImage: `url('${item.image}')` }}
                  role="img"
                  aria-label={`Imagem ilustrativa de ${item.title}`}
                >
                  <div className="image-overlay"></div>
                </div>
                <div className="menu-badge">
                  <span className="badge-text">{item.title.split(' ')[0]}</span>
                </div>
              </div>
              
              <div className="menu-content">
                <div className="menu-info">
                  <h3 className="menu-item-title">{item.title}</h3>
                  <p className="menu-item-description">{item.description}</p>
                </div>
                <button 
                  className="menu-view-btn"
                  aria-label={`Ver opções de ${item.title}`}
                >
                  <span>Ver opções</span>
                  <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="menu-cta">
          <a 
            href="#"
            className="menu-button"
            aria-label="Ver menu completo"
          >
            <span>Ver Menu Completo</span>
            <i className="fa-solid fa-utensils" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
