import React, { useEffect, useState } from 'react'
import './Preloader.css'
import { FaUsb } from 'react-icons/fa'

const Preloader = () => {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [connected, setConnected] = useState(false)

  useEffect(() => {
    // Connection animation delay
    const connectTimer = setTimeout(() => {
      setConnected(true)
    }, 500)

    // Progress animation starts after connection
    const progressTimer = setTimeout(() => {
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval)
            return 100
          }
          return prev + 2.5
        })
      }, 60) // 60ms * 40 steps = 2.4 seconds

      return () => clearInterval(progressInterval)
    }, 800)

    // Hide preloader after 3.5 seconds total
    const hideTimer = setTimeout(() => {
      setLoading(false)
    }, 3500)

    return () => {
      clearTimeout(connectTimer)
      clearTimeout(progressTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  if (!loading) return null

  return (
    <div className='preloader'>
      <div className='preloader-content'>
        <div className='laptop-container'>
          <div className='laptop-screen'>
            <div className={`usb-icon ${connected ? 'connected' : ''}`}>
              <FaUsb />
            </div>
            <div className={`loading-screen ${connected ? 'show' : ''}`}>
              <div className='codox-logo'>
                <span className='letter'>C</span>
                <span className='letter'>O</span>
                <span className='letter'>D</span>
                <span className='letter'>O</span>
                <span className='letter'>X</span>
              </div>
              <div className='loading-details'>
                <div className='progress-bar-container'>
                  <div 
                    className='progress-bar-fill' 
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <div className='loading-stats'>
                  <span className='loading-text'>Loading files...</span>
                  <span className='progress-percentage'>{progress}%</span>
                </div>
              </div>
            </div>
          </div>
          <div className='laptop-base'></div>
        </div>
      </div>
    </div>
  )
}

export default Preloader
