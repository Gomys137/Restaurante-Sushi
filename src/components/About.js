export default function About() {
  return (
    <section id="sobre" className="about" aria-labelledby="about-heading">
      <div className="about-container">
        <div className="about-content">
          
          {/* IMAGEM À ESQUERDA - Desktop / Acima - Mobile */}
          <div className="about-image">
            <div className="image-wrapper">
              <img 
                src="/sushi-about.jpg" 
                alt="Preparação de sushi com ingredientes frescos"
                width={600}
                height={400}
                className="about-img"
                loading="lazy"
              />
              <div className="image-badge" aria-hidden="true">
                <span>Sushi Fresco</span>
              </div>
            </div>
          </div>

          {/* TEXTO À DIREITA - Desktop / Abaixo - Mobile */}
          <div className="about-text">
            <header className="about-header">
              <span className="about-subtitle">Quem Somos</span>
              <h2 id="about-heading" className="about-title">
                Sobre o <br />
                <span className="highlight">Nosso Conceito</span>
              </h2>
            </header>

            <div className="about-description">
              <p>
                Somos um projeto dedicado à preparação de
                <strong> sushi de qualidade</strong>,
                com foco na frescura dos ingredientes e no rigor de cada etapa do processo.
              </p>

              <p>
                Cada peça é preparada no momento,
                respeitando técnicas tradicionais e padrões elevados de higiene,
                garantindo consistência e segurança alimentar.
              </p>

              <p>
                O nosso compromisso passa por oferecer
                <strong> sushi bem executado</strong>,
                com uma abordagem equilibrada entre qualidade,
                apresentação e relação qualidade/preço.
              </p>
            </div>

            <div className="about-quote">
              <i className="fa-solid fa-quote-left" aria-hidden="true"></i>
              <blockquote>
                "Sushi preparado com cuidado, frescura e atenção ao detalhe."
                <footer className="quote-footer">— Feedback de Cliente</footer>
              </blockquote>
            </div>

            <div className="about-cta">
              <a href="#menu" className="about-button primary">
                <span>Ver Menu</span>
                <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </a>
              <div className="about-stats">
                <div className="stat">
                  <span className="stat-number">✔</span>
                  <span className="stat-label">Foco na Frescura</span>
                </div>
                <div className="stat">
                  <span className="stat-number">✔</span>
                  <span className="stat-label">Padrões de Qualidade</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
