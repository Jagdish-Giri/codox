import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { FaBars } from "react-icons/fa6";


const Header = () => {
   const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
    <div className='header'>
        <nav className='navbarforpc'>
            <div className='logodiv'><Link to='/' className='logo-link'><h1 className='logo'>Codox<span className='color'>.</span></h1></Link></div>
            <ul className='navbarlinksforpc'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/courses'>Courses</Link></li>
                <li><Link to='/services'>Services</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
            <div className='signupbuttondiv'>
                    <Link to='/login' className='signupbuttonpc-link'>
                      <button className='signupbuttonpc'>Login</button>
                    </Link>
                 </div>
                 <div className='menu'onClick={() => setIsOpen(!isOpen)}>
                    <div className='menubutton'>
                        <FaBars className='menuicon'/>
                    </div>
                 </div>
        </nav>
        
    </div>
    <div className={`mobilemenu ${isOpen ? 'active' : ''}`}>
    <ul className='navbarlinksformobile'>
                <li><Link to='/' onClick={() => setIsOpen(false)}>Home</Link></li>
                <li><Link to='/courses' onClick={() => setIsOpen(false)}>Courses</Link></li>
                <li><Link to='/services' onClick={() => setIsOpen(false)}>Services</Link></li>
                <li><Link to='/about' onClick={() => setIsOpen(false)}>About</Link></li>
                 <div className='signupbuttondiv'>
                    <Link to='/login' className='signupbutton-link' onClick={() => setIsOpen(false)}>
                      <button className='signupbutton'>Login</button>
                    </Link>
                 </div>
            </ul>
            </div>
    </div>
  )
}

export default Header