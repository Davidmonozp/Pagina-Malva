import React, { useEffect, useState } from 'react';
import '../styles/Navbar.css';  
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('/assets/bolsos-menu-nav.webp'); 

  const images = [
    '/assets/bolsos-menu-nav.webp',
    '/assets/tennis-menu-nav.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prevImage => {
        const nextImageIndex = (images.indexOf(prevImage) + 1) % images.length;
        return images[nextImageIndex]; 
      });
    }, 6000); 

    return () => clearInterval(interval); 
  }, [images]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className="logo">
        <img src="/assets/logo.jpg" alt="Logo" className="logo-img" />
      </div>

      <div className={`menu-container ${isMenuOpen ? 'active' : ''}`}>
        <nav className="menu-nav">
      <button className="close-btn" onClick={closeMenu}>X</button>
          
          <ul>
            <li><Link to="/">Mujer</Link></li>           
            <li><Link to="/hombre">Hombre</Link></li>
            <li><Link to="/globalBrands">Global Brands</Link></li>
            <li><Link to="/localBrands">Local Brands</Link></li>
          </ul>
        </nav>
        <ul className="menu">
          <li><Link to="/">Ir al inicio</Link></li>  
          <li><a href="#">Herencia Verde</a></li>
          <li><a href="#">New In</a></li>
          <li><a href="#">Malva Edition</a></li>
          <li><a href="#">Ropa</a></li>
          <li><a href="#">Calzado</a></li>
          <li><a href="#">Diseñadores</a></li>
          <li><a href="#">Accesorios</a></li>
          <li><a href="#">Joyeria</a></li>
          <img src={currentImage} alt="Imagen rotativa" className="changing-image" />
        </ul>
        
      </div>
    </nav>
  );
};

export default Navbar;
