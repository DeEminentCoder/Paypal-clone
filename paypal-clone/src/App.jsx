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

const App = () => {
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <Content></Content>
    <Content2></Content2>
    <Content3></Content3>
    </>
  )
}

export default App