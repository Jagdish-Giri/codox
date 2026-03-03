import React, { useState } from 'react'
import './Pages.css'
import { 
  FaStar, FaTrophy, FaFire, FaMedal, FaLightbulb, FaBolt,
  FaRocket, FaCode, FaShieldAlt, FaDatabase, FaMobile, FaChartLine,
  FaLock, FaCheckCircle, FaClock, FaUsers, FaAward, FaGem,
  FaHeartbeat, FaSpinner, FaCogs
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Paths = () => {
  const [selectedPath, setSelectedPath] = useState(null)

  const learningPaths = [
    {
      id: 1,
      title: 'Frontend Warrior',
      description: 'Master React, JavaScript, and modern web development',
      icon: FaCode,
      difficulty: 'Intermediate',
      courses: 8,
      xp: 2500,
      currentXP: 1850,
      level: 12,
      maxLevel: 20,
      stars: 4.8,
      reviews: 340,
      badge: FaLightbulb,
      achievements: ['React Pro', 'CSS Master', 'JS Expert'],
      color: '#ffffff',
      accentColor: '#00ff48'
    },
    {
      id: 2,
      title: 'Backend Legend',
      description: 'Build scalable APIs with Node.js, Express, and databases',
      icon: FaDatabase,
      difficulty: 'Advanced',
      courses: 10,
      xp: 3200,
      currentXP: 2100,
      level: 14,
      maxLevel: 25,
      stars: 4.9,
      reviews: 280,
      badge: FaShieldAlt,
      achievements: ['API Design', 'DB Expert', 'System Design'],
      color: '#ffffff',
      accentColor: '#00ff48'
    },
    {
      id: 3,
      title: 'Full Stack Master',
      description: 'Become a complete developer with MERN stack expertise',
      icon: FaRocket,
      difficulty: 'Advanced',
      courses: 15,
      xp: 5000,
      currentXP: 3500,
      level: 18,
      maxLevel: 30,
      stars: 4.9,
      reviews: 520,
      badge: FaAward,
      achievements: ['Full Stack Pro', 'Architecture', 'DevOps'],
      color: '#ffffff',
      accentColor: '#00ff48'
    },
    {
      id: 4,
      title: 'Mobile Ninja',
      description: 'Create amazing mobile apps with React Native',
      icon: FaMobile,
      difficulty: 'Intermediate',
      courses: 7,
      xp: 2000,
      currentXP: 1200,
      level: 10,
      maxLevel: 18,
      stars: 4.7,
      reviews: 195,
      badge: FaFire,
      achievements: ['React Native', 'Performance', 'UI/UX'],
      color: '#ffffff',
      accentColor: '#00ff48'
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      description: 'Master cloud deployment, Docker, and CI/CD pipelines',
      icon: FaCogs,
      difficulty: 'Advanced',
      courses: 11,
      xp: 3500,
      currentXP: 2300,
      level: 15,
      maxLevel: 25,
      stars: 4.8,
      reviews: 210,
      badge: FaCheckCircle,
      achievements: ['Docker Pro', 'Kubernetes', 'AWS Expert'],
      color: '#ffffff',
      accentColor: '#00ff48'
    },
    {
      id: 6,
      title: 'Data Science Scholar',
      description: 'Learn Python, ML, and data analysis fundamentals',
      icon: FaChartLine,
      difficulty: 'Beginner',
      courses: 9,
      xp: 2800,
      currentXP: 1600,
      level: 11,
      maxLevel: 22,
      stars: 4.8,
      reviews: 305,
      badge: FaHeartbeat,
      achievements: ['Python Expert', 'ML Basics', 'Analytics'],
      color: '#ffffff',
      accentColor: '#00ff48'
    }
  ]

  const userStats = {
    totalXP: 12345,
    level: 18,
    streakDays: 7,
    pathsCompleted: 2,
    achievements: 15,
    rank: 'Senior Developer'
  }

  const getProgressPercentage = (current, total) => (current / total) * 100

  return (
    <div className='page-container'>
      <div className='page-hero'>
        <h1>Learning Paths</h1>
        <p>Choose your journey and master in-demand skills</p>
      </div>

      <div className='page-content'>
        {/* User Stats */}
        <div className='user-stats-section'>
          <div className='stat-card'>
            <div className='stat-icon' style={{ color: '#00ff48' }}>
              <FaLightbulb />
            </div>
            <div className='stat-info'>
              <h4>Total XP</h4>
              <p>{userStats.totalXP.toLocaleString()}</p>
            </div>
          </div>
          <div className='stat-card'>
            <div className='stat-icon' style={{ color: '#00ff48' }}>
              <FaStar />
            </div>
            <div className='stat-info'>
              <h4>Level</h4>
              <p>{userStats.level}</p>
            </div>
          </div>
          <div className='stat-card'>
            <div className='stat-icon' style={{ color: '#00ff48' }}>
              <FaFire />
            </div>
            <div className='stat-info'>
              <h4>Streak</h4>
              <p>{userStats.streakDays} days</p>
            </div>
          </div>
          <div className='stat-card'>
            <div className='stat-icon' style={{ color: '#00ff48' }}>
              <FaTrophy />
            </div>
            <div className='stat-info'>
              <h4>Rank</h4>
              <p>{userStats.rank}</p>
            </div>
          </div>
        </div>

        {/* Paths Grid */}
        <section className='paths-section'>
          <h2 className='paths-title'>Choose Your Path</h2>
          <div className='paths-grid'>
            {learningPaths.map(path => (
              <div 
                key={path.id} 
                className={`path-card ${selectedPath === path.id ? 'selected' : ''}`}
                onClick={() => setSelectedPath(selectedPath === path.id ? null : path.id)}
              >
                {/* Path Content */}
                <div className='path-content'>
                  <h3>{path.title}</h3>
                  <p className='path-description'>{path.description}</p>

                  {/* Stats Row */}
                  <div className='path-stats-row'>
                    <span className='stat'><FaCode /> {path.courses} Courses</span>
                    <span className='stat'><FaClock /> Advanced</span>
                  </div>

                  {/* Difficulty Badge */}
                  <div className='difficulty-badge' data-difficulty={path.difficulty}>
                    {path.difficulty === 'Beginner' && <FaLightbulb />}
                    {path.difficulty === 'Intermediate' && <FaBolt />}
                    {path.difficulty === 'Advanced' && <FaFire />}
                    <span>{path.difficulty}</span>
                  </div>

                  {/* Rating */}
                  <div className='path-rating'>
                    <div className='stars'>
                      {[...Array(5)].map((_, i) => (
                        <FaStar 
                          key={i} 
                          className={i < Math.floor(path.stars) ? 'filled' : 'empty'}
                        />
                      ))}
                    </div>
                    <span className='rating-text'>{path.stars} ({path.reviews})</span>
                  </div>

                  {/* Progress Bar */}
                  <div className='path-progress'>
                    <div className='progress-info'>
                      <span>Progress</span>
                      <span>{Math.round(getProgressPercentage(path.currentXP, path.xp))}%</span>
                    </div>
                    <div className='progress-bar'>
                      <div 
                        className='progress-fill' 
                        style={{ 
                          width: `${getProgressPercentage(path.currentXP, path.xp)}%`,
                          background: path.color
                        }}
                      ></div>
                    </div>
                    <div className='xp-info'>
                      <span>{path.currentXP.toLocaleString()} / {path.xp.toLocaleString()} XP</span>
                    </div>
                  </div>

                  {/* Level Info */}
                  <div className='level-info'>
                    <div className='level-badge'>Level {path.level}/{path.maxLevel}</div>
                  </div>

                  {/* Achievements */}
                  {selectedPath === path.id && (
                    <div className='achievements-list'>
                      <h4>Achievements Unlocked</h4>
                      <div className='achievements'>
                        {path.achievements.map((ach, idx) => (
                          <div key={idx} className='achievement-badge'>
                            {ach}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA Button */}
                  <Link to='/courses' className='path-btn'>
                    Continue Learning
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Leaderboard Section */}
        <section className='leaderboard-section'>
          <h2>Top Learners</h2>
          <div className='leaderboard'>
            {[
              { rank: 1, name: 'Alex Chen', level: 25, xp: 45000, streak: 180 },
              { rank: 2, name: 'Jordan Lee', level: 23, xp: 41000, streak: 156 },
              { rank: 3, name: 'Sam Rivers', level: 22, xp: 39500, streak: 142 },
              { rank: 4, name: 'Casey Morgan', level: 20, xp: 36000, streak: 128 },
              { rank: 5, name: 'Taylor Swift', level: 19, xp: 34000, streak: 115 }
            ].map(entry => (
              <div key={entry.rank} className='leaderboard-entry'>
                <div className='rank-badge'>#{entry.rank}</div>
                <div className='entry-info'>
                  <h4>{entry.name}</h4>
                  <p>Level {entry.level} • {entry.xp.toLocaleString()} XP • <FaFire style={{ color: '#FF6B6B', marginRight: '4px' }} /> {entry.streak}</p>
                </div>
                {entry.rank === 1 && <FaTrophy className='trophy-icon' />}
                {entry.rank === 2 && <FaMedal className='medal-icon' color='#C0C0C0' />}
                {entry.rank === 3 && <FaMedal className='medal-icon' color='#CD7F32' />}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Paths
