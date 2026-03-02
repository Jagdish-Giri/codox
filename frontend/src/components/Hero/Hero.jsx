import React from 'react'
import './Hero.css'
import bg from '../../assets/background.png'

const Hero = () => {
  return (
    <div className='hero-section'>
        <div className="herocontent">
            <img className='bg' src={bg} alt="" />
            <div className='herotextdiv'>
            <h1 className='herotext'>Ready to Learn Something <span className='color'>?</span></h1>
            <p className='heroparagraph'>Sign up now to start your awesome learning journey with our awesome courses!</p>
            <div className='herobuttondiv'>
                    <button className='signupbuttonpc'>View Courses</button>

                    <button className='getstartedbutton'>Get Started</button>
            </div>
            </div>
        </div>
        
    </div>
  )
}

export default Hero