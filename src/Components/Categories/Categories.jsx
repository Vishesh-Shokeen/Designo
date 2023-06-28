import React from 'react'
import styles from './Categories.module.css'
import { Link } from 'react-router-dom'


export default function Categories() {

    const { cat_container, cat_text, cat_web, cat_app, cat_graphic } = styles

    return (
        <section className={cat_container}>

            <div className={cat_web}>
                <div className={cat_text}>
                <Link to='/webdesigns'>
                    <h2>WEB DESIGN</h2>
                    <div>
                        <p>VIEW PROJECTS</p>
                        <img src="assets\shared\desktop\icon-right-arrow.svg" alt="icon_arrow" />
                    </div>
                </Link>
                </div>
            </div>



            <div className={cat_app}>
                <div className={cat_text}>
                    <Link to='/appdesigns'>
                    <h2>APP DESIGN</h2>
                    <div>
                        <p>VIEW PROJECTS</p>
                        <img src="assets\shared\desktop\icon-right-arrow.svg" alt="icon_arrow" />
                    </div>
                    </Link>
                </div>
            </div>



            <div className={cat_graphic}>
                <div className={cat_text}>
                    <Link to='/graphicdesigns'>
                    <h2>GRAPHIC DESIGN</h2>
                    <div>
                        <p>VIEW PROJECTS</p>
                        <img src="assets\shared\desktop\icon-right-arrow.svg" alt="icon_arrow" />
                    </div>
                    </Link>
                </div>
            </div>

        </section>
    )
}
