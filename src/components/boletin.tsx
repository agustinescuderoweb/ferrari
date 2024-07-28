import React from 'react'
import styles from '@/components/boletin.module.css'

function boletin() {
  return (
    <div>
      <div className={styles.boletin}>
        <h1>Boletín Informativo</h1>
        <h2>No te pierdas las últimas novidades del mundo Ferrari.</h2>
        <div className={styles.suscribete}><p>SUSCRÍBETE</p></div>
      </div>
    </div>
  )
}

export default boletin
