import elUniversal from "../assets/el-universal.png";
import nissan from "../assets/nissan-mx.jpg";
import tommy from "../assets/tommy-mx.jpg";
import dedinero from "../assets/logo-dedinero.png";
import dashboard from "../assets/to-do.jpg";
import edomex from "../assets/logo-eluniversaledomex.png";

export const projects = [
  {
    title: "Refactorización de Portales de El Universal",
    description: "Mejoré el rendimiento web y accesibilidad de múltiples sitios de El Universal mediante refactorización de código legacy en React y ARC Publishing.",
    tech: ["React", "Sass", "CLS", "LCP", "SEO técnico", "ARC Publishing", "Métricas Lighthouse"],
    link: "https://www.eluniversal.com.mx",
    image: elUniversal
  },
  {
    title: "Landings modulares para Nissan México",
    description: "Desarrollo de secciones reutilizables en Adobe Experience Manager para Nissan México, optimizadas para campañas y mobile.",
    tech: ["Adobe Experience Manager", "JavaScript", "HTML5", "CSS3", "AEM Components"],
    link: "https://www.nissan.com.mx",
    image: nissan
  },
  {
    title: "Tiendas VTEX para marcas internacionales",
    description: "Coordinación y desarrollo de +7 tiendas en VTEX para Guess, Coach, Tommy Hilfiger, entre otras.",
    tech: ["VTEX", "HTML5", "SASS", "JavaScript", "jQuery"],
    link: "https://mx.tommy.com",
    image: tommy
  },
  {
    title: "Módulos editoriales en plataformas de noticias (ARC)",
    description: "Implementación de componentes reutilizables en React JS para portales editoriales como ViveUSA, De10, Clase.",
    tech: ["React", "Sass", "UX Design", "ARC Publishing", "Métricas Lighthouse", "SEO técnico"],
    link: "https://www.dedinero.com.mx",
    image: dedinero
  },
  {
    title: "Optimización WPO y Core Web Vitals",
    description: "Aplicación de estrategias WPO mejorando PageSpeed Insights en sitios institucionales y comerciales.",
    tech: ["React", "Lazy loading", "Minificación", "CLS", "LCP", "Buenas prácticas CSS/JS."],
    link: "https://www.eluniversaledomex.com.mx",
    image: edomex
  },
  {
    title: "Todo App Fullstack con Subtareas y Comentarios",
    description: "Desarrollo de una SPA fullstack para gestión de tareas con subtareas, comentarios y autenticación de usuarios. Prueba técnica entregada en 48h.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB"],
    link: "https://github.com/IreneRodriguezMar/ToDoAppClaro.git",
    image: dashboard
  }
];
