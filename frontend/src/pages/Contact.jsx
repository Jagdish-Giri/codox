import React, { useState } from 'react'
import './Pages.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add your form submission logic here
    alert('Thank you for contacting us! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className='page-container'>
      <div className='page-hero'>
        <h1>Contact <span className='highlight'>Us</span></h1>
        <p>We'd love to hear from you</p>
      </div>
      
      <div className='page-content'>
        <div className='contact-wrapper'>
          <div className='contact-info'>
            <h2>Get In Touch</h2>
            <p>Have a question or want to learn more about our courses? Fill out the form and we'll respond within 24 hours.</p>
            
            <div className='contact-details'>
              <div className='contact-item'>
                <span className='contact-icon'>📍</span>
                <div>
                  <h4>Location</h4>
                  <p>123 Main Street, City, Country</p>
                </div>
              </div>
              
              <div className='contact-item'>
                <span className='contact-icon'>📧</span>
                <div>
                  <h4>Email</h4>
                  <p>info@codox.com</p>
                </div>
              </div>
              
              <div className='contact-item'>
                <span className='contact-icon'>📞</span>
                <div>
                  <h4>Phone</h4>
                  <p>+1 (123) 456-7890</p>
                </div>
              </div>
              
              <div className='contact-item'>
                <span className='contact-icon'>⏰</span>
                <div>
                  <h4>Working Hours</h4>
                  <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <form className='contact-form' onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                placeholder='Your name'
              />
            </div>

            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                placeholder='your.email@example.com'
              />
            </div>

            <div className='form-group'>
              <label htmlFor='subject'>Subject</label>
              <input
                type='text'
                id='subject'
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder='What is this about?'
              />
            </div>

            <div className='form-group'>
              <label htmlFor='message'>Message</label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
                rows='5'
                placeholder='Tell us more...'
              />
            </div>

            <button type='submit' className='submit-btn'>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
