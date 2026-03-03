import React, { useState } from 'react'
import './Pages.css'
import { MdEmail, MdLock } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  const validateForm = () => {
    const newErrors = {}
    
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
        email: '',
        password: ''
      })
      setSubmitted(false)
    }, 2000)
  }

  return (
    <div className='page-container'>
      <div className='page-hero'>
        <h1>Welcome Back</h1>
        <p>Sign in to access your learning dashboard</p>
      </div>

      <div className='page-content'>
        <div className='login-wrapper'>
          <div className='login-box'>
            <h2>Sign In</h2>
            <p className='login-subtitle'>Enter your credentials to access Codox</p>

            {submitted && (
              <div className='success-message'>
                ✓ Logged in successfully! Redirecting...
              </div>
            )}

            <form onSubmit={handleSubmit} className='login-form'>
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
                    placeholder='Enter your password'
                    className={errors.password ? 'error' : ''}
                  />
                </div>
                {errors.password && <span className='error-text'>{errors.password}</span>}
              </div>

              {/* Remember Me & Forgot Password */}
              <div className='login-options'>
                <div className='remember-me'>
                  <input 
                    type='checkbox' 
                    id='remember' 
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label htmlFor='remember'>Remember me</label>
                </div>
                <Link to='/forgot-password' className='forgot-password'>Forgot Password?</Link>
              </div>

              {/* Submit Button */}
              <button type='submit' className='submit-btn'>Sign In</button>

              {/* Signup Link */}
              <p className='signup-link'>
                Don't have an account? <Link to='/signup'>Sign Up</Link>
              </p>
            </form>
          </div>

          <div className='login-features'>
            <h3>Why Choose Codox?</h3>
            <div className='features-list'>
              <div className='feature-item'>
                <div className='feature-icon'>✓</div>
                <div className='feature-text'>
                  <h4>Learn at Your Pace</h4>
                  <p>Access courses anytime, anywhere on any device</p>
                </div>
              </div>
              <div className='feature-item'>
                <div className='feature-icon'>✓</div>
                <div className='feature-text'>
                  <h4>Expert Instructors</h4>
                  <p>Learn from industry professionals with years of experience</p>
                </div>
              </div>
              <div className='feature-item'>
                <div className='feature-icon'>✓</div>
                <div className='feature-text'>
                  <h4>Hands-on Projects</h4>
                  <p>Build real-world projects to strengthen your portfolio</p>
                </div>
              </div>
              <div className='feature-item'>
                <div className='feature-icon'>✓</div>
                <div className='feature-text'>
                  <h4>Certificates</h4>
                  <p>Earn industry-recognized certificates upon completion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
