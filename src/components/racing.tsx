"use client"
import { useState } from 'react';
import styles from './racing.module.css';

const Component = () => (
    <div className={styles.racing}>
      <Section title="RACING" items={["Scuderia Ferrari Hp", "Charles Leclerc", "Carlos Sainz", "Hypercar", "GT Series", "Esports", "Ferrari Driver Academy", "Scuderia Ferrari Member"]} />
      <Section title="SPORT CARS" items={["Gama", "Configurador", "MyFerrari", "Vehículos de ocasión certificados", "Buscar concesionario", "Recall information", "TechInfo"]} />
      <Section title="COLECCIONES" items={["Hombre", "Mujer", "Niño", "Zapatos", "Gafas de sol", "Coleccionables", "Selección Scuderia Ferrari"]} />
      <Section title="EXPERIENCIAS" items={["Corse Clienti", "Ferrari Esports Series", "Ristorante Cavallino", "Museos Ferrari", "Ferrari World Abu Dhabi", "Ferrari Land Barcelona"]} />
      <Section title="SOBRE NOSOTROS" items={["Corporate", "Sustainability", "Media Centre", "Noticias", "The Official Ferrari Magazine", "History", "Join us"]} />
    </div>
  );

const Section = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.section}>
      <div className={styles.header} onClick={toggleOpen}>
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.toggleSymbol}>{isOpen ? '-' : '+'}</span>
      </div>
      <div className={styles.items}>
        {items.map((item, index) => (
          <h2 key={index} className={isOpen ? styles.visible : styles.hidden}>{item}</h2>  ))}
      </div>
    </div>
  );
};

export default Component;