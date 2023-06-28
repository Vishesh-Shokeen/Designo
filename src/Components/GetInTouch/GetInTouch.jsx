import React from 'react'
import styles from './GetInTouch.module.css'
import { Link } from 'react-router-dom'
export default function GetInTouch() {
    const { git_container , git_text} = styles

    return (
        <article className={git_container}>
            <div className={git_text}>

                <h2>Let’s talk about your project</h2>
                <p>Ready to take it to the next level? Contact us today and find out
                    how our expertise can help your business grow.
                </p>
            </div>
            <Link to = '/contact'>
            <button className='btn_Dark'>GET IN TOUCH</button>
            </Link>
        </article>
    )
}
