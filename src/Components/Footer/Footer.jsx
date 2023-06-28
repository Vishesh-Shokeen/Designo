import React from 'react'
import styles from './Footer.module.css'
import { NavLink } from 'react-router-dom'

import logo from '/assets/shared/desktop/logo-light.png'
import fb from '/assets/shared/desktop/icon-facebook.svg'
import yt from '/assets/shared/desktop/icon-youtube.svg'
import tweet from '/assets/shared/desktop/icon-twitter.svg'
import pin from '/assets/shared/desktop/icon-pinterest.svg'
import insta from '/assets/shared/desktop/icon-instagram.svg'

export default function Footer() {

    const { footer_wrap, footer_container, footerNav, footer_address, footer_contact, socialIcons } = styles

    return (

        <div className={footer_container}>
            <div className={footerNav}>
                <NavLink to='/'>
                    <img src={logo} alt="logo" />
                </NavLink>
                <nav>
                    <ul>
                        <NavLink to='/about'>OUR COMPANY</NavLink>
                        <NavLink to='/locations'>LOCATIONS</NavLink>
                        <NavLink to='/contact'>CONTACT</NavLink>
                    </ul>
                </nav>
            </div>


            <hr />


            <div className={footer_wrap}>


                <div className={footer_address}>
                    <p>Designo Central Office</p>
                    <p>3886 Wellington Street</p>
                    <p>Toranto, Ontario M9C 3J5</p>
                </div>



                <div className={footer_contact}>
                    <p>Contact Us (Central Office)</p>
                    <p>P: +123456789</p>
                    <p>M:contact@designo.co</p>
                </div>




                <div className={socialIcons}>
                    <img src={fb} alt="socialIcons" />
                    <img src={yt} alt="socialIcons" />
                    <img src={tweet} alt="socialIcons" />
                    <img src={pin} alt="socialIcons" />
                    <img src={insta} alt="socialIcons" />
                </div>
            </div>
        </div>

    )

}