import React, { useState } from 'react'
import './Pages.css'
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }
    
    return newErrors
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    setErrors({})
    setSubmitted(true)
    console.log('Form submitted:', formData)
    
    setTimeout(() => {
      setFormData({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
      setSubmitted(false)
    }, 2000)
  }

  return (
    <div className='page-container'>
      <div className='page-hero'>
        <h1>Join Codox</h1>
        <p>Start your coding journey with us today</p>
      </div>

      <div className='page-content'>
        <div className='signup-wrapper'>
          <div className='signup-box'>
            <h2>Create Your Account</h2>
            <p className='signup-subtitle'>Sign up to access exclusive courses and resources</p>

            {submitted && (
              <div className='success-message'>
                ✓ Account created successfully! Redirecting...
              </div>
            )}

            <form onSubmit={handleSubmit} className='signup-form'>
              {/* Full Name */}
              <div className='form-group'>
                <label htmlFor='fullName'>Full Name</label>
                <div className='input-wrapper'>
                  <MdPerson className='input-icon' />
                  <input
                    type='text'
                    id='fullName'
                    name='fullName'
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder='Enter your full name'
                    className={errors.fullName ? 'error' : ''}
                  />
                </div>
                {errors.fullName && <span className='error-text'>{errors.fullName}</span>}
              </div>

              {/* Email */}
              <div className='form-group'>
                <label htmlFor='email'>Email Address</label>
                <div className='input-wrapper'>
                  <MdEmail className='input-icon' />
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='your.email@example.com'
                    className={errors.email ? 'error' : ''}
                  />
                </div>
                {errors.email && <span className='error-text'>{errors.email}</span>}
              </div>

              {/* Password */}
              <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <div className='input-wrapper'>
                  <MdLock className='input-icon' />
                  <input
                    type='password'
                    id='password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    placeholder='Create a strong password'
                    className={errors.password ? 'error' : ''}
                  />
                </div>
                {errors.password && <span className='error-text'>{errors.password}</span>}
              </div>

              {/* Confirm Password */}
              <div className='form-group'>
                <label htmlFor='confirmPassword'>Confirm Password</label>
                <div className='input-wrapper'>
                  <MdLock className='input-icon' />
                  <input
                    type='password'
                    id='confirmPassword'
                    name='confirmPassword'
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder='Re-enter your password'
                    className={errors.confirmPassword ? 'error' : ''}
                  />
                </div>
                {errors.confirmPassword && <span className='error-text'>{errors.confirmPassword}</span>}
              </div>

              {/* Terms */}
              <div className='terms-checkbox'>
                <input type='checkbox' id='terms' required />
                <label htmlFor='terms'>
                  I agree to the <a href='/terms'>Terms & Conditions</a> and <a href='/privacy'>Privacy Policy</a>
                </label>
              </div>

              {/* Submit Button */}
              <button type='submit' className='submit-btn'>Create Account</button>

              {/* Login Link */}
              <p className='login-link'>
                Already have an account? <a href='/'>Sign In</a>
              </p>
            </form>
          </div>

          <div className='signup-features'>
            <h3>Why Join Codox?</h3>
            <div className='features-list'>
              <div className='feature-item'>
                <div className='feature-icon'>✓</div>
                <div className='feature-text'>
                  <h4>Access Exclusive Courses</h4>
                  <p>Learn from industry experts with structured curriculum</p>
                </div>
              </div>
              <div className='feature-item'>
                <div className='feature-icon'>✓</div>
                <div className='feature-text'>
                  <h4>Personalized Learning Path</h4>
                  <p>Get recommendations tailored to your goals and skill level</p>
                </div>
              </div>
              <div className='feature-item'>
                <div className='feature-icon'>✓</div>
                <div className='feature-text'>
                  <h4>Lifetime Updates</h4>
                  <p>Stay updated with latest technologies and best practices</p>
                </div>
              </div>
              <div className='feature-item'>
                <div className='feature-icon'>✓</div>
                <div className='feature-text'>
                  <h4>Community Support</h4>
                  <p>Connect with other learners and get help when you need it</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
