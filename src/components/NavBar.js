import { useState, useEffect } from 'react';
import Link from "next/link";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detetar scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar menu ao clicar num link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Bloquear scroll quando menu mobile aberto
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="nav-container">
          
          {/* Logo */}
          <Link href="/" className="nav-logo">
            <img 
              src="/logo.png" 
              alt="Logótipo do restaurante de sushi" 
              className="logo-img"
              width={160}
              height={60}
            />
          </Link>

          {/* Menu Desktop */}
          <ul className="nav-menu">
            <li>
              <Link href="#menu" className="nav-link" onClick={handleLinkClick}>
                <span className="link-text">MENU</span>
                <span className="link-underline"></span>
              </Link>
            </li>
            <li>
              <Link href="#sobre" className="nav-link" onClick={handleLinkClick}>
                <span className="link-text">SOBRE</span>
                <span className="link-underline"></span>
              </Link>
            </li>
            <li>
              <Link href="#servicos" className="nav-link" onClick={handleLinkClick}>
                <span className="link-text">SERVIÇOS</span>
                <span className="link-underline"></span>
              </Link>
            </li>
            <li>
              <Link href="#contacto" className="nav-link" onClick={handleLinkClick}>
                <span className="link-text">CONTACTO</span>
                <span className="link-underline"></span>
              </Link>
            </li>
          </ul>

          {/* Botão Desktop */}
          <a 
            href="#pedido" 
            className="nav-button"
            aria-label="Fazer pedido"
          >
            <span>Fazer Pedido</span>
            <i className="fa-solid fa-basket-shopping"></i>
          </a>

          {/* Hamburger Mobile */}
          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>

        {/* Menu Mobile */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-content">
            <ul className="mobile-nav">
              <li>
                <Link href="#menu" className="mobile-link" onClick={handleLinkClick}>
                  <i className="fa-solid fa-utensils"></i>
                  <span>MENU</span>
                </Link>
              </li>
              <li>
                <Link href="#sobre" className="mobile-link" onClick={handleLinkClick}>
                  <i className="fa-solid fa-store"></i>
                  <span>SOBRE</span>
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="mobile-link" onClick={handleLinkClick}>
                  <i className="fa-solid fa-concierge-bell"></i>
                  <span>SERVIÇOS</span>
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="mobile-link" onClick={handleLinkClick}>
                  <i className="fa-solid fa-envelope"></i>
                  <span>CONTACTO</span>
                </Link>
              </li>
            </ul>

            <div className="mobile-cta">
              <a 
                href="#contacto" 
                className="mobile-button"
                onClick={handleLinkClick}
              >
                <i className="fa-solid fa-phone"></i>
                <span>Entrar em Contacto</span>
              </a>
              
              <div className="mobile-info">
                <p className="mobile-phone">
                  <i className="fa-solid fa-phone"></i>
                  Contacto a definir
                </p>
                <p className="mobile-address">
                  <i className="fa-solid fa-location-dot"></i>
                  Localização a definir
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="menu-overlay" 
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
