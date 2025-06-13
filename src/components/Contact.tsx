import "../styles/Contact.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <h2 className="contact-title">Contáctame</h2>
        <p>¿Te interesa trabajar conmigo o colaborar en un proyecto? Estoy disponible para nuevas oportunidades y retos interesantes.</p>

        <div className="contact-buttons">
          <a href="mailto:irene.rodriguezmar@gmail.com" className="contact-btn">Enviar correo</a>
          <a
            href="/IreneRodriguezM-DesarrolladoraWeb-CV.pdf"
            className="contact-btn"
             download="CV-IreneRodriguez.pdf"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
