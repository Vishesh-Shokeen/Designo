import React from 'react'
import styles from './GraphicDesignPage.module.css'
import Banner from '../Banner/Banner'
import DesignCard from '../DesignCard/DesignCard'
import Categories from '../Categories/Categories'
import GetInTouch from '../GetInTouch/GetInTouch'

import change from '/assets/graphic-design/desktop/image-change.jpg'
import water from '/assets/graphic-design/desktop/image-boxed-water.jpg'
import science from '/assets/graphic-design/desktop/image-science.jpg'

export default function GraphicDesignPage() {
    const { designs, page } = styles

    return (
        <div className={page}>
            <Banner
                name='Graphic Design'
                text='We deliver eye-catching branding materials that are 
            tailored to meet your business objectives.
            '
            />
            <div className={designs}>
                <DesignCard
                    name='TIM BROWN'
                    image={change}
                    desc={`A book cover designed for Tim Brown's new release. 'Change'`}
                />
                <DesignCard
                    name='BOXED WATER'
                    image={water}
                    desc='A simple packaging concept made for Boxed Water'
                />
                <DesignCard
                    name='SCIENCE!'
                    image={science}
                    desc='A poster made in collaboration with the Federal Art Project'
                />
            </div>
            <Categories />
            <GetInTouch />
        </div>
    )
}
