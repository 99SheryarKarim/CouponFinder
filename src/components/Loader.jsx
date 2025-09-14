import React, { useState, useEffect } from 'react'
import './Loader.css'

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('couponfinder-visited')
    
    if (hasVisited) {
      setIsVisible(false)
      return
    }

    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          // Mark as visited and hide loader
          localStorage.setItem('couponfinder-visited', 'true')
          setTimeout(() => setIsVisible(false), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    return () => clearInterval(progressInterval)
  }, [])

  if (!isVisible) return null

  return (
    <div className="loader-overlay">
      <div className="loader-container">
        <div className="loader-logo">
          <div className="logo-icon">
            <div className="logo-circle">
              <span className="logo-text">C</span>
            </div>
            <div className="logo-pulse"></div>
          </div>
        </div>
        
        <div className="loader-content">
          <h1 className="loader-title">
            <span className="title-word">Coupon</span>
            <span className="title-word">Finder</span>
          </h1>
          <p className="loader-subtitle">Smart Savings Made Simple</p>
          
          <div className="loader-progress">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="progress-text">{Math.round(progress)}%</div>
          </div>
          
          <div className="loader-dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
