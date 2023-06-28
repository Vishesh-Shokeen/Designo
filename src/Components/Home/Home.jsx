
import { React, useEffect } from 'react'
import styles from './Home.module.css'

import Hero from '../Hero/Hero'
import Categories from '../Categories/Categories'
import Skills from '../Skills/Skills'
import GetInTouch from '../GetInTouch/GetInTouch'



export default function Home() {
  const { component, show } = styles

  useEffect(() => {

    const options = {
      root: null,
      threshold: 0,
      rooMargin: '200px 0px'
    }

    const elems = document.querySelectorAll(`.${component}`)

    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains(`${show}`)) {
          entry.target.classList.add(`${show}`)
        }
      })
    })

    elems.forEach(x => {
      io.observe(x)
    }, options)

  }, [])

  return (
    <>

      <div className={component}>
        <Hero />
      </div>
      <div className={component}>
        <Categories />
      </div>
      <div className={component}>
        <Skills />
      </div>
      <GetInTouch />
    </>
  )
}
