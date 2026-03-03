import React from 'react'
import './Pages.css'
import Carousel from '../components/Carousel/Carousel'
import Plans from '../components/Plans/Plans'

const Courses = () => {
  const coursesList = [
    {
      id: 1,
      title: "Advanced React Patterns",
      instructor: "Sarah Chen",
      image: "🎨",
      level: "Advanced",
      duration: "24 hours"
    },
    {
      id: 2,
      title: "Next.js & Modern Web Dev",
      instructor: "Alex Rodriguez",
      image: "⚡",
      level: "Intermediate",
      duration: "32 hours"
    },
    {
      id: 3,
      title: "TypeScript Mastery",
      instructor: "Jordan Lee",
      image: "📘",
      level: "Intermediate",
      duration: "28 hours"
    },
    {
      id: 4,
      title: "Node.js Backend API",
      instructor: "Mike Johnson",
      image: "🔧",
      level: "Intermediate",
      duration: "30 hours"
    },
    {
      id: 5,
      title: "Database Design & SQL",
      instructor: "Emma Watson",
      image: "🗄️",
      level: "Beginner",
      duration: "20 hours"
    },
    {
      id: 6,
      title: "Full Stack MERN",
      instructor: "David Kim",
      image: "🚀",
      level: "Advanced",
      duration: "48 hours"
    }
  ];

  return (
    <div className='courses-page'>
      <div className='courses-hero'>
        <h1>Learn from <span className='highlight'>Experts</span></h1>
        <p>Master the tools and skills used by industry leaders</p>
      </div>
      
      <div className='courses-content'>
        <section className='courses-grid-section'>
          <h2>Featured Courses</h2>
          <div className='courses-grid'>
            {coursesList.map(course => (
              <div key={course.id} className='course-card'>
                <div className='course-image'>{course.image}</div>
                <div className='course-details'>
                  <h3>{course.title}</h3>
                  <div className='course-meta'>
                    <span className='course-level'>{course.level}</span>
                    <span className='course-duration'>{course.duration}</span>
                  </div>
                  <div className='course-instructor'>
                    <p>By {course.instructor}</p>
                  </div>
                  <button className='course-btn'>View Course</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className='why-choose-section'>
          <h2>Why Choose Our Courses</h2>
          <div className='features-list'>
            <div className='feature'>
              <span className='feature-icon'>✨</span>
              <h4>Expert Instructors</h4>
              <p>Learn from industry professionals with years of experience</p>
            </div>
            <div className='feature'>
              <span className='feature-icon'>🎯</span>
              <h4>Hands-on Projects</h4>
              <p>Build real-world applications with best practices</p>
            </div>
            <div className='feature'>
              <span className='feature-icon'>🌍</span>
              <h4>Lifetime Access</h4>
              <p>Access course materials forever with regular updates</p>
            </div>
            <div className='feature'>
              <span className='feature-icon'>📜</span>
              <h4>Certification</h4>
              <p>Get recognized certificates upon course completion</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Courses
