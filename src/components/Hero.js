export default function Hero() {
  return (
    <section className="hero" aria-label="Apresentação do restaurante">
      <div className="hero-overlay" aria-hidden="true"></div>

      <div className="hero-content">
        <h1>
          Sushi Preparado no Momento<br />
          <span className="highlight">com Frescura e Qualidade</span>
        </h1>

        <p className="hero-subtitle">
          Take Away · Entrega ao Domicílio · Atenção ao Detalhe
        </p>

        <div className="hero-buttons">
          <a
            className="hero-btn hero-primary"
            href="#menu"
            aria-label="Ver o menu completo"
          >
            Ver Menu
          </a>
          <a
            className="hero-btn hero-secondary"
            href="#pedido"
            aria-label="Fazer pedido online"
          >
            Fazer Pedido
          </a>
        </div>
      </div>
    </section>
  );
}
