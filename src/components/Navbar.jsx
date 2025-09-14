import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar(){
  return (
    <div className="nav">
      <div className="container navbar">
        <Link to="/" className="brand">
          <span className="brand-badge">✦</span>
          <span>CouponFinder</span>
        </Link>
        <div className="search">
          <span>🔎</span>
          <input placeholder="Search products..."/>
        </div>
        <div className="nav-links">
          <NavLink to="/features">Features</NavLink>
          <NavLink to="/how-it-works">How It Works</NavLink>
          <NavLink to="/stores">Stores</NavLink>
          <NavLink to="/install">Install</NavLink>
        </div>
        <Link to="/install" className="btn primary">Install Extension</Link>
      </div>
    </div>
  )
}