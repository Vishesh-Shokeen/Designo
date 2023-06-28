import React, { useEffect, useRef, useState } from 'react'
import styles from './AboutPage.module.css'
import LocationsStrip from '../LocationsStrip/LocationsStrip'
import GetInTouch from '../GetInTouch/GetInTouch'

import desktopHero from '/assets/about/desktop/image-about-hero.jpg'
import mobilepHero from '/assets/about/mobile/image-about-hero.jpg'
import tabletHero from '/assets/about/tablet/image-about-hero.jpg'

import desktopTalent from '/assets/about/desktop/image-world-class-talent.jpg'
import mobilepTalent from '/assets/about/mobile/image-world-class-talent.jpg'
import tabletTalent from '/assets/about/tablet/image-world-class-talent.jpg'

import desktopDeal from '/assets/about/desktop/image-real-deal.jpg'
import mobileDeal from '/assets/about/mobile/image-real-deal.jpg'
import tabletDeal from '/assets/about/tablet/image-real-deal.jpg'



export default function AboutPage() {
    const { show, aboutUs, aboutUs_image, aboutUs_text, about_Card, about_card_text } = styles

    const myRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                entries[0].target.classList.add(`${show}`)
                observer.disconnect()
            }
        })

        observer.observe(myRef.current)
    }, [])

    return (
        <>
            <section ref={myRef} className={aboutUs}>

                <div className={aboutUs_text}>
                    <h1>About Us</h1>
                    <p>
                        Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.
                    </p>
                </div>


                <picture className={aboutUs_image}>
                    <source media="(max-width: 400px)" srcSet={mobilepHero} />
                    <source media="(max-width: 800px)" srcSet={tabletHero} />
                    <img src={desktopHero} alt="image" />
                </picture>


            </section>




            <div className={about_Card}>

                <picture>

                    <source media="(max-width: 400px)" srcSet={mobilepTalent} />
                    <source media="(max-width: 800px)" srcSet={tabletTalent} />
                    <img src={desktopTalent} alt="Image" />

                </picture>
                <div className={about_card_text}>

                    <h2>World-class talent</h2>
                    <p>
                        We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.
                    </p>

                    <p>
                        Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.
                    </p>
                </div>
            </div>

            <LocationsStrip />


            <div className={about_Card}>
                <div className={about_card_text}>

                    <h2>The real deal</h2>
                    <p>
                        As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.
                    </p>

                    <p>
                        We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.
                    </p>
                </div>
                <picture>
                    <source media="(max-width: 800px)" srcSet={mobileDeal} />
                    <source media="(max-width: 800px)" srcSet={tabletDeal} />
                    <img src={desktopDeal} alt="image" />
                </picture>
            </div>
            <GetInTouch />
        </>
    )
}
