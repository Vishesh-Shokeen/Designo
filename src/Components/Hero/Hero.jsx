import React from 'react'
import styles from './Hero.module.css'
import { Link } from 'react-router-dom'
import heroImg from '/assets/home/desktop/image-hero-phone.png'

export default function Hero() {
    const { hero_container, hero_text, hero_image } = styles
    return (
        <div className={hero_container}>

            <div className={hero_text}>
                <h1>Award-winning custom designs and digital branding solutions</h1>
                <p>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
                <Link to='/about'>
                    <button className='btn_Dark'>LEARN MORE</button>
                </Link>
            </div>

            <picture className={hero_image}>
                <img src={heroImg} alt="hero_image" />
            </picture>

        </div>
    )
}
