import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Loader from './components/Loader.jsx'
import Home from './pages/Home.jsx'
import Features from './pages/Features.jsx'
import HowItWorks from './pages/HowItWorks.jsx'
import Stores from './pages/Stores.jsx'
import Install from './pages/Install.jsx'

export default function App(){
  return (
    <div className="page-transition">
      <Loader/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/features" element={<Features/>}/>
        <Route path="/how-it-works" element={<HowItWorks/>}/>
        <Route path="/stores" element={<Stores/>}/>
        <Route path="/install" element={<Install/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}