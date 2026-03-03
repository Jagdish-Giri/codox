import React, { useState } from 'react'
import './Pages.css'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors = {}
    
    if (!email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Invalid email format'
    }
    
    return newErrors
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
    console.log('Password reset email sent to:', email)
    
    setTimeout(() => {
      setEmail('')
      setSubmitted(false)
    }, 2000)
  }

  return (
    <div className='page-container'>
      <div className='page-hero'>
        <h1>Forgot Password?</h1>
        <p>No worries, we'll help you reset it</p>
      </div>

      <div className='page-content'>
        <div className='forgot-password-wrapper'>
          <div className='forgot-password-box'>
            <h2>Reset Your Password</h2>
            <p className='forgot-password-subtitle'>
              Enter your email address and we'll send you a link to reset your password
            </p>

            {submitted && (
              <div className='success-message'>
                ✓ Reset link sent! Check your email for instructions.
              </div>
            )}

            <form onSubmit={handleSubmit} className='forgot-password-form'>
              {/* Email */}
              <div className='form-group'>
                <label htmlFor='email'>Email Address</label>
                <div className='input-wrapper'>
                  <MdEmail className='input-icon' />
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='your.email@example.com'
                    className={errors.email ? 'error' : ''}
                  />
                </div>
                {errors.email && <span className='error-text'>{errors.email}</span>}
              </div>

              {/* Submit Button */}
              <button type='submit' className='submit-btn'>Send Reset Link</button>

              {/* Back to Login */}
              <p className='back-to-login'>
                Remember your password? <Link to='/login'>Sign In</Link>
              </p>
            </form>
          </div>

          <div className='forgot-password-info'>
            <h3>Password Reset Process</h3>
            <div className='info-steps'>
              <div className='step'>
                <div className='step-number'>1</div>
                <div className='step-content'>
                  <h4>Enter Your Email</h4>
                  <p>Provide the email address associated with your account</p>
                </div>
              </div>
              <div className='step'>
                <div className='step-number'>2</div>
                <div className='step-content'>
                  <h4>Check Your Email</h4>
                  <p>We'll send you a secure link to reset your password</p>
                </div>
              </div>
              <div className='step'>
                <div className='step-number'>3</div>
                <div className='step-content'>
                  <h4>Create New Password</h4>
                  <p>Click the link and set a new password for your account</p>
                </div>
              </div>
              <div className='step'>
                <div className='step-number'>4</div>
                <div className='step-content'>
                  <h4>Login Again</h4>
                  <p>Sign in with your new password to access your account</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
