import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { createContext } from 'react'
import Navbar from "./Components/Navbar.jsx"
import Footer from './Components/Footer.jsx'
import './App.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Products from './pages/Products.jsx'
import Checkout from './pages/Checkout.jsx'
import Cart from './pages/Cart.jsx'
import Item from './pages/Item.jsx'
import DeliveryDetails from './pages/DeliveryDetails.jsx'
import PaymentGateway from './pages/PaymentGateway.jsx'

function App() {

  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <CartContext.Provider value={{ cartItems, setCartItems }}>
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Products" element={<Products />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/Item/:slug/:id" element={<Item />} />
              <Route path="/Checkout" element={<Checkout />} > 
                <Route path="DeliveryDetails" element={<DeliveryDetails/>} />
                <Route path="PaymentGateway" element={<PaymentGateway/>} />
              </Route>
            </Routes>
          </main>
          <Footer />
        </CartContext.Provider>
      </div>
    </>
  )
}

export default App
export const CartContext = createContext();
