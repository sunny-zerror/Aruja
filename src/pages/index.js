import Hero from '@/components/Home/Hero'
import ReviewSection from '@/components/Home/ReviewSection'
import ServiceSlider from '@/components/Home/ServiceSlider'
import StaticImage from '@/components/Home/StaticImage'
import StickyWork from '@/components/Home/StickyWork'
import React from 'react'

const index = () => {
  return (
    <>
      <Hero/>
      {/* <div className="h-screen"></div> */}
      <StaticImage />
      <StickyWork />
      <ServiceSlider/>
      {/* <ReviewSection/> */}
    </>
  )
}

export default index