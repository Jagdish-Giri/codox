import React from 'react'
import './Pages.css'

const About = () => {
  return (
    <div className='page-container'>
      <div className='page-hero'>
        <h1>About <span className='highlight'>Codox</span></h1>
        <p>Your journey to coding excellence starts here</p>
      </div>
      
      <div className='page-content'>
        <section className='content-section'>
          <h2>Who We Are</h2>
          <p>Codox is a leading online platform dedicated to transforming aspiring developers into coding experts. Founded by industry professionals with years of experience, we believe that quality education should be accessible to everyone.</p>
        </section>

        <section className='content-section'>
          <h2>Our Mission</h2>
          <p>To empower individuals with world-class coding skills through practical, hands-on learning experiences. We focus on real-world projects and industry-relevant technologies to ensure our students are job-ready from day one.</p>
        </section>

        <section className='content-section'>
          <h2>What Makes Us Different</h2>
          <div className='features-grid'>
            <div className='feature-card'>
              <h3>Expert Instructors</h3>
              <p>Learn from industry professionals with real-world experience</p>
            </div>
            <div className='feature-card'>
              <h3>Practical Projects</h3>
              <p>Build real applications and strengthen your portfolio</p>
            </div>
            <div className='feature-card'>
              <h3>Lifetime Access</h3>
              <p>Get unlimited access to course materials and updates</p>
            </div>
            <div className='feature-card'>
              <h3>Community Support</h3>
              <p>Join a thriving community of learners and mentors</p>
            </div>
          </div>
        </section>

        <section className='content-section'>
          <h2>Our Values</h2>
          <ul className='values-list'>
            <li><strong>Excellence:</strong> We strive for the highest quality in everything we do</li>
            <li><strong>Innovation:</strong> We continuously update our curriculum with latest technologies</li>
            <li><strong>Accessibility:</strong> Quality education should be available to everyone</li>
            <li><strong>Community:</strong> We believe in the power of learning together</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default About
