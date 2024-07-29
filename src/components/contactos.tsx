import React from 'react'
import Image from 'next/image'
import face from '../../public/icon/facebook (1).svg'
import twitch from '../../public/icon/twitch.svg'
import insta from '../../public/icon/instagram.svg'
import  linkedin from '../../public/icon/linkedin.svg'
import tiktok from '../../public/icon/twitch.svg'
import twitter from '../../public/icon/twitter-x.svg'
import youtube from '../../public/icon/youtube.svg'
import styles from '@/components/contactos.module.css'
import plus from '../../public/icon/plus.svg'

function contactos() {
  return (
    <div className={styles.contacto}>
      <div className={styles.redes}>
       <div className={styles.one}>
            <div className={styles.fa}>
             <span><Image className={styles.imag} src={face} alt='face'></Image></span>
             <h1>FACEBOOK</h1>
            </div>
             <div className={styles.tw}>
             <span><Image className={styles.imag} src={twitch} alt='twi'></Image></span>
             <h1>TWITCH</h1>
             </div>
             </div>
        <div className={styles.two}>
            <div className={styles.in}>
             <span><Image className={styles.imag} src={insta} alt='ins'></Image></span>
             <h1>INSTAGRAM</h1>
            </div>
             <div className={styles.twi}>
             <span><Image className={styles.imag} src={twitter} alt='twi'></Image></span>
             <h1>X</h1>
             </div></div>
        <div className={styles.three}>
            <div className={styles.lin}>
             <span><Image className={styles.imag} src={linkedin} alt='lin'></Image></span>
             <h1>LINKEDIN</h1>
            </div>
             <div className={styles.you}>
             <span><Image className={styles.imag} src={youtube} alt='you'></Image></span>
             <h1>YOUTUBE</h1>
             </div></div>
        <div className={styles.for}>
            <div className={styles.tik}>
             <span><Image className={styles.imag} src={tiktok} alt='tik'></Image></span>
             <h1>TIK TOK</h1>
            </div>
            </div>
      </div>
      <div className={styles.copy}>
        <p>Ferrari
                Ferrari N.V. - Holding company - A company under Dutch law, having its official seat in Amsterdam, the Netherlands and its corporate address at Via Abetone Inferiore No. 4, I-41053 Maranello (MO), Italy, registered with the Dutch trade register under number 64060977
                <br></br><br></br>Ferrari S.p.A. - A company under Italian law, having its registered office at Via Emilia Est No. 1163, Modena, Italy, Companies’ Register of Modena, VAT and Tax number 00159560366 and share capital of Euro 20,260,000
                <br></br><br></br>Copyright 2024 - All rights reserved</p>
      </div>
    </div>
  )
}

export default contactos
