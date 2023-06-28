import React from 'react'
import styles from './WebDesignPage.module.css'
import Banner from '../Banner/Banner'
import DesignCard from '../DesignCard/DesignCard'
import Categories from '../Categories/Categories'
import GetInTouch from '../GetInTouch/GetInTouch'

import express from '/assets/web-design/desktop/image-express.jpg'
import transfer from '/assets/web-design/desktop/image-transfer.jpg'
import photon from '/assets/web-design/desktop/image-photon.jpg'
import builder from '/assets/web-design/desktop/image-builder.jpg'
import blogr from '/assets/web-design/desktop/image-blogr.jpg'
import camp from '/assets/web-design/desktop/image-camp.jpg'



export default function WebDesignPage() {
    const {page , designs} = styles
  return (

    <div className={page}>
        <Banner
        name = 'Web Design'
        text = 'We build websites that serve as powerful marketing tools and bring memorable brand experiences.'
        />


        <div className={designs}>
            <DesignCard
            image = {express}
            name = 'Express'
            desc = 'A multi-carrier shipping website for ecommerce businesses'
            />

            <DesignCard
            image = {transfer}
            name = 'Transfer'
            desc = 'Site for low-cost money transfers and sending money within seconds'
            />

            <DesignCard
            image = {photon}
            name = 'Photon'
            desc = 'A state-of-the-art music player with high-resolution audio and DSP effects'
            />


            <DesignCard
            image = {builder}
            name = 'Builder'
            desc = 'Connects users with local contractors based on their locatons'
            />

            <DesignCard
            image = {blogr}
            name = 'Blogr'
            desc = 'Blogr is a platform for creating an online blog or publicaton'
            />

            <DesignCard
            image = {camp}
            name = 'Camp'
            desc = 'Get expert training in coding ,data , design,and digital marketing'
            />

        </div>
        <Categories/>
        <GetInTouch/>
    </div>
  )
}
