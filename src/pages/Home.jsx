// src/pages/Home.jsx
import React from 'react';
import '../styles/Home.css';
import Navbar from '../components/Navbar';

const Home = () => {

  return (
    <>
      <div className='home'>
        <Navbar />
      </div>
      <section className='contenido'>
        <img src="./assets/the-holiday.webp" alt="Imagen de fondo" className="imagen-contenido" />
      </section>
    </>
  );
};

export default Home;
