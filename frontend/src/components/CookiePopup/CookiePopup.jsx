import React, { useState, useEffect } from 'react'
import './CookiePopup.css'
import { FaCookie, FaTimes } from 'react-icons/fa'

const CookiePopup = () => {
  const [showCookie, setShowCookie] = useState(false)

  useEffect(() => {
    // Show popup after 2 seconds on every visit
    setTimeout(() => {
      setShowCookie(true)
    }, 2000)
  }, [])

  const handleAccept = () => {
    setShowCookie(false)
  }

  const handleDecline = () => {
    setShowCookie(false)
  }

  if (!showCookie) return null

  return (
    <div className='cookie-popup-container'>
      <div className='cookie-popup'>
        <button className='close-cookie-btn' onClick={handleDecline}>
          <FaTimes />
        </button>

        <div className='cookie-content'>
          <div className='cookie-icon'>
            <FaCookie />
          </div>
          <div className='cookie-text'>
            <h3>We Use Cookies</h3>
            <p>We use cookies to improve your experience and analyze website traffic. By continuing to browse, you agree to our cookie usage.</p>
          </div>
        </div>

        <div className='cookie-buttons'>
          <button className='cookie-btn decline' onClick={handleDecline}>
            Decline
          </button>
          <button className='cookie-btn accept' onClick={handleAccept}>
            Accept All
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookiePopup
