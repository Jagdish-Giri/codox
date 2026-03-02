import React from 'react'
import Hero from '../components/Hero/Hero'
import Slider from '../components/Slider/Slider'
import Carousel from '../components/Carousel/Carousel'
import Plans from '../components/Plans/Plans'
import Review from '../components/Testimonials/Review'

const Home = () => {
  return (
    <>
      <Hero />
      <Slider />
      <Carousel />
      <Plans />
      <Review />
    </>
  )
}

export default Home
