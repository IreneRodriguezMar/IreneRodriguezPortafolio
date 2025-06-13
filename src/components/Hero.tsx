import { useEffect, useRef, useState } from "react";
import "../styles/Hero.scss";
import imagenPrincipal from "../assets/imagen-principal.png";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  return (
    <section
      id="about" ref={heroRef} className={`hero ${visible ? "visible" : ""}`}
    >
      <div className="hero-content">
        <h1 className="title-hero">Soy Irene, Desarrolladora Web</h1>
        <p className="txt-hero">
            Con más de 6 años de experiencia creando interfaces modernas, 
          accesibles y optimizadas para la conversión. Especializada en e-commerce y medios digitales, 
          combino conocimientos en UX/UI, rendimiento web y SEO técnico para mejorar la experiencia del usuario 
          y la visibilidad de los sitios en buscadores. Apasionada por escribir código limpio, 
          escalar productos digitales y trabajar en equipo bajo metodologías ágiles.
        </p>
      </div>
      <div className="hero-img">
        <img src={imagenPrincipal} alt="Imagen de Irene" />
      </div>
    </section>
  );
};

export default Hero;
