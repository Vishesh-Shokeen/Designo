import React from 'react'
import styles from './ContactPage.module.css'
import LocationsStrip from '../LocationsStrip/LocationsStrip'

export default function ContactPage() {
    const { contactUs_card , card_text } = styles
    
    return (
        <>
        <div className={contactUs_card}>
            <div className={card_text}>
                <h1>Contact Us</h1>
                <p>
                    Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.
                </p>
            </div>
            <form >
                <input placeholder='Name' type="text" />
                <input placeholder='Email Address' type="email" />
                <input placeholder='Phone' type="number" />
                <textarea placeholder='Your Message' />
                <button type='button' className="btn_Dark">Submit</button>
            </form>

        </div>

        <LocationsStrip/>
        </>
    )
}
