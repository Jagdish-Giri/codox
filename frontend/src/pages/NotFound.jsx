import React from 'react'
import './Pages.css'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

const NotFound = () => {
  return (
    <div className='not-found-page'>
      <div className='not-found-content'>
        <div className='not-found-emoji'>😵‍💫</div>

        <h1 className='not-found-title'>404</h1>

        <h2 className='not-found-heading'>Page Not Found</h2>

        <p className='not-found-description'>
          Oops the page you're looking for doesn't exist. It might have been moved or deleted.
        </p>

        <div className='not-found-actions'>
          <Link to='/' className='not-found-btn primary'>
            <FaHome /> Back to Home
          </Link>
          <Link to='/courses' className='not-found-btn secondary'>
            View Courses
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
