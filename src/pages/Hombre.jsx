import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Hombre.css';


const Hombre = () => {
    return (
        <>

            <div className="hombre">
                <Navbar />
                <div className="scalpers">
                    <p className='subtitle'>NEW IN</p>
                    <h2 className='title'>SCALPERS</h2>
                    <p className='description-banner'>The latest trends, with authentic touches</p>
                    <p className='description'>Buy now</p>
                </div>
            </div>
            <section className='el-ganso'>
            <img src="./assets/El_Ganso.webp" alt="Imagen de fondo" className="imagen-contenido" />
            </section>

        </>
    )
}

export default Hombre
