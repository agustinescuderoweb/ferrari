'use client'
import React, { useState, useEffect, useRef } from 'react';
import styles from '../components/videoplayer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons';

const Carousel = () => {
  const groups = [
    ["Sport Cars", "Arranca el Motor", "Descubre la Gama Ferrari"],
    ["Racing", "Scuderia Ferrari", "Descubrir"],
    ["Colecciones", "Colección Invierno", "Descubre la Nueva Selección"],
  ];

  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGroupIndex((prevIndex) => (prevIndex + 1) % groups.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [groups.length]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Tiempo de carga simulado de 3 segundos

    return () => clearTimeout(timeout);
  }, [currentGroupIndex]);

  const [isMuted, setIsMuted] = useState(true); // Asegúrate de que isMuted esté definido
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    const tryPlayVideo = () => {
      if (video) { // Verifica si video es null antes de acceder a sus propiedades
        video.muted = true;
        video.play().then(() => {
          video.muted = isMuted;
        }).catch((error) => {
          console.log('Autoplay was prevented:', error);
        });
      }
    };

    tryPlayVideo();

    const handleUserInteraction = () => {
      if (video && video.paused) {
        video.play().catch((error) => {
          console.log('Play was prevented:', error);
        });
      }
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
  }, [isMuted, videoRef]);

  const handleToggleMute = () => {
    setIsMuted(prevIsMuted => !prevIsMuted); // Invierte el estado de isMuted
  };

  return (
    <div className="relative w-full h-screen">
      <video
        ref={videoRef}
        className="w-full h-screen object-cover"
        autoPlay
        loop
        muted={isMuted}
      >
        <source src="/videos/ferrari.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
        <div className='w-[600px] absolute bottom-[100px] text-center font-bold text-[40px] justify-end'>
          {groups[currentGroupIndex].map((item, index) => (
            <div key={index} className={`${styles.carousel} ${styles.text} ${styles[`textSize${index + 1}`]}`}>
              {item}
            </div>
          ))}
          <button 
            onClick={handleToggleMute}
            className='botton'
          >
            <FontAwesomeIcon 
              icon={isMuted ? faVolumeMute : faVolumeUp} 
              className={styles.icon} // Ajusta el tamaño del icono aquí
            />
          </button>
        </div>
        <div className="flex justify-center absolute bottom-[70px] mt-4">
          {[0, 1, 2].map((index) => (
            <div key={index} className="mx-1">
              <div className={`${styles.loader} ${index === currentGroupIndex ? styles.show : ''}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;


  
