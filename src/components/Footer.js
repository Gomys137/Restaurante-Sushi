export default function Footer() {
  return (
    <footer className="footer" aria-labelledby="footer-heading">
      <div className="footer-container">
        
        {/* LOGO + TEXTO */}
        <div className="footer-col footer-col-logo">
          <div className="footer-logo-wrapper">
            <img 
              src="/logo.png" 
              className="footer-logo" 
              alt="Logótipo do restaurante de sushi" 
              width={140}
              height={60}
            />
          </div>

          <p className="footer-description">
            Sushi preparado no momento,<br />
            com foco na frescura e na qualidade.<br />
            Uma experiência pensada para cada pedido.
          </p>

          <div className="footer-rating">
            <div className="stars" aria-label="Indicador de qualidade">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="fa-solid fa-star" aria-hidden="true"></i>
              ))}
            </div>
            <span className="rating-text">Qualidade reconhecida</span>
            <span className="rating-count" aria-hidden="true">
              • Baseado na experiência dos clientes
            </span>
          </div>
        </div>

        {/* LINKS RÁPIDOS */}
        <div className="footer-col">
          <h3 className="footer-col-title">Links Rápidos</h3>
          <ul className="footer-links" role="list">
            <li><a href="#home" className="footer-link">Início</a></li>
            <li><a href="#menu" className="footer-link">Menu</a></li>
            <li><a href="#sobre" className="footer-link">Sobre</a></li>
            <li><a href="#contacto" className="footer-link">Contacto</a></li>
          </ul>
        </div>

        {/* SERVIÇOS */}
        <div className="footer-col">
          <h3 className="footer-col-title">Serviços</h3>
          <ul className="footer-links" role="list">
            <li><a href="#pedido" className="footer-link">Pedido Online</a></li>
            <li><a href="#takeaway" className="footer-link">Take Away</a></li>
            <li><a href="#entrega" className="footer-link">Entrega ao Domicílio</a></li>
          </ul>
        </div>

        {/* CONTACTOS + SOCIAL */}
        <div className="footer-col">
          <h3 className="footer-col-title">Contactos</h3>
          <address className="footer-address">
            Localização a definir<br/>
            Portugal
          </address>

          <div className="footer-social" aria-label="Redes sociais">
            <a 
              href="#"
              className="social-link"
              aria-label="Facebook"
            >
              <i className="fa-brands fa-facebook-f" aria-hidden="true"></i>
            </a>
            <a 
              href="#"
              className="social-link"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram" aria-hidden="true"></i>
            </a>
            <a 
              href="#"
              className="social-link"
              aria-label="WhatsApp"
            >
              <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-divider" role="separator"></div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          © {new Date().getFullYear()} Restaurante de Sushi. Todos os direitos reservados.
        </p>
        <div className="footer-made-with">
          <span>Desenvolvido em Portugal</span>
        </div>
      </div>
    </footer>
  );
}
