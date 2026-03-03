import React from 'react'
import './Pages.css'

const PrivacyPolicy = () => {
  return (
    <div className='page-container'>
      <div className='page-hero'>
        <h1>Privacy Policy</h1>
        <p>How we protect and use your information</p>
      </div>
      
      <div className='page-content legal-content'>
        <p className='last-updated'>Last Updated: March 2, 2026</p>

        <section className='content-section'>
          <h2>1. Information We Collect</h2>
          <p>We collect information that you provide directly to us, including:</p>
          <ul>
            <li>Name, email address, and contact information when you create an account</li>
            <li>Payment information when you purchase courses</li>
            <li>Course progress and performance data</li>
            <li>Communications you send to us</li>
            <li>Information from social media accounts if you choose to connect them</li>
          </ul>
        </section>

        <section className='content-section'>
          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and send related information</li>
            <li>Send you technical notices and support messages</li>
            <li>Respond to your comments and questions</li>
            <li>Provide personalized learning recommendations</li>
            <li>Monitor and analyze trends and usage</li>
          </ul>
        </section>

        <section className='content-section'>
          <h2>3. Information Sharing</h2>
          <p>We do not sell or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
          <ul>
            <li>With your consent</li>
            <li>With service providers who help us operate our platform</li>
            <li>To comply with legal obligations</li>
            <li>To protect our rights and prevent fraud</li>
          </ul>
        </section>

        <section className='content-section'>
          <h2>4. Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>
        </section>

        <section className='content-section'>
          <h2>5. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access and receive a copy of your personal data</li>
            <li>Rectify inaccurate personal data</li>
            <li>Request deletion of your personal data</li>
            <li>Object to processing of your personal data</li>
            <li>Withdraw consent at any time</li>
          </ul>
        </section>

        <section className='content-section'>
          <h2>6. Cookies</h2>
          <p>We use cookies and similar tracking technologies to track activity on our platform and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
        </section>

        <section className='content-section'>
          <h2>7. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p><strong>Email:</strong> privacy@codox.com</p>
          <p><strong>Phone:</strong> +1 (123) 456-7890</p>
        </section>
      </div>
    </div>
  )
}

export default PrivacyPolicy
