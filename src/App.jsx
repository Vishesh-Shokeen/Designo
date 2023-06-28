import React, { useEffect } from 'react'
import Home from './Components/Home/Home'
import { Route, Routes, useLocation } from 'react-router-dom'
import AboutPage from './Components/AboutPage/AboutPage'
import LocationsPage from './Components/LocationsPage/LocationsPage'
import ContactPage from './Components/ContactPage/ContactPage'
import Layout from './Layout'
import WebDesignPage from './Components/WebDesignPage/WebDesignPage'
import AppDesignPage from './Components/AppDesignPage/AppDesignPage'
import GraphicDesignPage from './Components/GraphicDesignPage/GraphicDesignPage'

export default function App() {

  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])



  return (

    <Routes>
      <Route element={<Layout />}>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/locations' element={<LocationsPage />} />
        <Route path='/contact' element={<ContactPage />} />

        <Route path='/webdesigns' element={<WebDesignPage />} />
        <Route path='/appdesigns' element={<AppDesignPage />} />
        <Route path='/graphicdesigns' element={<GraphicDesignPage />} />

      </Route>
    </Routes>
  )
}
