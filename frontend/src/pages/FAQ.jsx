import React, { useState } from 'react'
import './Pages.css'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "How do I get started with Codox?",
      answer: "Simply sign up for a free account, browse our course catalog, and enroll in any course that interests you. You can start learning immediately after enrollment."
    },
    {
      question: "Do I get a certificate after completing a course?",
      answer: "Yes! Upon successful completion of any course, you'll receive a certificate of completion that you can add to your resume and LinkedIn profile."
    },
    {
      question: "Can I access courses on mobile devices?",
      answer: "Absolutely! Our platform is fully responsive and works seamlessly on all devices - desktop, tablet, and mobile phones."
    },
    {
      question: "What if I need help with a lesson?",
      answer: "We offer 24/7 community support through our forums, and premium members get access to 1-on-1 mentorship sessions with instructors."
    },
    {
      question: "Are there any prerequisites for the courses?",
      answer: "It depends on the course. Beginner courses have no prerequisites, while advanced courses may require basic programming knowledge. Check the course details for specific requirements."
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer: "Yes, we offer a 30-day money-back guarantee on all paid courses. If you're not satisfied, contact us within 30 days for a full refund."
    },
    {
      question: "How long do I have access to a course?",
      answer: "Once you enroll in a course, you have lifetime access to all course materials, including future updates and additions."
    },
    {
      question: "Do you offer group discounts?",
      answer: "Yes! We offer special pricing for teams and organizations. Contact us at info@codox.com for group enrollment options."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className='page-container'>
      <div className='page-hero'>
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about Codox</p>
      </div>
      
      <div className='page-content'>
        <div className='faq-container'>
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'active' : ''}`}>
              <div className='faq-question' onClick={() => toggleFAQ(index)}>
                <h3>{faq.question}</h3>
                <span className='faq-icon'>{openIndex === index ? '−' : '+'}</span>
              </div>
              {openIndex === index && (
                <div className='faq-answer'>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <section className='content-section contact-cta'>
          <h2>Still Have Questions?</h2>
          <p>Can't find the answer you're looking for? Our support team is here to help!</p>
          <a href='/contact' className='cta-button'>Contact Support</a>
        </section>
      </div>
    </div>
  )
}

export default FAQ
