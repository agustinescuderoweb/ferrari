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
        <p>Miami Vibes</p>
        <p>Explora</p>
        </div>
        <div className={style.contenido}>
        <Image src={amarillo}></Image>
        <p>El Nombre lo dice todo: Enzo Ferrari</p>
        <p>Para saber más</p>
        </div>
      </div>
      <div className={style.info}>
        <div className={style.contenido}>
        <Image src={corso} alt='cor'></Image>
        <p>Corso Piloto</p>
        <p>Para saber más</p>
        </div>
        <div className={style.contenido}>
        <Image src={manejando} alt='man'></Image>
        <p>Ferrari Approbed</p>
        <p>Para saber más</p>
        </div>
      </div>
      <div className={style.info}>
         <div className={style.contenido}>
        <Image src={museo} alt='mus'></Image>
        <p>Ferrari Museums</p>
        <p>Para saber más</p>
        </div>
        <div className={style.contenido}>
        <Image src={pasado} alt='pas'></Image>
        <p>Modelo del Pasado</p>
        <p>Para saber más</p>
      </div>
    </div>
    </div>
  )
}

export default informacion
