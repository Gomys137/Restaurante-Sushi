export default function OrderOnline() {
  return (
    <section className="order-section" aria-labelledby="order-heading">
      <div className="order-overlay" aria-hidden="true"></div>

      <div className="order-container">
        <div className="order-content">
          
          <div className="order-icon" aria-hidden="true">
            <i className="fa-solid fa-motorcycle"></i>
            <div className="icon-pulse"></div>
          </div>

          <h2 id="order-heading">Faça o Seu Pedido</h2>
          <p className="order-description">
            Sushi preparado no momento, com opções de entrega ao domicílio
            e recolha em take away.
          </p>

          <div className="order-buttons" role="group" aria-label="Opções de pedido">
            <a 
              href="#contacto" 
              className="order-btn-primary"
              aria-label="Entrar em contacto para fazer pedido"
            >
              <span className="btn-icon" aria-hidden="true">
                <i className="fa-solid fa-phone"></i>
              </span>
              <span className="btn-text">Entrar em Contacto</span>
              <span className="btn-arrow" aria-hidden="true">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </a>

            <a 
              href="#menu" 
              className="order-btn-secondary"
              aria-label="Ver o menu"
            >
              <span className="btn-icon" aria-hidden="true">
                <i className="fa-solid fa-book-open"></i>
              </span>
              <span className="btn-text">Ver Menu</span>
            </a>
          </div>

          <div className="order-info" role="list" aria-label="Vantagens do serviço">
            <div className="info-item" role="listitem">
              <i className="fa-solid fa-truck-fast"></i>
              <span>Entrega ao Domicílio</span>
            </div>
            <div className="info-item" role="listitem">
              <i className="fa-solid fa-store"></i>
              <span>Take Away</span>
            </div>
            <div className="info-item" role="listitem">
              <i className="fa-solid fa-clock"></i>
              <span>Preparado no Momento</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
