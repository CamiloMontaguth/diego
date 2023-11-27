'use client'
import './articulo.css';


function Articulo() {
    return (
        <div className="articulo-container">
            <div className="col">
                <div className="anuncio">
                    <img src="/imagenes/promo.jpg" alt="Descripción de la imagen"/>
               </div>
                <div className="texto-anuncio">
                    <h1>DEJA VOLAR TU IMAGINACIÓN</h1>
                    <p>Basta de tener lo que todos tienen, crea productos únicos como tu estilo, en MORA PERSONALIZADOS
                        dejamos volar tu imaginación y creatividad para que hagas tus ideas realidad.</p>
                    <a>PERSONALIZA</a>
                </div>
            </div>
        </div>
    )
}

export default Articulo;