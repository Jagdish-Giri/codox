import React, { useEffect, useState } from 'react'
import './Preloader.css'

const Preloader = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500) // 1.5 seconds

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className='preloader'>
      <div className='preloader-content'>
        <div className='spinner-container'>
          <div className='spinner'>
            <div className='spinner-inner'></div>
          </div>
          <div className='brand-name'>CODOX</div>
        </div>
      </div>
    </div>
  )
}

export default Preloader
