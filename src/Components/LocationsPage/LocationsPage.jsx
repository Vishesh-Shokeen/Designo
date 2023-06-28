import React from 'react'
import styles from './LocationsPage.module.css'
import GetInTouch from '../GetInTouch/GetInTouch'

import canadaDesktop from '/assets/locations/desktop/image-map-canada.png'
import canadaTablet from '/assets/locations/tablet/image-map-canada.png'

import australiaDesktop from '/assets/locations/desktop/image-map-australia.png'
import australiaTablet from '/assets/locations/tablet/image-map-australia.png'

import ukDesktop from '/assets/locations/desktop/image-map-united-kingdom.png'
import ukTablet from '/assets/locations/tablet/image-map-uk.png'

export default function LocationsPage() {
    const { LocationsPage, child1, child2, child3, child_text } = styles
    return (
        <>
            <div className={LocationsPage}>

                <div className={child1}>

                    <div className={child_text}>
                        <p>Canada</p>
                        <div>

                            <div>
                                <p>Designo Central Office</p>
                                <p>3886 Wellington Street</p>
                                <p>Toronnto, Ontario M9C 3J5</p>
                            </div>
                            <div>
                                <p>Contact</p>
                                <p>P: +1253-863-8979</p>
                                <p>M: contact@designo.co</p>
                            </div>
                        </div>
                    </div>

                    <picture>
                        <source media="(max-width: 800px)" srcSet={canadaTablet} />
                        <img src={canadaDesktop} alt="image" />
                    </picture>

                </div>



                <div className={child2}>

                    <picture>
                        <source media="(max-width: 800px)" srcSet={australiaTablet} />
                        <img src={australiaDesktop} alt="image" />
                    </picture>
                    <div className={child_text}>
                        <p>Australia</p>
                        <div>

                            <div>
                                <p>Designo AU Office</p>
                                <p>19 Balonne Street</p>
                                <p>New South Wales 2443</p>
                            </div>
                            <div>
                                <p>Contact</p>
                                <p>P: +1253-863-8979</p>
                                <p>M: contact@designo.au</p>
                            </div>
                        </div>
                    </div>

                </div>



                <div className={child3}>
                    <div className={child_text}>
                        <p>United Kingdom</p>
                        <div>

                            <div>
                                <p>Designo UK Office</p>
                                <p>13 Colorado Way</p>
                                <p>Rhyd-y-fro SA8 9GA</p>
                            </div>

                            <div>
                                <p>Contact</p>
                                <p>P: 078 3115 1400</p>
                                <p>M: contact@designo.uk</p>
                            </div>
                        </div>
                    </div>
                    <picture>
                        <source media="(max-width: 800px)" srcSet={ukTablet} />
                        <img src={ukDesktop} alt="image" />
                    </picture>

                </div>


            </div>
            <GetInTouch />
        </>
    )
}
