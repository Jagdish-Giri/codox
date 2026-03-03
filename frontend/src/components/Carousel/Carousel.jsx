import React, { useState } from 'react';
import './Carousel.css';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = React.useState(3);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 580) {
        setCardsPerView(1);
      } else if (window.innerWidth <= 968) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
      setCurrentIndex(0); // Reset position on resize
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCourseClick = () => {
    if (isDragging) return; // Prevent click during drag
    window.scrollTo(0, 0);
  };

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

  // Touch handlers
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    
    const swipeThreshold = 100;
    const distance = touchStart - touchEnd;

    if (Math.abs(distance) > swipeThreshold) {
      if (distance > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    
    setIsDragging(false);
    setTouchStart(0);
    setTouchEnd(0);
  };

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setTouchStart(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setTouchEnd(e.clientX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    
    const swipeThreshold = 100;
    const distance = touchStart - touchEnd;

    if (Math.abs(distance) > swipeThreshold) {
      if (distance > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    
    setIsDragging(false);
    setTouchStart(0);
    setTouchEnd(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setTouchStart(0);
      setTouchEnd(0);
    }
  };

  return (
    <div>
      <div className='carouselcontainer'>
        <h1 className='carouseltoptext'>View <span className='underline'>Courses</span></h1>
        <p>Explore some of our latest and most awesome courses! </p>
      </div>
    <div className="carousel-container">
      <button className="carousel-btn left-btn" onClick={prevSlide}>
        <FaArrowLeft />
      </button>

      <div className="carousel-wrapper"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div 
          className="carousel-track" 
          style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
        >
          {courses.map((course) => (
            <div key={course.id} className="carousel-card">
              <div className="course-image"></div>
              <div className="course-footer">
                <h3>{course.title}</h3>
                <button className="play-btn" onClick={handleCourseClick}>Play</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="carousel-btn right-btn" onClick={nextSlide}>
        <FaArrowRight />
      </button>
    </div>
    
    <div className='carousel-progress-mobile'>
      <div className='carousel-counter'>{currentIndex + 1} / {courses.length}</div>
      <div className='progress-dots'>
        {courses.map((_, index) => (
          <span 
            key={index} 
            className={`progress-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => !isDragging && setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Carousel;
