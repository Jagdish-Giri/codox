import React, { useState } from 'react'
import './Header.css'
import { FaBars } from "react-icons/fa6";


const Header = () => {
   const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
    <div className='header'>
        <nav className='navbarforpc'>
            <div className='logodiv'><h1 className='logo'>Codox<span className='color'>.</span></h1></div>
            <ul className='navbarlinksforpc'>
                <li>Home</li>
                <li>Courses</li>
                <li>Projects</li>
                <li>Plans</li>
                 
            </ul>
            <div className='signupbuttondiv'>
                    <button className='signupbuttonpc'>Sign Up</button>
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
                <li>Home</li>
                <li>Courses</li>
                <li>Projects</li>
                <li>Plans</li>
                 <div className='signupbuttondiv'>
                    <button className='signupbutton'>Sign Up</button>
                 </div>
            </ul>
            </div>
    </div>
  )
}

export default Header