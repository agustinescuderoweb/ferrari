import React from 'react'
import Image from 'next/image'
import style from '@/components/informacion.module.css'
import persona from '../../public/info/persona.webp'
import amarillo from '../../public/info/amarillo.jpg'
import corso from '../../public/info/corso.jpg'
import manejando from '../../public/info/manejando.png'
import museo from '../../public/info/museo.jpg'
import pasado from '../../public/info/pasado.jpg'

function informacion() {
  return (
    <div className={style.informacion}>
      <div className={style.info}>
        <div className={style.contenido}>
        <Image src={persona} className={style.persona}></Image>
        <p>Colecciones</p>
        <p>Miami Vibes</p>
        <p>Explora</p>
        </div>
        <div className={style.contenido}>
        <Image src={amarillo}></Image>
        <p>Magazine</p>
        <p>El Nombre lo dice todo: Enzo Ferrari</p>
        <p>Para saber más</p>
        </div>
      </div>
      <div className={style.info}>
        <div className={style.contenido}>
        <Image src={corso}></Image>
        <p>Corso Piloto</p>
        <p>El atractivo del Circuito</p>
        <p>Para saber más</p>
        </div>
        <div className={style.contenido}>
        <Image src={manejando}></Image>
        <p>Ferrari Approbed</p>
        <p>Pre-Owned</p>
        <p>Para saber más</p>
        </div>
      </div>
      <div className={style.info}>
         <div className={style.contenido}>
        <Image src={museo}></Image>
        <p>Ferrari Museums</p>
        <p>ONE OF A KIND</p>
        <p>Para saber más</p>
        </div>
        <div className={style.contenido}>
        <Image src={pasado}></Image>
        <p>Modelo del Pasado</p>
        <p>Para saber más</p>
      </div>
    </div>
    </div>
  )
}

export default informacion
