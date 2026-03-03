import React from 'react'
import './Hero.css'
import bg from '../../assets/background.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero-section'>
        <div className="herocontent">
            <img className='bg' src={bg} alt="" />
            <div className='herotextdiv'>
            <h1 className='herotext'>Ready to Learn Something <span className='color'>?</span></h1>
            <p className='heroparagraph'>Sign up now to start your awesome learning journey with our awesome courses!</p>
            <div className='herobuttondiv'>
                  <Link to='/courses' className='signupbuttonpc hero-link-btn'>View Courses</Link>

                  <Link to='/signup' className='getstartedbutton hero-link-btn'>Get Started</Link>
            </div>

                <div className='hero-quick-chips'>
                  <span className='hero-chip'>Live Projects</span>
                  <span className='hero-chip'>Beginner to Advanced</span>
                  <span className='hero-chip'>Expert Mentors</span>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Hero