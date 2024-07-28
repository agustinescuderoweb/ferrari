'use client';
import { useState } from 'react';
import styles from '../components/menu.module.css';
import MobileMenu from '../components/MobileMenu';
import logo from '../../public/ferrari.png';
import Image from 'next/image';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

   // Función para cerrar el menú cuando se haga clic fuera de él
   const closeMenu = () => {
    setMenuOpen(false);
  };


  return (
    <nav className={styles.navbar}>
      <div className={styles.mobileNavbar}>
        <span id="menu-btn" onClick={toggleMenu}>MENU</span>
        <Image src={logo} alt="Logo" className={styles.logo} />
        <span>SEARCH</span>
      </div>
      <div className={styles.desktop}>
      <Image src={logo} alt="Logo" width={50} className={styles.desktopLogo} />
      <ul className={`${styles.desktopMenu} ${menuOpen ? styles.open : ''}`}>
        <li><a href="#">RACING</a></li>
        <li><a href="#">SPORT CARS</a></li>
        <li><a href="#">COLECCIONES</a></li>
        <li><a href="#">EXPERIENCIAS</a></li>
        <li><a href="#">ABOUT AS</a></li>
      </ul>
      </div>
      {menuOpen && <MobileMenu closeMenu={closeMenu} />}
    </nav>
  );
}

