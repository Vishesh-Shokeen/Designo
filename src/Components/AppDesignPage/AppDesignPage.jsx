import React from 'react'
import styles from './AppDesignPage.module.css'
import Banner from '../Banner/Banner'
import DesignCard from '../DesignCard/DesignCard'
import Categories from '../Categories/Categories'
import GetInTouch from '../GetInTouch/GetInTouch'

import airfilter from '/assets/app-design/desktop/image-airfilter.jpg'
import eyecam from '/assets/app-design/desktop/image-eyecam.jpg'
import faceit from '/assets/app-design/desktop/image-faceit.jpg'
import todo from '/assets/app-design/desktop/image-todo.jpg'
import loop from '/assets/app-design/desktop/image-loopstudios.jpg'

export default function AppDesignPage() {
  const { page, designs } = styles
  return (
    <div className={page}>
      <Banner
        name='App Design'
        text='Our mobile designs bring intuitive digital solutions
        to your customers right at their fingertips.'
      />

      <div className={designs}>
        <DesignCard
          image={airfilter}
          name='Airfilter'
          desc='Solving the problem of poor indoor air quality by filtering the air'
        />
        <DesignCard
          image={eyecam}
          name='Eyecam'
          desc='Product that lets you edit your favourite photos and videos at any time'
        />
        <DesignCard
          image={faceit}
          name='Faceit'
          desc='Get to meet your favourite internet superstar with the faceit app'
        />
        <DesignCard
          image={todo}
          name='TODO'
          desc='A todo app that features cloud sync with light and dark mode'
        />
        <DesignCard
          image={loop}
          name='Loop Studios'
          desc='A Vr experience app made for Loop Studios'
        />
      </div>
      <Categories />
      <GetInTouch />
    </div>
  )
}
