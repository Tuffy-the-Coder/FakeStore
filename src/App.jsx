import { useState } from 'react'
import Navbar from "./Components/Navbar.jsx"
import Footer from './Components/Footer.jsx'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Products from './pages/Products.jsx'
import Cart from './pages/Cart.jsx'
import Item from './pages/Item.jsx'
import { createContext } from 'react'

function App() {
  
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
    <div className="bg-gradient-to-br from-gray-800 to-slate-950">
      <CartContext.Provider value={{cartItems, setCartItems}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Products" element={<Products/>} />
        <Route path="/Cart" element={<Cart/>} />
        <Route path="/Item/:id" element={<Item/>} />
      </Routes>
      </CartContext.Provider>
      <Footer />
      </div>
    </>
  )
}

export default App
export const CartContext = createContext();
