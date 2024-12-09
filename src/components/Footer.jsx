import 'font-awesome/css/font-awesome.min.css';
import React, { useState } from 'react';
import '../styles/Footer.css';

const Footer = () => {

  const [isCustomerServiceOpen, setIsCustomerServiceOpen] = useState(false);

  const toggleCustomerService = () => {
    setIsCustomerServiceOpen(!isCustomerServiceOpen);
  };

  const [isWhoAreOpen, setIsWhoAreOpen] = useState(false);

  const toggleWhoAre = () => {
    setIsWhoAreOpen(!isWhoAreOpen);
  };

  return (
    <footer>
      <div className="footer-container">
        {/* Columna: Síguenos */}
        <div className="footer-column">
          <h3>Síguenos</h3>
          <ul>
            <li><a href="/facebook"><i className="fab fa-facebook"></i></a></li>
            <li><a href="/instagram"><i className="fab fa-instagram"></i></a></li>
            <li><a href="/twitter"><i className="fab fa-twitter"></i></a></li>
            <li><a href="/youtube"><i className="fab fa-youtube"></i></a></li>
          </ul>
        </div>

        {/* Columna: Servicio al Cliente */}
        <div className="footer-column servicio-al-cliente">
          <h3 onClick={toggleCustomerService}>
            Servicio al Cliente
            <i className={`fas ${isCustomerServiceOpen ? 'fa-chevron-up' : 'fa-thin fa-chevron-down'}`} style={{ marginLeft: '10px' }}></i>
          </h3>
          {isCustomerServiceOpen && (
            <ul>
              <li><a href="">Contáctanos/PQRS</a></li>
              <li><a href="">Recoge en tienda</a></li>
              <li><a href="">Localizador de tiendas</a></li>
            </ul>
          )}
        </div>

        {/* Columna: Quiénes somos */}
        <div className="footer-column">
          <h3 onClick={toggleWhoAre}>
            Quiénes somos
            <i className={`fas ${isWhoAreOpen ? 'fa-chevron-up' : 'fa-thin fa-chevron-down'}`} style={{ marginLeft: '10px' }}></i>
          </h3>
          {isWhoAreOpen && (
            <ul>
              <li><a href="/about">Nuestro equipo</a></li>
            </ul>
          )}

        </div>

        {/* Columna: Suscríbete */}
        <div className="footer-column suscribete">
          <p>Suscríbete a nuestro Newsletter <br /> Regístrate para recibir 10% de descuento en tu primera orden y ofertas exclusivas a lo largo del año </p>

          <div className="checkboxes">
            <label>
              <input type="radio" name="gender" value="mujer" />
              Mujer
            </label>
            <label>
              <input type="radio" name="gender" value="hombre" />
              Hombre
            </label>
            <label>
              <input type="radio" name="gender" value="ninos" />
              Niños
            </label>
          </div>
          {/* Formulario de suscripción */}
          <form className="newsletter-form">
            <input
              type="email"
              name="email"
              placeholder="Ingresa tu correo electrónico"
              required
            />
            <button type="submit">Suscribirme</button>
          </form>
        </div>
      </div>

      <p className='derechos'>&copy; 2024 Malva Online</p>
    </footer>
  );
};

export default Footer;
