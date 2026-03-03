import React from 'react'
import './Pages.css'
import { FaCode, FaBullseye, FaChalkboardTeacher, FaBook, FaTrophy, FaBriefcase, FaTools, FaGlobe } from 'react-icons/fa'

const Services = () => {
  return (
    <div className='page-container'>
      <div className='page-hero'>
        <h1>Our Services</h1>
        <p>Comprehensive coding education solutions</p>
      </div>
      
      <div className='page-content'>
        <section className='services-grid'>
          <div className='service-card'>
            <div className='service-icon'><FaCode /></div>
            <h3>Live Coding Sessions</h3>
            <p>Interactive live coding classes with expert instructors. Ask questions in real-time and get instant feedback on your code.</p>
          </div>

          <div className='service-card'>
            <div className='service-icon'><FaBullseye /></div>
            <h3>Project-Based Learning</h3>
            <p>Build real-world projects from scratch. From simple applications to complex systems, learn by doing.</p>
          </div>

          <div className='service-card'>
            <div className='service-icon'><FaChalkboardTeacher /></div>
            <h3>1-on-1 Mentorship</h3>
            <p>Get personalized guidance from industry experts. Schedule sessions to discuss your career goals and technical challenges.</p>
          </div>

          <div className='service-card'>
            <div className='service-icon'><FaBook /></div>
            <h3>Course Library</h3>
            <p>Access hundreds of courses covering web development, mobile apps, data science, AI, and more.</p>
          </div>

          <div className='service-card'>
            <div className='service-icon'><FaTrophy /></div>
            <h3>Certification Programs</h3>
            <p>Earn industry-recognized certificates to showcase your skills to potential employers.</p>
          </div>

          <div className='service-card'>
            <div className='service-icon'><FaBriefcase /></div>
            <h3>Career Support</h3>
            <p>Resume building, interview preparation, and job placement assistance to kickstart your tech career.</p>
          </div>

          <div className='service-card'>
            <div className='service-icon'><FaTools /></div>
            <h3>Code Review Service</h3>
            <p>Get your code reviewed by experienced developers. Learn best practices and improve your coding style.</p>
          </div>

          <div className='service-card'>
            <div className='service-icon'><FaGlobe /></div>
            <h3>Community Forum</h3>
            <p>Connect with fellow learners, share knowledge, and collaborate on projects in our active community.</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Services
