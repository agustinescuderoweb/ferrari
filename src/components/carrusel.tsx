'use client'
import React, { useState, useEffect } from 'react';
import styles from './carrusel.module.css'; // Asegúrate de tener el archivo CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faBell, faBars } from '@fortawesome/free-solid-svg-icons'

const ImageTextCarousel = () => {
  const items = [
    { text: [["CARLOS SAINZ VISITS FERRARI PLANT: “WE ARE ONE TEAM”"],
             ["Carlos Sainz yesterday visited the Ferrari factory on his return from the Imola Grand Prix."], 
             ["Leer Más"]], image: "/sainz.jpg" },
   
   
    { text: [["SCUDERIA FERRARI HP ESPORTS TEAM WINS F1 SIM RACING CONSTRUCTORS TITLE"], 
             ["The Scuderia Ferrari HP Esports Team has taken the F1 Sim Racing Constructors Championship title for the very first time. "], 
             ["Leer Más"]], image: "/ganadores.jpg" },

    { text: [["141 LAPS BETWEEN THE BARRIERS"], 
             ["Scuderia Ferrari HP had a relatively trouble-free time of it, getting through all its Friday free practice programme for the Monaco Grand Prix."], 
             ["Leer Más"]], image: "/auto.jpg" },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % items.length);
    setCurrentTextIndex(0); // Reiniciar el índice del texto al cambiar de imagen
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Cambiar cada 5 segundos (ajusta el intervalo según tus necesidades)
  
    return () => {
      clearInterval(interval); // Limpiar el intervalo al desmontar el componente
    };
  }, []); // Ejecutar efecto cuando cambia el índice del texto
  

  return (
    <div>
    <div className={styles.carouselContainer}>
      <div className={styles.textContainer}>
        {items[currentImageIndex].text.map((text, index) => (
          <div 
            key={index}
            className={`${styles.text} ${styles[`textSize${index + 1}`]} ${index === currentTextIndex ? styles.fadeIn : styles.fadeOut}`}
          >
            {text}
            {index === 2 && (<div className={styles.iconcont}>
              <FontAwesomeIcon icon={faChevronRight} className={styles.icon} />
              </div>
            )}
          </div>
        ))}
       
      </div>
      <div className={styles.imageContainer}>
        <img src={items[currentImageIndex].image} alt={`Slide ${currentImageIndex}`} className={styles.image} />
      </div>
    </div>
    <div className={styles.indicatorsContainer}>
        {items.map((_, index) => (
          <span
            key={index}
            className={`${styles.indicator} ${currentImageIndex === index ? styles.active : ''}`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageTextCarousel;
