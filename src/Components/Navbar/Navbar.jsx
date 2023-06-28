import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import logo from '/assets/shared/desktop/logo-dark.png'

export default function Navbar() {

    const { activeLink, nav, navbar, icon_menu } = styles
    const [visible, setVisible] = useState(false)

    function navSlider() {
        setVisible(prev => !prev)

        const nav = document.querySelector(`.${styles.nav}`)
        nav.classList.toggle(`${styles.slide}`)
    }


    return (

        <header className={navbar}>
            <NavLink to='/'>
                <img src={logo} alt="logo" />
            </NavLink>

            <img className={icon_menu} onClick={navSlider} src={visible ? "/Designo/assets/shared/mobile/icon-close.svg" : "/Designo/assets/shared/mobile/icon-hamburger.svg"} alt="icon_menu" />
            <nav className={nav}>
                <ul>
                    <NavLink to='/about'
                        className={({ isActive }) => isActive ? `${activeLink}` : null}
                    > OUR COMPANY</NavLink>



                    <NavLink to='/locations'
                        className={({ isActive }) => isActive ? `${activeLink}` : null}
                    > LOCATIONS</NavLink>



                    <NavLink to='/contact'
                        className={({ isActive }) => isActive ? `${activeLink}` : null}
                    > CONTACT</NavLink>
                </ul>
            </nav>
        </header>

    )
}
