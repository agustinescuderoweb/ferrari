import React from 'react'
import shell from '../../public/icon/shell.svg'
import styles from '@/components/footer.module.css'
import Image from 'next/image'

function footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.items}>
        <div className={styles.item}>
           <h1>Nota Legal</h1>
           <h1>Política de Privacidad</h1>
           <h1>Política de Cookies</h1>
           <h1>Contactos</h1>
           </div>   
        </div>
        <div className={styles.she}><div className={styles.shell}><Image src={shell} alt='shell'></Image></div></div>
        </div>
  )
}

export default footer
