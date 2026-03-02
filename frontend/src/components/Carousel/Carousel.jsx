import React, { useState } from 'react';
import './Carousel.css';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const courses = [
    { id: 1, title: 'Course title' },
    { id: 2, title: 'Course title' },
    { id: 3, title: 'Course title' },
    { id: 4, title: 'Course title' },
    { id: 5, title: 'Course title' },
    { id: 6, title: 'Course title' },
    { id: 7, title: 'Course title' },
    { id: 8, title: 'Course title' },
  ];

  const cardsPerView = 3; // Desktop me 3 cards dikheinge
  const maxIndex = Math.max(0, courses.length - cardsPerView);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  return (
    <div>
      <div className='carouselcontainer'>
        <h1 className='carouseltoptext'>View Courses</h1>
        <p>Explore some of our latest and most awesome courses! </p>
      </div>
    <div className="carousel-container">
      <button className="carousel-btn left-btn" onClick={prevSlide}>
        <FaArrowLeft />
      </button>

      <div className="carousel-wrapper">
        <div 
          className="carousel-track" 
          style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
        >
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <div className="course-image"></div>
              <div className="course-footer">
                <h3>{course.title}</h3>
                <button className="play-btn">Play</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="carousel-btn right-btn" onClick={nextSlide}>
        <FaArrowRight />
      </button>
    </div>
    </div>
  );
};

export default Carousel;
