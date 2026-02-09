import React from 'react'
import './Plans.css'
import { FaCheck } from "react-icons/fa6";

const Plans = () => {
  return (
    <div>
        <div className='plantextcontainer'>
            <h1 className="plantext">Our Plans</h1>
            <p>Explore our plans and find what fits you best!</p>
        </div>
        <div className='plancards'>
            <div className="plancard">
                <h6>Free</h6>
                <h1>$0</h1>
                <p><FaCheck className='check' /> Access free courses</p>
                <p><FaCheck className='check' /> Access free projects</p>
            </div>
            <div className="plancard">
                <h6>Pro</h6>
                <h1>$15</h1>
                <p><FaCheck className='check' /> Access free + paid course</p>
                <p><FaCheck className='check' /> Access free + paid projects</p>
                <p><FaCheck className='check' /> Access paid source code</p>
            </div>
            <div className="plancard">
                <h6>Plus</h6>
                <h1>$25</h1>
                <p><FaCheck className='check' /> Access paid course</p>
                <p><FaCheck className='check' /> Access paid projects</p>
                <p><FaCheck className='check' /> Access paid source code</p>
                <p><FaCheck className='check' /> Download course video</p>
            </div>
        </div>
    </div>
  )
}

export default Plans