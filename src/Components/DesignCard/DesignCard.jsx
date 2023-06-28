import React from 'react'
import styles from './DesignCard.module.css'

export default function DesignCard(props) {
    const {card_text , card } = styles
  return (
    <div className={card}>
        <img src={props.image} alt="designimage" />
        <div className={card_text}>
            <h2>{props.name}</h2>
            <p>{props.desc}</p>
        </div>
    </div>
  )
}
