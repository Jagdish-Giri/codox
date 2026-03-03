import React, { useEffect, useState } from 'react'
import './Preloader.css'

const Preloader = () => {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 1.67 // 100/60 for 5 second duration
      })
    }, 60)

    // Hide preloader after 5 seconds
    const timer = setTimeout(() => {
      setLoading(false)
    }, 5000)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(timer)
    }
  }, [])

  if (!loading) return null

  return (
    <div className='preloader'>
      <div className='preloader-content'>
        <div className='loader-box'>
          <div className='laptop-screen'>
            <div className='screen-content'>
              <div className='logo-reveal'>
                <span className='letter'>C</span>
                <span className='letter'>O</span>
                <span className='letter'>D</span>
                <span className='letter'>O</span>
                <span className='letter'>X</span>
              </div>
              <div className='loading-info'>
                <div className='progress-bar-container'>
                  <div 
                    className='progress-bar-fill' 
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <div className='progress-text'>{Math.round(progress)}%</div>
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
