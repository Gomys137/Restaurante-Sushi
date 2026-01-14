export default function Features() {
  const features = [
    {
      icon: "fa-solid fa-fish",
      color: "red",
      title: "Sushi Fresco",
      description: "Utilização de peixe fresco e ingredientes selecionados, preparados no momento com rigor e atenção ao detalhe."
    },
    {
      icon: "fa-solid fa-star",
      color: "yellow",
      title: "Qualidade Reconhecida",
      description: "Aposta na consistência, na apresentação e na qualidade em cada preparação."
    },
    {
      icon: "fa-solid fa-box",
      color: "green",
      title: "Take Away & Entrega",
      description: "Soluções práticas para consumo fora do espaço, com embalagens adequadas que preservam a frescura."
    },
    {
      icon: "fa-solid fa-bolt",
      color: "orange",
      title: "Preparação Eficiente",
      description: "Processos organizados que permitem uma preparação cuidada sem comprometer os tempos de espera."
    },
    {
      icon: "fa-solid fa-face-smile-beam",
      color: "blue",
      title: "Atendimento Profissional",
      description: "Serviço atencioso e orientado para a satisfação do cliente em todas as etapas."
    },
    {
      icon: "fa-solid fa-money-bill-wave",
      color: "red",
      title: "Equilíbrio Qualidade / Preço",
      description: "Proposta equilibrada, adequada tanto para o dia a dia como para momentos especiais."
    }
  ];

  return (
    <section id="features" className="features" aria-labelledby="features-heading">
      <div className="features-container">
        <header className="features-header">
          <h2 id="features-heading" className="features-title">
            Porque Escolher <span className="highlight">Este Conceito de Sushi?</span>
          </h2>
          <p className="features-subtitle">
            Frescura, consistência e atenção ao detalhe em cada pedido
          </p>
        </header>

        <div className="features-grid" role="list" aria-label="Lista de benefícios">
          {features.map((feature, index) => (
            <article 
              key={index} 
              className="feature-card"
              role="listitem"
            >
              <div className={`feature-icon icon-${feature.color}`} aria-hidden="true">
                <i className={feature.icon}></i>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
