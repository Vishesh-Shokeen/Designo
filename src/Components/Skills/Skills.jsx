import React from 'react'

import styles from './Skills.module.css'
import passionate from '/assets/home/desktop/illustration-passionate.svg'
import resourceful from '/assets/home/desktop/illustration-resourceful.svg'
import friendly from '/assets/home/desktop/illustration-friendly.svg'

export default function Skills() {
    const { skills_container, skill, skill_text } = styles
    return (
        <div className={skills_container}>

            <div className={skill}>
                <img src={passionate} alt="icon" />
                <div className={skill_text}>
                    <h3>PASSIONATE</h3>
                    <p>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
                </div>
            </div>

            <div className={skill}>
                <img src={resourceful} alt="icon" />
                <div className={skill_text}>
                    <h3>RESOURCEFUL</h3>
                    <p>Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.</p>
                </div>
            </div>

            <div className={skill}>
                <img src={friendly} alt="icon" />
                <div className={skill_text}>
                    <h3>FRIENDLY</h3>
                    <p> We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.</p>
                </div>
            </div>


        </div>
    )
}
