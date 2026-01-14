export default function Location() {
  const locationInfo = [
    {
      id: 1,
      icon: "fa-solid fa-location-dot",
      color: "red",
      title: "Localização",
      description: "Localização a definir<br/>Portugal",
      linkText: "Ver Localização",
      linkUrl: "#",
      linkIcon: "fa-solid fa-arrow-right"
    },
    {
      id: 2,
      icon: "fa-solid fa-phone",
      color: "yellow",
      title: "Contacto",
      description: "Disponível para pedidos e informações",
      linkText: "Entrar em Contacto",
      linkUrl: "#",
      linkIcon: "fa-solid fa-arrow-right"
    },
    {
      id: 3,
      icon: "fa-solid fa-clock",
      color: "green",
      title: "Horário",
      description: "Horário flexível<br/>A definir",
      linkText: "Consultar Horário",
      linkUrl: "#",
      linkIcon: "fa-solid fa-arrow-right"
    }
  ];

  return (
    <section id="localizacao" className="location-section" aria-labelledby="location-heading">
      <div className="location-container">
        <header className="location-header">
          <h2 id="location-heading" className="location-title">
            Onde Estamos <span className="highlight">Localização</span>
          </h2>
          <p className="location-subtitle">
            Take away e entrega de sushi preparados no momento
          </p>
        </header>

        <div className="location-content">
          <div className="location-info" role="list" aria-label="Informações de localização">
            {locationInfo.map((item) => (
              <article 
                key={item.id} 
                className="location-card"
                role="listitem"
              >
                <div className={`card-icon icon-${item.color}`} aria-hidden="true">
                  <i className={item.icon}></i>
                </div>
                <div className="card-content">
                  <h3 className="card-title">{item.title}</h3>
                  <p
                    className="card-description"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></p>
                  <a
                    href={item.linkUrl}
                    className="card-link"
                    aria-label={`${item.linkText} - ${item.title}`}
                  >
                    <span>{item.linkText}</span>
                    <i className={item.linkIcon} aria-hidden="true"></i>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="location-map">
            <div className="map-card">
              <div className="map-icon" aria-hidden="true">
                <i className="fa-solid fa-map-location-dot"></i>
                <div className="map-pulse"></div>
              </div>
              <div className="map-content">
                <h3 className="map-title">Mapa & Direções</h3>
                <p className="map-description">
                  Área reservada para integração com mapa e direções
                </p>
                <a
                  href="#"
                  className="map-button"
                  aria-label="Abrir mapa"
                >
                  <span>Abrir Mapa</span>
                  <i className="fa-solid fa-external-link-alt" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
