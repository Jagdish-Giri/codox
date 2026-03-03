import React from 'react'
import './Pages.css'
import Carousel from '../components/Carousel/Carousel'
import Plans from '../components/Plans/Plans'
import { IoSearch } from "react-icons/io5";

const Courses = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedFilter, setSelectedFilter] = React.useState('All');

  const coursesList = [
    {
      id: 1,
      title: "Advanced React Patterns",
      instructor: "Sarah Chen",
      level: "Advanced",
      duration: "24 hours",
      category: "Frontend",
      description: "Master advanced React patterns and best practices"
    },
    {
      id: 2,
      title: "Next.js & Modern Web Dev",
      instructor: "Alex Rodriguez",
      level: "Intermediate",
      duration: "32 hours",
      category: "Frontend",
      description: "Build production-ready web applications with Next.js"
    },
    {
      id: 3,
      title: "TypeScript Mastery",
      instructor: "Jordan Lee",
      level: "Intermediate",
      duration: "28 hours",
      category: "Frontend",
      description: "Learn TypeScript to write safer and better code"
    },
    {
      id: 4,
      title: "Node.js Backend API",
      instructor: "Mike Johnson",
      level: "Intermediate",
      duration: "30 hours",
      category: "Backend",
      description: "Build scalable REST APIs with Node.js and Express"
    },
    {
      id: 5,
      title: "Database Design & SQL",
      instructor: "Emma Watson",
      level: "Beginner",
      duration: "20 hours",
      category: "Backend",
      description: "Master database design and SQL fundamentals"
    },
    {
      id: 6,
      title: "Full Stack MERN",
      instructor: "David Kim",
      level: "Advanced",
      duration: "48 hours",
      category: "FullStack",
      description: "Build complete web applications using MERN stack"
    },
    {
      id: 7,
      title: "Vue.js Fundamentals",
      instructor: "Lisa Anderson",
      level: "Beginner",
      duration: "22 hours",
      category: "Frontend",
      description: "Learn Vue.js from scratch and build interactive UIs"
    },
    {
      id: 8,
      title: "Python for Data Science",
      instructor: "James Wilson",
      level: "Intermediate",
      duration: "40 hours",
      category: "Backend",
      description: "Use Python for data analysis and machine learning"
    },
    {
      id: 9,
      title: "AWS Cloud Deployment",
      instructor: "Robert Brown",
      level: "Advanced",
      duration: "35 hours",
      category: "FullStack",
      description: "Deploy and scale applications on AWS cloud"
    },
    {
      id: 10,
      title: "GraphQL API Development",
      instructor: "Emily Taylor",
      level: "Advanced",
      duration: "26 hours",
      category: "Backend",
      description: "Build modern APIs with GraphQL and Apollo Server"
    },
    {
      id: 11,
      title: "React Native Mobile App",
      instructor: "Marcus Johnson",
      level: "Intermediate",
      duration: "38 hours",
      category: "Frontend",
      description: "Create native mobile apps using React Native"
    },
    {
      id: 12,
      title: "DevOps & Docker",
      instructor: "Priya Sharma",
      level: "Advanced",
      duration: "32 hours",
      category: "FullStack",
      description: "Master containerization and DevOps practices"
    }
  ];

  const filteredCourses = coursesList.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'All' || course.category === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className='courses-page'>
      <div className='courses-hero'>
        <h1 className='courses-hero-title'>Our Courses</h1>
        <p className='courses-hero-subtitle'>Master the tools and skills used by industry leaders</p>
      </div>
      
      <div className='courses-content'>
        {/* Search and Filter Section */}
        <div className='courses-search-section'>
          <div className='search-bar'>
            <input
              type='text'
              placeholder='Search courses or instructors...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='search-input'
            />
            <span className='search-icon'><IoSearch /></span>
          </div>
          
          <div className='filter-buttons'>
            {['All', 'Frontend', 'Backend', 'FullStack'].map(filter => (
              <button
                key={filter}
                className={`filter-btn ${selectedFilter === filter ? 'active' : ''}`}
                onClick={() => setSelectedFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <section className='courses-grid-section'>
          <h2>Featured Courses</h2>
          <div className='courses-grid'>
            {filteredCourses.length > 0 ? (
              filteredCourses.map(course => (
                <div key={course.id} className='course-card'>
                  <div className='course-level-badge'>{course.level}</div>
                  <div className='course-header'>
                    <h3>{course.title}</h3>
                  </div>
                  <p className='course-description'>{course.description}</p>
                  <div className='course-info'>
                    <span className='course-duration'>⏱️ {course.duration}</span>
                    <span className='course-category'>{course.category}</span>
                  </div>
                  <div className='course-instructor-info'>
                    <p>By <strong>{course.instructor}</strong></p>
                  </div>
                  <button className='course-btn'>Enroll Now</button>
                </div>
              ))
            ) : (
              <div className='no-courses'>
                <p>No courses found. Try a different search or filter.</p>
              </div>
            )}
          </div>
        </section>

        {/* Why Choose Section */}
        <section className='why-choose-section'>
          <h2>Why Our Courses</h2>
          <div className='why-choose-grid'>
            <div className='why-item'>
              <h4>Expert Instructors</h4>
              <p>Learn from industry professionals with years of real-world experience</p>
            </div>
            <div className='why-item'>
              <h4>Hands-on Projects</h4>
              <p>Build real-world applications with best practices and modern tools</p>
            </div>
            <div className='why-item'>
              <h4>Lifetime Access</h4>
              <p>Access course materials forever with regular updates</p>
            </div>
            <div className='why-item'>
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
