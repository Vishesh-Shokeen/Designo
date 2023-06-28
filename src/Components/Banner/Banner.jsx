import React from 'react'
import styles from './Banner.module.css'

export default function Banner(props) {

    const { banner_text, banner } = styles

    return (

        <div className={banner}>

            <div className={banner_text}>

                <h1>{props.name}</h1>
                <p>{props.text}</p>
                
            </div>

        </div>
    )
}
