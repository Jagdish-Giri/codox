import React from 'react'
import './Pages.css'

const Terms = () => {
  return (
    <div className='page-container'>
      <div className='page-hero'>
        <h1>Terms & <span className='highlight'>Conditions</span></h1>
        <p>Please read these terms carefully before using our services</p>
      </div>
      
      <div className='page-content legal-content'>
        <p className='last-updated'>Last Updated: March 2, 2026</p>

        <section className='content-section'>
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using Codox's services, you accept and agree to be bound by the terms and conditions of this agreement. If you do not agree to these terms, please do not use our services.</p>
        </section>

        <section className='content-section'>
          <h2>2. Use of Services</h2>
          <p>You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
          <ul>
            <li>Use the services in any way that violates any applicable law or regulation</li>
            <li>Share your account credentials with others</li>
            <li>Distribute or share course content without authorization</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Use automated systems to access our platform</li>
          </ul>
        </section>

        <section className='content-section'>
          <h2>3. Course Access and Enrollment</h2>
          <p>Upon enrollment in a course, you will be granted access to course materials. This access is non-transferable and for your personal use only. We reserve the right to:</p>
          <ul>
            <li>Modify or discontinue courses at any time</li>
            <li>Update course content as needed</li>
            <li>Revoke access if terms are violated</li>
          </ul>
        </section>

        <section className='content-section'>
          <h2>4. Payment and Refunds</h2>
          <p>All payments are processed securely through our payment partners. We offer a 30-day money-back guarantee on all paid courses. Refund requests must be submitted within 30 days of purchase.</p>
        </section>

        <section className='content-section'>
          <h2>5. Intellectual Property</h2>
          <p>All content on Codox, including but not limited to text, graphics, logos, videos, and software, is the property of Codox and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission.</p>
        </section>

        <section className='content-section'>
          <h2>6. User Content</h2>
          <p>You retain ownership of any content you submit to our platform (posts, comments, projects). However, by submitting content, you grant us a worldwide, non-exclusive license to use, display, and distribute your content on our platform.</p>
        </section>

        <section className='content-section'>
          <h2>7. Disclaimer of Warranties</h2>
          <p>Our services are provided "as is" without warranties of any kind, either express or implied. We do not guarantee that our services will be uninterrupted, secure, or error-free.</p>
        </section>

        <section className='content-section'>
          <h2>8. Limitation of Liability</h2>
          <p>Codox shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.</p>
        </section>

        <section className='content-section'>
          <h2>9. Modifications to Terms</h2>
          <p>We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our platform. Continued use of our services after changes constitutes acceptance of the new terms.</p>
        </section>

        <section className='content-section'>
          <h2>10. Contact Information</h2>
          <p>For questions about these Terms and Conditions, please contact us at:</p>
          <p><strong>Email:</strong> legal@codox.com</p>
          <p><strong>Address:</strong> 123 Main Street, City, Country</p>
        </section>
      </div>
    </div>
  )
}

export default Terms
