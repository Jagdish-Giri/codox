import React from 'react'
import './Pages.css'
import Carousel from '../components/Carousel/Carousel'
import Plans from '../components/Plans/Plans'

const Courses = () => {
  return (
    <div className='page-container'>
      <div className='page-hero'>
        <h1>Our <span className='highlight'>Courses</span></h1>
        <p>Choose from our wide range of programming courses</p>
      </div>
      
      <div className='page-content'>
        <Carousel />
        
        <section className='content-section'>
          <h2>Why Choose Our Courses</h2>
          <div className='course-benefits'>
            <div className='benefit-item'>
              <span className='benefit-icon'>✅</span>
              <p>Hands-on projects with real-world applications</p>
            </div>
            <div className='benefit-item'>
              <span className='benefit-icon'>✅</span>
              <p>Learn at your own pace with lifetime access</p>
            </div>
            <div className='benefit-item'>
              <span className='benefit-icon'>✅</span>
              <p>Expert instructors with industry experience</p>
            </div>
            <div className='benefit-item'>
              <span className='benefit-icon'>✅</span>
              <p>Certificate of completion for each course</p>
            </div>
            <div className='benefit-item'>
              <span className='benefit-icon'>✅</span>
              <p>24/7 community support and mentorship</p>
            </div>
            <div className='benefit-item'>
              <span className='benefit-icon'>✅</span>
              <p>Regular updates with latest technologies</p>
            </div>
          </div>
        </section>

        <Plans />
      </div>
    </div>
  )
}

export default Courses
