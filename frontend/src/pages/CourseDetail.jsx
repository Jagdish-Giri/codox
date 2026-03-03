import React from 'react'
import './Pages.css'
import { Link, useParams } from 'react-router-dom'
import { FaArrowLeft, FaCheckCircle, FaProjectDiagram, FaClock, FaRocket, FaBolt, FaShapes, FaNodeJs, FaDatabase, FaFire, FaUserTie, FaChartBar, FaTrophy } from 'react-icons/fa'

const CourseDetail = () => {
  const { id } = useParams()

  const coursesList = [
    {
      id: 1,
      title: "Advanced React Patterns",
      instructor: "Sarah Chen",
      level: "Advanced",
      duration: "24 hours",
      category: "Frontend",
      description: "Master advanced React patterns and architectural best practices",
      icon: FaRocket,
      topics: [
        "Higher Order Components (HOC)",
        "Render Props Pattern",
        "React Hooks & Custom Hooks",
        "Context API Advanced Usage",
        "Performance Optimization",
        "Code Splitting & Lazy Loading",
        "Error Boundaries",
        "Compound Components Pattern"
      ],
      projects: [
        "Build a Complex State Management System",
        "Create a Reusable Component Library",
        "Performance Optimize a Large Application",
        "Implement Advanced Routing System"
      ],
      prerequisites: [
        "Solid understanding of React basics",
        "JavaScript ES6+ knowledge",
        "Experience with functional components"
      ],
      learnings: [
        "Write scalable and maintainable React code",
        "Optimize performance for large applications",
        "Build professional-grade component libraries",
        "Implement complex state management patterns"
      ]
    },
    {
      id: 2,
      title: "Next.js & Modern Web Dev",
      instructor: "Alex Rodriguez",
      level: "Intermediate",
      duration: "32 hours",
      category: "Frontend",
      description: "Build production-ready full-stack web applications with Next.js",
      icon: FaBolt,
      topics: [
        "Pages & Routing in Next.js",
        "Server-Side Rendering (SSR)",
        "Static Site Generation (SSG)",
        "API Routes & Backend Integration",
        "Authentication & Authorization",
        "Database Integration",
        "Deployment & Optimization",
        "Image Optimization & Performance"
      ],
      projects: [
        "Build a Full-Stack Blog Application",
        "Create an E-commerce Platform",
        "Develop a Real-time Chat Application",
        "Build a Content Management System"
      ],
      prerequisites: [
        "React fundamentals knowledge",
        "Node.js basics",
        "Understanding of HTTP & APIs"
      ],
      learnings: [
        "Master Next.js framework",
        "Build full-stack applications",
        "Deploy to production",
        "Optimize web performance"
      ]
    },
    {
      id: 3,
      title: "TypeScript Mastery",
      instructor: "Jordan Lee",
      level: "Intermediate",
      duration: "28 hours",
      category: "Frontend",
      description: "Learn TypeScript to write safer and better type-safe code",
      icon: FaShapes,
      topics: [
        "TypeScript Basics & Types",
        "Interfaces & Type Aliases",
        "Generics & Advanced Types",
        "Decorators & Metadata",
        "Modules & Namespaces",
        "Type Guards & Type Narrowing",
        "Utility Types & Conditional Types",
        "Working with APIs & 3rd Party Libraries"
      ],
      projects: [
        "Build a Type-Safe REST Client",
        "Create a TypeScript Utility Library",
        "Develop a Configuration Manager",
        "Build a Data Validation System"
      ],
      prerequisites: [
        "Strong JavaScript knowledge",
        "Object-oriented programming concepts",
        "Some JavaScript development experience"
      ],
      learnings: [
        "Write type-safe code",
        "Catch errors at compile time",
        "Improve code readability",
        "Build maintainable applications"
      ]
    },
    {
      id: 4,
      title: "Node.js Backend API",
      instructor: "Mike Johnson",
      level: "Intermediate",
      duration: "30 hours",
      category: "Backend",
      description: "Build scalable REST APIs with Node.js and Express framework",
      icon: FaNodeJs,
      topics: [
        "Node.js Fundamentals",
        "Express Framework",
        "Routing & Middleware",
        "Request & Response Handling",
        "Error Handling & Validation",
        "Authentication & JWT",
        "Database Integration",
        "Testing & Debugging"
      ],
      projects: [
        "Build a RESTful Blog API",
        "Create a Social Media Backend",
        "Develop an E-commerce API",
        "Build a Real-time Notification System"
      ],
      prerequisites: [
        "JavaScript fundamentals",
        "HTTP & RESTful concepts",
        "Basic database knowledge"
      ],
      learnings: [
        "Build production-ready APIs",
        "Implement authentication",
        "Handle database operations",
        "Deploy Node.js applications"
      ]
    },
    {
      id: 5,
      title: "Database Design & SQL",
      instructor: "Emma Watson",
      level: "Beginner",
      duration: "20 hours",
      category: "Backend",
      description: "Master database design and SQL fundamentals for any application",
      icon: FaDatabase,
      topics: [
        "Database Fundamentals",
        "Relational Model & Schema Design",
        "SQL Basics & Queries",
        "JOINs & Complex Queries",
        "Indexing & Performance",
        "Transactions & ACID",
        "Normalization & Best Practices",
        "Backup & Security"
      ],
      projects: [
        "Design a Complex Database Schema",
        "Optimize Slow Queries",
        "Build a Data Analysis Tool",
        "Create a Backup & Recovery System"
      ],
      prerequisites: [
        "Basic programming knowledge",
        "Understanding of data structures",
        "Logic and problem-solving skills"
      ],
      learnings: [
        "Design efficient databases",
        "Write optimized queries",
        "Manage data integrity",
        "Scale database systems"
      ]
    },
    {
      id: 6,
      title: "Full Stack MERN",
      instructor: "David Kim",
      level: "Advanced",
      duration: "48 hours",
      category: "FullStack",
      description: "Build complete web applications using MERN stack (MongoDB, Express, React, Node.js)",
      icon: FaFire,
      topics: [
        "MERN Stack Fundamentals",
        "Frontend with React",
        "Backend with Node.js & Express",
        "MongoDB Integration",
        "RESTful API Design",
        "Authentication & Authorization",
        "Real-time Features with WebSockets",
        "Deployment & DevOps",
        "Performance Optimization",
        "Testing & CI/CD"
      ],
      projects: [
        "Build a Full-Stack Social Network",
        "Create an E-commerce Platform",
        "Develop a Project Management Tool",
        "Build a Real-time Collaboration App"
      ],
      prerequisites: [
        "React fundamentals",
        "Node.js basics",
        "JavaScript ES6+",
        "HTTP & RESTful concepts",
        "Database basics"
      ],
      learnings: [
        "Build complete full-stack applications",
        "Integrate frontend and backend",
        "Deploy scalable applications",
        "Implement modern web features"
      ]
    }
  ]

  const course = coursesList.find(c => c.id === parseInt(id))

  if (!course) {
    return (
      <div className='course-detail-page'>
        <div className='course-not-found'>
          <h2>Course Not Found</h2>
          <Link to='/courses' className='back-link'>Back to Courses</Link>
        </div>
      </div>
    )
  }

  return (
    <div className='course-detail-page'>
      <div className='course-detail-hero'>
        <Link to='/courses' className='back-link'><FaArrowLeft /> Back to Courses</Link>
        <div className='course-detail-header'>
          <div className='course-icon'>
            {React.createElement(course.icon)}
          </div>
          <div>
            <h1>{course.title}</h1>
            <p className='course-detail-subtitle'>{course.description}</p>
            <div className='course-detail-meta'>
              <span><FaUserTie /> {course.instructor}</span>
              <span><FaChartBar /> {course.level}</span>
              <span><FaClock /> {course.duration}</span>
              <span><FaTrophy /> {course.category}</span>
            </div>
          </div>
        </div>
      </div>

      <div className='course-detail-content'>
        <div className='course-detail-main'>
          {/* What You'll Learn */}
          <section className='detail-section'>
            <h2>What You'll Learn</h2>
            <div className='learnings-grid'>
              {course.learnings.map((learning, idx) => (
                <div key={idx} className='learning-item'>
                  <FaCheckCircle className='check-icon' />
                  <p>{learning}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Course Topics */}
          <section className='detail-section'>
            <h2>Course Topics & Curriculum</h2>
            <div className='topics-list'>
              {course.topics.map((topic, idx) => (
                <div key={idx} className='topic-item'>
                  <span className='topic-number'>Module {idx + 1}</span>
                  <h4>{topic}</h4>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className='detail-section'>
            <h2>Hands-On Projects</h2>
            <div className='projects-grid'>
              {course.projects.map((project, idx) => (
                <div key={idx} className='project-card'>
                  <FaProjectDiagram className='project-icon' />
                  <h4>Project {idx + 1}</h4>
                  <p>{project}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Prerequisites */}
          <section className='detail-section'>
            <h2>Prerequisites</h2>
            <div className='prerequisites-list'>
              {course.prerequisites.map((prereq, idx) => (
                <div key={idx} className='prereq-item'>
                  <span className='prereq-bullet'>•</span>
                  <p>{prereq}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className='course-detail-sidebar'>
          <div className='course-card-sidebar'>
            <h3>Course Details</h3>
            <div className='sidebar-info'>
              <div className='info-row'>
                <span className='info-label'>Level</span>
                <span className='info-value'>{course.level}</span>
              </div>
              <div className='info-row'>
                <span className='info-label'>Duration</span>
                <span className='info-value'>{course.duration}</span>
              </div>
              <div className='info-row'>
                <span className='info-label'>Category</span>
                <span className='info-value'>{course.category}</span>
              </div>
              <div className='info-row'>
                <span className='info-label'>Instructor</span>
                <span className='info-value'>{course.instructor}</span>
              </div>
            </div>
            <button className='enroll-btn'>Enroll Now</button>
            <Link to='/courses' className='back-to-courses'>Back to All Courses</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetail
