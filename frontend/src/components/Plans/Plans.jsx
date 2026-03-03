import React from 'react'
import './Plans.css'
import { FaCheck } from "react-icons/fa6";

const Plans = () => {
  return (
    <div>
        <div className='plantextcontainer'>
            <h1 className="plantext">Our <span className="underline">Plans</span></h1>
            <p>Explore our plans and find what fits you best!</p>
        </div>
        <div className='plancards'>
            <div className="plancard">
                <h6>Free</h6>
                <h1>$0</h1>
                <p><FaCheck className='check' /> Access free courses</p>
                <p><FaCheck className='check' /> Access free projects</p>
                <p><FaCheck className='check' /> Community support</p>
                <p><FaCheck className='check' /> Basic certificates</p>
                <button className='buy-btn'>Get Started</button>
            </div>
            <div className="plancard">
                <h6>Pro</h6>
                <h1>$15</h1>
                <p><FaCheck className='check' /> Access all courses</p>
                <p><FaCheck className='check' /> Access all projects</p>
                <p><FaCheck className='check' /> Download source code</p>
                <p><FaCheck className='check' /> Priority support</p>
                <button className='buy-btn'>Buy Now</button>
            </div>
            <div className="plancard">
                <h6>Plus</h6>
                <h1>$25</h1>
                <p><FaCheck className='check' /> Unlimited course access</p>
                <p><FaCheck className='check' /> All projects + resources</p>
                <p><FaCheck className='check' /> Download videos & code</p>
                <p><FaCheck className='check' /> 24/7 premium support</p>
                <button className='buy-btn'>Buy Now</button>
            </div>
        </div>
    </div>
  )
}

export default Plans