import React from 'react';
import styles from './menu.module.css';
import logo from '../../public/ferrari.png';
import Image from 'next/image';
import equis from '../../public/icon/x-circle.svg'

const MobileMenu = ({ closeMenu }) => {
  return (
    <div className={styles.mobileMenu}>
      <div className={styles.search}>
        <Image src={logo} alt="Logo" className={styles.logo} />
        <Image src={equis} alt='Equis' className={styles.equis} onClick={closeMenu}></Image>
        </div>
      <ul>
        <li><a href="#" onClick={closeMenu}>RACING</a></li>
        <li><a href="#" onClick={closeMenu}>SPORT CARS</a></li>
        <li><a href="#" onClick={closeMenu}>COLECCIONES</a></li>
        <li><a href="#" onClick={closeMenu}>EXPERIENCIAS</a></li>
        <li><a href="#" onClick={closeMenu}>ABOUT US</a></li>
      </ul>
    </div>
  );
};

export default MobileMenu;
