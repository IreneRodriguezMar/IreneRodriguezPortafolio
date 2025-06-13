import { useEffect, useRef, useState } from "react";
import "../styles/Navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setOpen(!open);

  useEffect(() => {
    const handleScroll = () => setOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="navbar" ref={navRef}>
      <h1>IRENE RODRIGUEZ</h1>

    <button
    className={`menu-toggle ${open ? "open" : ""}`}
    onClick={toggleMenu}
    aria-label="Menú"
    >
    <span />
    <span />
    <span />
    </button>
      <nav className={`nav-links ${open ? "open" : ""}`}>
        <ul>
          <li><a href="#about" onClick={() => setOpen(false)}>Sobre mí</a></li>
          <li><a href="#projects" onClick={() => setOpen(false)}>Proyectos</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)}>Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
