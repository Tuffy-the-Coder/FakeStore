import { useState } from 'react'
import Navbar from "./Components/Navbar.jsx"
import Footer from './Components/Footer.jsx'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Products from './Components/Products.jsx'
import Cart from './Components/Cart.jsx'


function App() {
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Products" element={<Products/>} />
        <Route path="/Cart" element={<Cart/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
