import React from 'react'
import './Pages.css'
import Carousel from '../components/Carousel/Carousel'
import Plans from '../components/Plans/Plans'
import { IoSearch } from "react-icons/io5"
import { Link } from 'react-router-dom'

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
      category: "Frontend"
    },
    {
      id: 2,
      title: "Next.js & Modern Web Dev",
      instructor: "Alex Rodriguez",
      level: "Intermediate",
      duration: "32 hours",
      category: "Frontend"
    },
    {
      id: 3,
      title: "TypeScript Mastery",
      instructor: "Jordan Lee",
      level: "Intermediate",
      duration: "28 hours",
      category: "Frontend"
    },
    {
      id: 4,
      title: "Node.js Backend API",
      instructor: "Mike Johnson",
      level: "Intermediate",
      duration: "30 hours",
      category: "Backend"
    },
    {
      id: 5,
      title: "Database Design & SQL",
      instructor: "Emma Watson",
      level: "Beginner",
      duration: "20 hours",
      category: "Backend"
    },
    {
      id: 6,
      title: "Full Stack MERN",
      instructor: "David Kim",
      level: "Advanced",
      duration: "48 hours",
      category: "FullStack"
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
            {filteredCourses.map(course => (
              <div key={course.id} className='course-card'>
                <div className='course-details'>
                  <h3>{course.title}</h3>
                  <div className='course-meta'>
                    <span className='course-level'>{course.level}</span>
                    <span className='course-duration'>{course.duration}</span>
                  </div>
                  <div className='course-instructor'>
                    <p>By {course.instructor}</p>
                  </div>
                  <Link to={`/course/${course.id}`} className='course-btn'>View Course</Link>
                </div>
              </div>
            ))}
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
