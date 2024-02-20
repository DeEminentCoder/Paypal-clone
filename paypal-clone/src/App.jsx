import React from 'react'
import Navbar from './components/Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Hero from './components/Hero.jsx'

const App = () => {
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    </>
  )
}

export default App