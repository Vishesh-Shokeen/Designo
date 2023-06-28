import React from 'react'
import styles from './LocationsStrip.module.css'
import { Link } from 'react-router-dom'

import CanadaImg from '/assets/shared/desktop/illustration-canada.svg'
import australiaImg from '/assets/shared/desktop/illustration-australia.svg'
import ukImg from '/assets/shared/desktop/illustration-united-kingdom.svg'



export default function LocationsStrip() {
  const { locations, location } = styles
  return (
    <section className={locations}>

      <div className={location}>
        <img src={CanadaImg} alt="icon" />
        <h2>CANADA</h2>
        <Link to='/locations'>
          <button className="btn_Light">SEE LOCATION</button>
        </Link>
      </div>

      <div className={location}>
        <img src={australiaImg} alt="icon" />
        <h2>AUSTRALIA</h2>
        <Link to='/locations'>
          <button className="btn_Light">SEE LOCATION</button>
        </Link>
      </div>

      <div className={location}>
        <img src={ukImg} alt="icon" />
        <h2>UNITED KINGDOM</h2>
        <Link to='/locations'>
          <button className="btn_Light">SEE LOCATION</button>
        </Link>
      </div>

    </section>
  )
}
