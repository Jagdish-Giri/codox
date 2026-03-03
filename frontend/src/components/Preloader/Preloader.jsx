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
        return prev + 2
      })
    }, 60) // 60ms * 50 steps = 3 seconds

    // Hide preloader after 3.5 seconds
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3500)

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
            <div className='progress-text'>{progress}%</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preloader
