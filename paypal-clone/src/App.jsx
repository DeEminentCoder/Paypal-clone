import React from 'react'
import Navbar from './components/Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Hero from './components/Hero.jsx'
import Content from './components/Content.jsx'
import Content2 from './components/Content2.jsx'
import Content3 from './components/Content3.jsx'
import Content4 from './components/Content4.jsx'
import Content5 from './components/Content5.jsx'
import ExploreCarousel from './components/ExploreCarousel.jsx'
import Footer from './components/Footer.jsx'
import '../custom.scss'

const App = () => {
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <Content></Content>
    <Content2></Content2>
    <Content3></Content3>
    <Content4></Content4>
    <Content5></Content5>
    <ExploreCarousel></ExploreCarousel>
    <Footer></Footer>
    </>
  )
}

export default App